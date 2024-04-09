import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { ref, getStorage, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { alpha, styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import CircularProgress from '@mui/material/CircularProgress';

import { useActiveLink } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { _mock } from 'src/_mock';

import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

import { auth } from '../../../firebase';

const navigations = [
  {
    title: 'Info Personnelles',
    path: 'account/personal',
    icon: <Iconify icon="carbon:user" />,
  },
];

export default function Nav({ open, onClose, userId, userData, userEmail }) {
  const navigate = useNavigate();
  const mdUp = useResponsive('up', 'md');
  const [isLoading, setIsLoading] = useState(false);
  const [userPhotoURL, setUserPhotoURL] = useState('');

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const handleImageUpload = async (event) => {
    const selectedImage = event.target.files[0];

    try {
      setIsLoading(true);
      const storage = getStorage();
      const avatarRefPath = `avatars/${userId}_avatar`;

      // Vérifier si le chemin existe déjà dans le stockage
      try {
        const existingAvatarRef = ref(storage, avatarRefPath);

        // Supprimer l'avatar existant
        await deleteObject(existingAvatarRef);
        console.log('Ancien avatar supprimé avec succès.');
      } catch (deleteError) {
        console.error('Erreur lors de la suppression de l\'ancien avatar:', deleteError);
      }

      // Télécharger le nouvel avatar
      const newAvatarRef = ref(storage, avatarRefPath);
      await uploadBytes(newAvatarRef, selectedImage);

      // Obtenez l'URL de l'avatar mis à jour
      const updatedDownloadURL = await getDownloadURL(newAvatarRef);

      // Mettre à jour le profil de l'utilisateur avec la nouvelle URL de photo
      const user = auth.currentUser;
      await updateProfile(user, { photoURL: updatedDownloadURL });

      // Mettre à jour l'URL de la photo de l'utilisateur dans le composant
      setUserPhotoURL(updatedDownloadURL);

      console.log('imageUrl:', updatedDownloadURL);
      console.log('user photoURL:', user.photoURL);

      console.log("Avatar mis à jour avec succès !");

      setIsLoading(false);
    } catch (error) {
      console.error("Error uploading avatar:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { photoURL } = user;
        setUserPhotoURL(photoURL);
        setIsLoading(false);
      } else {
        setUserPhotoURL('');
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [userPhotoURL]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/");
      console.log("Déconnexion réussie");
    }).catch((error) => {
      console.error("Erreur de déconnexion:", error);
    });
  }

  const renderContent = (
    <Stack
      sx={{
        flexShrink: 0,
        borderRadius: 2,
        width: 1,
        ...(mdUp && {
          width: 280,
          border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        }),
      }}
    >
      <Stack spacing={2} sx={{ p: 3, pb: 2 }}>
        <Stack spacing={2} direction="row" alignItems="center">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Avatar src={userPhotoURL || _mock.image.avatar(0)} sx={{ width: 64, height: 64 }} />
          )}
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            onChange={handleImageUpload}
          >
            Changer
            <VisuallyHiddenInput type="file" />
          </Button>
        </Stack>

        <Stack spacing={0.5}>
          <TextMaxLine variant="subtitle1" line={1}>
            {userData.firstName} {userData.lastName}
          </TextMaxLine>
          <TextMaxLine variant="body2" line={1} sx={{ color: 'text.secondary' }}>
            {userEmail}
          </TextMaxLine>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack sx={{ my: 1, px: 2 }}>
        {navigations.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack sx={{ my: 1, px: 2 }}>
        <ListItemButton
          sx={{
            px: 1,
            height: 44,
            borderRadius: 1,
          }}
        >
          <ListItemIcon>
            <Iconify icon="carbon:logout" />
          </ListItemIcon>
          <ListItemText
            primary="Déconnexion"
            primaryTypographyProps={{
              typography: 'body2',
            }}
            onClick={handleLogout}
          />
        </ListItemButton>
      </Stack>
    </Stack>
  );

  return (
    <>
      {mdUp ? (
        renderContent
      ) : (
        <Drawer
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              width: 280,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

Nav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  userData: PropTypes.object,
  userEmail: PropTypes.string,
  userId: PropTypes.string,
};

function NavItem({ item }) {
  const active = useActiveLink(item.path);

  return (
    <Link
      component={RouterLink}
      key={item.title}
      href={item.path}
      color={active ? 'primary' : 'inherit'}
      underline="none"
    >
      <ListItemButton
        sx={{
          px: 1,
          height: 44,
          borderRadius: 1,
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          primary={item.title}
          primaryTypographyProps={{
            typography: 'body2',
            ...(active && {
              typography: 'subtitle2',
            }),
          }}
        />
      </ListItemButton>
    </Link>
  );
}

NavItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    path: PropTypes.string,
    title: PropTypes.string,
  }),
};
