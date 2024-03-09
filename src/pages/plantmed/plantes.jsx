import { Helmet } from 'react-helmet-async';

import PlanteJobsView from 'src/sections/_plante/view/plante-jobs-view';

// ----------------------------------------------------------------------

export default function CareerJobsPage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Plantes</title>
      </Helmet>

      <PlanteJobsView />
    </>
  );
}
