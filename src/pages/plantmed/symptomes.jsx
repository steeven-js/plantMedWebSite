import { Helmet } from 'react-helmet-async';

import CareerJobsView from 'src/sections/_plante/career-jobs-view';

// ----------------------------------------------------------------------

export default function SymptomesPage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Symptomes</title>
      </Helmet>

      {/* <SymptomesListView /> */}
      <CareerJobsView />
    </>
  );
}
