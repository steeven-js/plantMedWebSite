import { Helmet } from 'react-helmet-async';

import PlanteView from 'src/sections/_plante/view/plante-job-view';

// ----------------------------------------------------------------------

export default function PlantePage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Plante</title>
      </Helmet>

      <PlanteView />
    </>
  );
}
