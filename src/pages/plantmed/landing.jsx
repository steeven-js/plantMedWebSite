import { Helmet } from 'react-helmet-async';

import PlanteLandingView from 'src/sections/_plante/view/plante-landing-view';

// ----------------------------------------------------------------------

export default function CareerLandingPage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Accueil</title>
      </Helmet>

      <PlanteLandingView />
    </>
  );
}
