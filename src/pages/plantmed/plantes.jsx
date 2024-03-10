import { Helmet } from 'react-helmet-async';

import PlantesListView from 'src/sections/_plante/view/plantes-list-view';

// ----------------------------------------------------------------------

export default function PlantesPage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Plantes</title>
      </Helmet>

      <PlantesListView />
    </>
  );
}
