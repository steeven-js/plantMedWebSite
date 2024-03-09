import { Helmet } from 'react-helmet-async';

import PlanteLandingView from 'src/sections/_plante/view/plante-landing-view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Solution par les plantes</title>
      </Helmet>

      <PlanteLandingView />
    </>
  );
}
