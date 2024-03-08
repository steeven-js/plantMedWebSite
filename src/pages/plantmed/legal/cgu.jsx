import { Helmet } from 'react-helmet-async';

import CguView from 'src/sections/_career/view/cgu-view';

// ----------------------------------------------------------------------

export default function CguPage() {
  return (
    <>
      <Helmet>
        <title> PlantMed: CGU</title>
      </Helmet>

      <CguView />
    </>
  );
}
