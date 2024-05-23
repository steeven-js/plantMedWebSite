import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useBoolean } from 'src/hooks/use-boolean';
// import { useResponsive } from 'src/hooks/use-responsive';

import { _jobs } from 'src/_mock';

import { SplashScreen } from 'src/components/loading-screen';

import SymptomeDetailsHero from '../details/symptome-details-hero';
import CareerJobListSimilar from '../list/career-job-list-similar';
// import SymptomeDetailsInfo from '../details/symptome-details-info';
import SymptomeDetailsSummary from '../details/symptome-details-summary';

// ----------------------------------------------------------------------

const _mockJob = _jobs[0];

export default function SymptomeView({ id, data }) {
  // const mdUp = useResponsive('up', 'md');
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
          <SymptomeDetailsHero job={_mockJob} data={data} />

          <Container
            sx={{
              overflow: 'hidden',
              pt: { xs: 5, md: 10 },
              pb: 10,
            }}
          >
            <Grid container spacing={{ xs: 5, md: 8 }}>

              <Grid xs={12} md={7} lg={8}>
                <SymptomeDetailsSummary job={_mockJob} data={data} />
              </Grid>

            </Grid>
          </Container>

          <CareerJobListSimilar jobs={_jobs.slice(-3)} data={data} />

        </>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}

SymptomeView.propTypes = {
  id: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};
