import { Helmet } from 'react-helmet-async';

import CareerLandingView from 'src/sections/_career/view/career-landing-view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Solution par les plantes</title>
      </Helmet>

      <CareerLandingView />
    </>
  );
}
