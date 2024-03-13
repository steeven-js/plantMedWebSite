import { useState } from 'react';
import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import PropTypes from 'prop-types';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';

// import { paths } from 'src/routes/paths';
import { useActiveLink } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { _mock } from 'src/_mock';

import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

import { auth } from '../../../firebase';
// ----------------------------------------------------------------------

const navigations = [
  {
    title: 'Info Personnelles',
    path: 'account/personal',
    icon: <Iconify icon="carbon:user" />,
  },
];

// ----------------------------------------------------------------------


export default function Nav({ open, onClose, userData, userEmail }) {
  const navigate = useNavigate();
  const mdUp = useResponsive('up', 'md');

  const storage = getStorage(); // Initialiser Firestore Storage

  // Générer une suite de caractères aléatoires pour le nom de l'avatar
  const randomString = (length) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  };

  const handleImageUpload = async (event) => {
    const selectedImage = event.target.files[0];
    const fileName = selectedImage.name;
    const fileExtension = fileName.split('.').pop(); // Extraire l'extension du fichier
    const chars = randomString(50); // Génère une chaîne aléatoire de longueur 10
    const userStorageRef = storageRef(storage, `avatars/${chars}.${fileExtension}`); // Utilisez le bon chemin pour stocker les avatars avec l'extension
    console.log('userStorageRef :', userStorageRef);
    try {
      await uploadBytes(userStorageRef, selectedImage);
      console.log('Image envoyée avec succès à Firestore Storage.');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'image à Firestore Storage:', error);
    }
  };

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
          <Avatar src={_mock.image.avatar(0)} sx={{ width: 64, height: 64 }} />
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              typography: 'caption',
              cursor: 'pointer',
              '&:hover': { opacity: 0.72 },
            }}
          >
            <Iconify icon="carbon:edit" sx={{ mr: 1 }} />
            Changer la photo
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </Stack>
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
