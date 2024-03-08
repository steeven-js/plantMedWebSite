import { Helmet } from 'react-helmet-async';

import CareerPostView from 'src/sections/_career/view/cgu-view';

// ----------------------------------------------------------------------

export default function CareerPostPage() {
  return (
    <>
      <Helmet>
        <title> Career: Blog Post</title>
      </Helmet>

      <CareerPostView />
    </>
  );
}
