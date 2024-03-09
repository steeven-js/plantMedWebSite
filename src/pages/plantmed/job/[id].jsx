import { Helmet } from 'react-helmet-async';

import CareerJobView from 'src/sections/_plante/view/plante-job-view';

// ----------------------------------------------------------------------

export default function CareerJobPage() {
  return (
    <>
      <Helmet>
        <title> Career: Job</title>
      </Helmet>

      <CareerJobView />
    </>
  );
}
