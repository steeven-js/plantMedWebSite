import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
// import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// import { paths } from 'src/routes/paths';

// import { fDate } from 'src/utils/format-time';

import { _plantePosts2 } from 'src/_mock';
// import PostTags from '../../blog/common/post-tags';
import { sourcesData } from 'src/data/SourcesData';

import Iconify from 'src/components/iconify';
// import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// import CareerNewsletter from '../plante-newsletter';
import PostAuthor from '../../blog/common/post-author';
// import PostTimeBlock from '../../blog/common/post-time-block';
// import PlanteLatestPosts from '../../blog/plante/plante-latest-posts';

// ----------------------------------------------------------------------

export default function SourceView() {
  const { author } =
    _plantePosts2[0];

  // const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState(null);

  const handleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  return (
    <>
      <Divider />

      <Container sx={{ overflow: 'hidden' }}>
        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <CustomBreadcrumbs
              links={[
                { name: 'Accueil', href: '/' },
                { name: 'Legal' },
                { name: 'Sources' },
              ]}
              sx={{ my: 5 }}
            />

            <Typography variant="h2" component="h1">
              Sources
            </Typography>

            <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ my: 5 }}>
              <Avatar src="/assets/images/avatar/avatar_9.jpg" sx={{ width: 48, height: 48 }} />

              <Stack spacing={0.5} flexGrow={1}>
                <Typography variant="subtitle2">Jacques Steeven</Typography>

                <Stack
                  flexWrap="wrap"
                  direction="row"
                  alignItems="center"
                  sx={{ typography: 'caption', color: 'text.disabled' }}
                >
                  <span>05 Février 2024</span>

                </Stack>
              </Stack>

              <Stack direction="row" alignItems="center">
                {/* http://localhost:3001/plantmed/legal/cgu */}
                <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton>
              </Stack>
            </Stack>

            {sourcesData.map((category, index) => (
              <div key={index}>
                <Typography variant="h6" sx={{ m: 2 }}>{category.title}</Typography>
                {category.sources.map((source, idx) => (
                  <Typography key={idx} variant="inherit" sx={{ m: 2 }}>{source}</Typography>
                ))}
              </div>
            ))}

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />
          </Grid>
        </Grid>
      </Container >

      <Divider />
    </>
  );
}
