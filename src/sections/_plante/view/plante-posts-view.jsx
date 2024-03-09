import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { _tags, _mock, _categories, _plantePosts } from 'src/_mock';

import CareerNewsletter from '../plante-newsletter';
import PostSidebar from '../../blog/common/post-sidebar';
import PlantePosts from '../../blog/plante/plante-posts';
import PostSearchMobile from '../../blog/common/post-search-mobile';

// ----------------------------------------------------------------------

export default function PlantePostsView() {
  return (
    <>
      <PostSearchMobile />

      <Container
        sx={{
          pt: { xs: 0, md: 5 },
          pb: { xs: 8, md: 15 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <PlantePosts posts={_plantePosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _plantePosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.career(10),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <CareerNewsletter />
    </>
  );
}
