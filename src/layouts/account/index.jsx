import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';
import { SplashScreen } from 'src/components/loading-screen';

import Nav from './nav';
import { db } from '../../../firebase';

// ----------------------------------------------------------------------

export default function AccountLayout({ children }) {
  const mdUp = useResponsive('up', 'md');
  const menuOpen = useBoolean();
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState({});
  const [userEmail, setUserEmail] = useState('');
  const auth = getAuth();

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid, email } = user;
        setUserId(uid);
        setUserEmail(email);

        try {
          const userProfileRef = doc(db, "userProfile", uid);
          const unsubscribeSnapshot = onSnapshot(userProfileRef, (userProfileSnapshot) => {
            if (userProfileSnapshot.exists()) {
              const userProfileData = userProfileSnapshot.data();
              setUserData(userProfileData);
            } else {
              console.log('Le profil utilisateur n\'existe pas');
            }
            setIsLoading(false);
          });
          return () => unsubscribeSnapshot();
        } catch (error) {
          console.error('Erreur lors de la récupération du profil utilisateur :', error);
          setIsLoading(false);
        }
      } else {
        setUserEmail('');
        setIsLoading(false);
        console.log('Utilisateur déconnecté');
      }
      return null; // Ajouter un retour de valeur nul à la fin de la fonction
    });

    // Fonction de nettoyage
    return () => unsubscribe();
  }, [auth]);

  return (
    <>
      {mdUp && isLoading ? (
        <Container sx={{ my: 5 }}>
          <Typography variant="h3">Mon compte</Typography>
        </Container>
      ) : (
        <Box
          sx={{
            py: 2,
            mb: 5,
            borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
          }}
        >
          <Container>
            <Button
              size="small"
              color="inherit"
              startIcon={<Iconify icon="carbon:menu" />}
              onClick={menuOpen.onTrue}
            >
              Mon compte
            </Button>
          </Container>
        </Box>
      )}

      <Container>
        <Stack
          direction={{
            md: 'row',
          }}
          alignItems={{
            md: 'flex-start',
          }}
          sx={{
            mb: {
              xs: 8,
              md: 10,
            },
          }}
        >
          {isLoading ? <SplashScreen /> : <Nav open={menuOpen.value} onClose={menuOpen.onFalse} userId={userId} userData={userData} userEmail={userEmail} />}

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 8 },
              width: { md: `calc(100% - ${280}px)` },
            }}
          >
            {children}
          </Box>
        </Stack>
      </Container>
    </>
  );
}

AccountLayout.propTypes = {
  children: PropTypes.node,
};
