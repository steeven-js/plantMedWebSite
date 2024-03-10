import { Helmet } from 'react-helmet-async';

import SymptomesListView from 'src/sections/_plante/view/symptomes-list-view';

// ----------------------------------------------------------------------

export default function SymptomesPage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Plantes</title>
      </Helmet>

      <SymptomesListView />
    </>
  );
}
