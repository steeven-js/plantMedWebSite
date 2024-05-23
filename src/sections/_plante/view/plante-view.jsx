import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _jobs } from 'src/_mock';

import { SplashScreen } from 'src/components/loading-screen';

import PlanteDetailsHero from '../details/plante-details-hero';
import PlanteDetailsInfo from '../details/plante-details-info';
import PlanteDetailsSummary from '../details/plante-details-summary';

// ----------------------------------------------------------------------

const _mockJob = _jobs[0];

export default function PlanteView({ data }) {
  const mdUp = useResponsive('up', 'md');
  const loading = useBoolean(true);

  // console.log('id:', id, 'data:', data);

  useEffect(() => {
    const fakeLoading = async () => {
      // console.log('Received data:', data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (loading.value) {
    return <SplashScreen />;
  }

  return (
    <>
      {data ? (
        <>
          <PlanteDetailsHero job={_mockJob} data={data} />

          <Container
            sx={{
              overflow: 'hidden',
              pt: { xs: 5, md: 10 },
              pb: 10,
            }}
          >
            <Grid container spacing={{ xs: 5, md: 8 }}>
              {!mdUp && (
                <Grid xs={12} md={5} lg={4}>
                  <PlanteDetailsInfo job={_mockJob} data={data} />
                </Grid>
              )}

              <Grid xs={12} md={7} lg={8}>
                <PlanteDetailsSummary job={_mockJob} data={data} />
              </Grid>

              <Grid xs={12} md={5} lg={4}>
                <Stack spacing={5}>
                  {mdUp && <PlanteDetailsInfo job={_mockJob} data={data} />}
                </Stack>
              </Grid>
            </Grid>
          </Container>

        </>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}

PlanteView.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};
