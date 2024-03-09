import { Helmet } from 'react-helmet-async';

import PlanteListView from 'src/sections/_plante/view/plante-list-view';

// ----------------------------------------------------------------------

export default function PlantePage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Plantes</title>
      </Helmet>

      <PlanteListView />
    </>
  );
}
