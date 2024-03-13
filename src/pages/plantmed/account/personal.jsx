import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
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
          const userProfileRef = doc(db, "userProfile", uid); // Reference to the document in "userProfile" collection with UID as document ID
          const userProfileSnapshot = await getDoc(userProfileRef); // Fetch the document snapshot
          if (userProfileSnapshot.exists()) {
            const userProfileData = userProfileSnapshot.data(); // Extract the data from the snapshot
            setUserData(userProfileData);
          } else {
            console.log('User profile does not exist');
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setUserEmail('');
        console.log('User signed out');
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, [auth]);

  return (
    <>
      <Helmet>
        <title>E-commerce: Account Personal</title>
      </Helmet>

      {isLoading ? <SplashScreen /> : <EcommerceAccountPersonalView userId={userId} userEmail={userEmail} userData={userData} />}
    </>
  );
}
