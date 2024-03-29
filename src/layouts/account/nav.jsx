import PropTypes from 'prop-types';
import { signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";

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

// import { paths } from 'src/routes/paths';
import { useActiveLink } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { _mock } from 'src/_mock';

import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

import { db, auth } from '../../../firebase';
// ----------------------------------------------------------------------

const navigations = [
  {
    title: 'Info Personnelles',
    path: 'account/personal',
    icon: <Iconify icon="carbon:user" />,
  },
];

// ----------------------------------------------------------------------

export default function Nav({ open, onClose, userId, userData, userEmail }) {
  const navigate = useNavigate();
  const mdUp = useResponsive('up', 'md');
  const [userImageUrl, setUserImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      const fileExtension = selectedImage.name.split('.').pop();
      const avatarRef = ref(storage, `avatars/${userId}_avatar.${fileExtension}`);

      // Upload the image to Firebase Storage
      await uploadBytes(avatarRef, selectedImage);

      console.log("Avatar uploaded successfully!");

      // Obtenez l'URL de l'image téléchargée
      const imageUrl = await getDownloadURL(avatarRef);

      // Créer ou mettre à jour le document de l'utilisateur dans la collection userAvatar avec l'URL de l'image
      const userDocRef = doc(db, 'userAvatar', userId);
      await setDoc(userDocRef, { avatarUrl: imageUrl }, { merge: true });

      // console.log("Profile updated with avatar URL:", imageUrl);
      setUserImageUrl(imageUrl);
      setIsLoading(false);
    } catch (error) {
      console.error("Error uploading avatar:", error);
      setUserImageUrl(null);
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUserImageUrl(null);
      navigate("/");
      console.log("Déconnexion réussie");
    }).catch((error) => {
      console.error("Erreur de déconnexion:", error);
    });
  }

  useEffect(() => {
    setIsLoading(true);
    const userAvatarRef = doc(db, 'userAvatar', userId);
    const unsubscribe = onSnapshot(userAvatarRef, (snapshot) => {
      if (snapshot.exists()) {
        const userAvatarData = snapshot.data();
        // console.log('userId:', userId, 'userAvatarData:', userAvatarData);
        setUserImageUrl(userAvatarData.avatarUrl);
      } else {
        console.log('Le document userAvatar avec l\'UID', userId, 'n\'existe pas.');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [userId]);

  console.log('userImageUrl:', userImageUrl)

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
            <Avatar src={userImageUrl || _mock.image.avatar(0)} sx={{ width: 64, height: 64 }} />
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

// ----------------------------------------------------------------------

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
