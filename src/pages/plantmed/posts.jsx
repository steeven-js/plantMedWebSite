import { Helmet } from 'react-helmet-async';

import PlantePostsView from 'src/sections/_plante/view/plante-posts-view';

// ----------------------------------------------------------------------

export default function PlantePostsPage() {
  return (
    <>
      <Helmet>
        <title> Career: Blog</title>
      </Helmet>

      <PlantePostsView />
    </>
  );
}
