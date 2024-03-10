import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';
// import PlantePage from 'src/pages/plante/job';

import Logo from 'src/components/logo';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { NavBasicDesktop } from 'src/components/nav-basic';

import NavMobile from './nav/mobile';
import { HEADER } from '../config-layout';
// import Searchbar from '../common/searchbar';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';


// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const pathname = usePathname();

  const isHome = pathname === '/';

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  const renderContent = (
    <>
      <Box sx={{ lineHeight: 0, position: 'relative' }}>
        <Logo />

        <Label
          color="info"
          sx={{
            ml: 0.5,
            px: 0.5,
            top: -14,
            left: 60,
            height: 20,
            fontSize: 11,
            cursor: 'pointer',
            position: 'absolute',
          }}
        >
          v1.0.8
        </Label>
      </Box>

      <>
        <Stack
          flexGrow={1}
          alignItems="center"
          sx={{
            // height: 1,
            display: { xs: 'none', md: 'flex' },
          }}
        >

          <NavBasicDesktop
            slotProps={{
              rootItem: {
                '& .icon': { display: 'none' },
              },
            }}
            data={[
              {
                title: 'Accueil',
                icon: <Iconify icon="solar:home-2-bold-duotone" />,
                path: '/',
              },
              { title: 'Plantes', path: '/plantmed/plantes/' },
              { title: 'Symptomes', path: '/plantmed/symptomes/' },
            ]}
          />
        </Stack>

        <Box sx={{ flexGrow: { xs: 1, md: 'unset' } }} />
      </>

      <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
        <Stack spacing={1} direction="row" alignItems="center">
          {/* <Searchbar /> */}

          <IconButton
            component={RouterLink}
            href={paths.eCommerce.account.personal}
            size="small"
            color="inherit"
            sx={{ p: 0 }}
          >
            <Iconify icon="carbon:user" width={24} />
          </IconButton>

          <SettingsButton />
        </Stack>

        <Button
          variant="contained"
          color="inherit"
          href='https://play.google.com/store/apps/details?id=com.monremede&pcampaignid=web_share'
          target="_blank"
          rel="noopener"
          sx={{
            display: { xs: 'none', md: 'inline-flex' },
          }}
        >
          Téléchargez
        </Button>
      </Stack>

      {!mdUp &&
        <NavMobile
          data={[
            {
              title: 'Accueil',
              icon: <Iconify icon="solar:home-2-bold-duotone" />,
              path: '/',
            },
            { title: 'Plantes', path: '/plantmed/plantes/' },
          ]}
        />
      }

    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          color: isHome ? 'common.white' : '',
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
