import { Helmet } from 'react-helmet-async';

import SourceView from 'src/sections/_plante/view/plante-source-view';

// ----------------------------------------------------------------------

export default function ConfidentialitePage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Source</title>
      </Helmet>

      <SourceView />
    </>
  );
}
