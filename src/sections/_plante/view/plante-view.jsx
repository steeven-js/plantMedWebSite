import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import useFetchPlant from 'src/hooks/useFetchPlant';
import { useResponsive } from 'src/hooks/use-responsive';

import { _jobs, _socials } from 'src/_mock';

import Iconify from 'src/components/iconify';
import { SplashScreen } from 'src/components/loading-screen';

// import Advertisement from '../../advertisement';
// import CareerNewsletter from '../plante-newsletter';
// import PlanteListSimilar from '../list/plante-job-list-similar';
import PlanteDetailsHero from '../details/plante-details-hero';
import PlanteDetailsInfo from '../details/plante-details-info';
import PlanteDetailsSummary from '../details/plante-details-summary';
// import PlanteDetailsCompanyInfo from '../details/plante-job-details-company-info';
// import PlanteDetailsCompanySimilar from '../details/plante-job-details-company-similar';

// ----------------------------------------------------------------------

const _mockJob = _jobs[0];

export default function PlanteView() {
  const mdUp = useResponsive('up', 'md');
  const loading = useBoolean(true);
  const { id } = useParams();
  const { data } = useFetchPlant(id);

  useEffect(() => {
    const fakeLoading = async () => {
      // console.log('Received data:', data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };

    console.log('data:', data);

    const refresh = async () => {
      window.location.reload();
    };

    if (!data) {
      console.log('No data received, refreshing...');
      refresh();
    } else {
      fakeLoading();
    }
  }, [loading, id, data]);


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

                <Divider sx={{ my: 5 }} />

                <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
                  <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                    Partager:
                  </Typography>

                  <Stack direction="row" alignItems="center" flexWrap="wrap">
                    {_socials.map((social) => (
                      <Button
                        key={social.value}
                        size="small"
                        variant="outlined"
                        startIcon={<Iconify icon={social.icon} />}
                        sx={{
                          m: 0.5,
                          flexShrink: 0,
                          color: social.color,
                          borderColor: social.color,
                          '&:hover': {
                            borderColor: social.color,
                            bgcolor: alpha(social.color, 0.08),
                          },
                        }}
                      >
                        {social.label}
                      </Button>
                    ))}
                  </Stack>
                </Stack>
              </Grid>

              <Grid xs={12} md={5} lg={4}>
                <Stack spacing={5}>
                  {mdUp && <PlanteDetailsInfo job={_mockJob} data={data} />}
                </Stack>
              </Grid>
            </Grid>
          </Container>

          {/* Additional components go here */}

        </>
      ) : (
        <SplashScreen /> // Show loading screen or handle the case when there is no data
      )}
    </>
  );
}
