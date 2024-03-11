import { Helmet } from 'react-helmet-async';

import LoginBackgroundView from 'src/sections/auth/login-background-view';

// ----------------------------------------------------------------------

export default function LoginBackgroundPage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Login</title>
      </Helmet>

      <LoginBackgroundView />
    </>
  );
}
