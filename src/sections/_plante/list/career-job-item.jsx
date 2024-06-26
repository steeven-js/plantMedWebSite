import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

// import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function CareerJobItem({ data, plantMediaUrl }) {

  return (
    <Card
      sx={{
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >

      <Link component={RouterLink} href={`/plantmed/plante/${data.id}`} color="inherit">

        <Stack sx={{ p: 3, pb: 0 }}>
          <Stack direction="row" alignItems="center" spacing={2.5}>
            {plantMediaUrl && (
              <Image
                alt={data.name}
                src={plantMediaUrl}
                sx={{ width: 150, height: 150, borderRadius: 1 }}
              />
            )}
          </Stack>

          <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
            <TextMaxLine variant="h6" line={1}>
              {data.name}
            </TextMaxLine>
          </Stack>
        </Stack>
      </Link>

    </Card>
  );
}

CareerJobItem.propTypes = {
  data: PropTypes.object,
  plantMediaUrl: PropTypes.string,
};
