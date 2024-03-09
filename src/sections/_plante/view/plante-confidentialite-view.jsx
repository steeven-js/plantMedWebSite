import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
// import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// import { paths } from 'src/routes/paths';

// import { fDate } from 'src/utils/format-time';

import { _socials, _plantePosts2 } from 'src/_mock';

import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// import PostTags from '../../blog/common/post-tags';
// import CareerNewsletter from '../plante-newsletter';
import PostAuthor from '../../blog/common/post-author';
// import PostTimeBlock from '../../blog/common/post-time-block';
import PostSocialsShare from '../../blog/common/post-socials-share';
// import PlanteLatestPosts from '../../blog/plante/plante-latest-posts';

// ----------------------------------------------------------------------

export default function ConfidentialiteView() {
  const { author, content2 } =
    _plantePosts2[0];

  // const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState(null);

  const handleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  // const handleChangeFavorite = useCallback((event) => {
  //   setFavorite(event.target.checked);
  // }, []);

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
                { name: 'Politiques de confidentialités' },
              ]}
              sx={{ my: 5 }}
            />

            <Typography variant="h2" component="h1">
              Politiques de confidentialités
            </Typography>

            <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ my: 5 }}>
              <Avatar src={author.avatarUrl} sx={{ width: 48, height: 48 }} />

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

                {/* <Checkbox
                  color="error"
                  checked={favorite}
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="carbon:favorite" />}
                  checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                /> */}
              </Stack>
            </Stack>

            {/* <Typography variant="h5" sx={{ mb: 5 }}>
              {description}
            </Typography> */}

            <Markdown content={content2} firstLetter />

            {/* <PostTags tags={tags} /> */}

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* <PlanteLatestPosts posts={_plantePosts.slice(0, 5)} /> */}

      {/* <CareerNewsletter /> */}

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
