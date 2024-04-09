import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { doc, onSnapshot } from "firebase/firestore"; // Importer onSnapshot
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { SplashScreen } from 'src/components/loading-screen';

import EcommerceAccountPersonalView from 'src/sections/_account/ecommerce-account-personal-view';

import { db } from '../../../../firebase';

// ----------------------------------------------------------------------

export default function EcommerceAccountPersonalPage() {
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
      <Helmet>
        <title>E-commerce: Compte Personnel</title>
      </Helmet>

      {isLoading ? <SplashScreen /> : <EcommerceAccountPersonalView userId={userId} userEmail={userEmail} userData={userData} />}
    </>
  );
}
