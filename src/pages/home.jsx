import { Helmet } from 'react-helmet-async';

import CareerLandingView from 'src/sections/_career/view/career-landing-view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> The starting point for your next project</title>
      </Helmet>

      <CareerLandingView />
    </>
  );
}
