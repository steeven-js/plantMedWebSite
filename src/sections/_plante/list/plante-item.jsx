import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

export default function PlanteItem({ data = {} }) {
  const { name, id, media } = data;

  return (
    <Card
      sx={{
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Link component={RouterLink} to={`/plantmed/plante/${id}`} color="inherit">
        <Stack sx={{ p: 3, pb: 0 }}>
          <Stack direction="row" alignItems="center" spacing={2.5}>
            {/* Inclure l'image */}
            {media && media.length > 0 && (
              <Image src={media[0].original_url} alt={name} height={100} width={100} />
            )}
            {/* Ajouter d'autres composants si nécessaire */}
          </Stack>

          <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
            <TextMaxLine variant="h6" line={1}>
              {name && <div>{name}</div>}
            </TextMaxLine>
          </Stack>
        </Stack>
      </Link>
    </Card>
  );
}

PlanteItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        original_url: PropTypes.string.isRequired,
      })
    ),
  }),
};
