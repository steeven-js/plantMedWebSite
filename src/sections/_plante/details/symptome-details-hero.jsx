import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export default function SymptomeDetailsHero({ job, data }) {
  const theme = useTheme();

  // Extracting imgUrl from the media array
  const imgUrl = data.media[0]?.original_url || '/default-image-url.jpg';

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.1),
          imgUrl, // Property shorthand
        }),
        pt: 5,
        pb: 10,
      }}
    >
      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Accueil', href: '/' },
            { name: 'Symptômes', href: '/plantmed/symptomes' },
            { name: data.name },
          ]}
          sx={{
            mb: { xs: 5, md: 8 },
            '& a': {
              color: 'common.white',
            },
          }}
        />

        <Stack
          spacing={5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack spacing={{ xs: 3, md: 2 }} sx={{ color: 'common.white', textShadow: '8px 8px 12px rgba(0, 0, 0, 1)' }}>
            <Typography variant="h2" component="h1">
              {data.name}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

SymptomeDetailsHero.propTypes = {
  job: PropTypes.shape({
    slug: PropTypes.string,
    favorited: PropTypes.bool,
    category: PropTypes.string,
    location: PropTypes.string,
    totalViews: PropTypes.number,
    deadline: PropTypes.instanceOf(Date),
  }),
  data: PropTypes.object,
};
