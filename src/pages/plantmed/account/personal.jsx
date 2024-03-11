import { Helmet } from 'react-helmet-async';

import EcommerceAccountPersonalView from 'src/sections/_account/ecommerce-account-personal-view';

// ----------------------------------------------------------------------

export default function EcommerceAccountPersonalPage() {
  return (
    <>
      <Helmet>
        <title> E-commerce: Account Personal</title>
      </Helmet>

      <EcommerceAccountPersonalView />
    </>
  );
}
