import { Helmet } from 'react-helmet-async';

import ConfidentialiteView from 'src/sections/_career/view/confidentialite-view';

// ----------------------------------------------------------------------

export default function ConfidentialitePage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: Confidentialité</title>
      </Helmet>

      <ConfidentialiteView />
    </>
  );
}
