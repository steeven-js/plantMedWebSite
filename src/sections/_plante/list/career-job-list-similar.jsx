import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import CareerJobItem from './career-job-item';

// ----------------------------------------------------------------------

export default function CareerJobListSimilar({ data }) {
  const mdUp = useResponsive('up', 'md');

  // Boucler pour obtenir l'url des plantes avec la relation media
  const plantMediaUrls = data?.plants?.map((plant) => plant.media[0]?.original_url);

  // console.log('plantMediaUrls:', plantMediaUrls);

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.plantmed.plantes}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      Toutes les plantes
    </Button>
  );

  return (
    <Box sx={{ bgcolor: 'background.neutral', py: { xs: 10, md: 15 } }}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Plantes médicinales associées</Typography>

          {mdUp && viewAllBtn}
        </Stack>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {data.plants.map((plant, index) => (
            <CareerJobItem key={plant.id} data={plant} plantMediaUrl={plantMediaUrls[index]} />
          ))}
        </Box>

        {!mdUp && (
          <Stack alignItems="center" sx={{ mt: 8 }}>
            {viewAllBtn}
          </Stack>
        )}
      </Container>
    </Box>
  );
}

CareerJobListSimilar.propTypes = {
  data: PropTypes.object,
};
