import { Helmet } from 'react-helmet-async';

import SymptomesView from 'src/sections/_plante/view/symptomes-list-view';

// ----------------------------------------------------------------------

export default function SymptomesPage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Symptomes</title>
      </Helmet>

      <SymptomesView />
    </>
  );
}
