import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { inputClasses } from '@mui/material/Input';
import { alpha, useTheme } from '@mui/material/styles';

import useFetchPlants from 'src/hooks/useFetchPlants';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';
import PlanteHeroIllustration from 'src/assets/illustrations/plante-hero-illustration';

import Iconify from 'src/components/iconify';

import FilterPlantes from '../filters/filter-plantes';


// ----------------------------------------------------------------------

export default function CareerLandingHero() {

  const { data } = useFetchPlants();

  const navigate = useNavigate();
  const theme = useTheme();

  // console.log('data', data)

  const mdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState({
    FilterPlantes: null,
  });

  const [plantId, setPlantId] = useState(null);

  const handleChangePlantes = useCallback(
    (newValue) => {
      setFilters({
        ...filters,
        FilterPlantes: newValue,
      });
    },
    [filters]
  );

  useEffect(() => {
    // Assuming data is fetched asynchronously
    if (data && filters.FilterPlantes) {
      const selectedPlant = data.find((plant) => plant.name === filters.FilterPlantes);

      if (selectedPlant) {
        setPlantId(selectedPlant.id);
      } else {
        // Handle the case when the selected plant is not found
        console.error(`Plant with name ${filters.FilterPlantes} not found.`);
      }
    }
  }, [data, filters.FilterPlantes]);

  // console.log('plantId', plantId);

  const handleRequest = () => {
    // Url avec l'id de la plante sélectionnée
    if (plantId) {
      navigate(`/plantmed/plante/${plantId}`);
    } else {
      console.error('Plant ID not available.');
    }
  }

  const renderFilters = (
    <Stack
      spacing={{ xs: 1, md: 0 }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        p: 1,
        borderRadius: 1,
        bgcolor: 'common.white',
        alignItems: { md: 'center' },
        justifyContent: { md: 'center' },
      }}
    >
      <FilterPlantes
        FilterPlantes={filters.FilterPlantes}
        onChangePlantes={handleChangePlantes}
        sx={{
          bgcolor: 'transparent',
          [`&:hover, &.${inputClasses.focused}`]: {
            bgcolor: 'transparent',
          },
        }}
      />

      {mdUp && <Divider orientation="vertical" sx={{ height: 24 }} />}

      <Button
        onClick={handleRequest}
        size="large"
        variant="contained"
        color="primary"
        sx={{
          px: 0,
          minWidth: { xs: 1, md: 48 },
        }}
      >
        <Iconify icon="carbon:search" width={24} />
      </Button>
    </Stack>
  );

  const renderSummary = (
    <Stack
      spacing={3}
      direction={{ xs: 'column', md: 'row' }}
      divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      sx={{ pt: { md: 5 } }}
    >
      <Stack
        spacing={{ md: 3 }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">140+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Plantes médicinales
          </Typography>
        </Stack>

        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">90+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Symptômes
          </Typography>
        </Stack>
      </Stack>

    </Stack>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        pt: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        pb: { xs: 10, md: 15 },
        display: { md: 'flex' },
        minHeight: { md: '100vh' },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={5}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h2" sx={{ color: 'common.white' }}>
                  Encourager l{'\''}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {` adoption `}
                  </Box>
                  de remèdes naturels
                </Typography>

                <Typography sx={{ color: 'grey.500' }}>
                  Solutions naturelles et alternatives aux maux courants de la vie quotidienne
                </Typography>
              </Stack>

              {renderFilters}

              {renderSummary}
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={6}>
              <PlanteHeroIllustration />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
