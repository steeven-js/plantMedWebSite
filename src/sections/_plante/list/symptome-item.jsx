import PropTypes from 'prop-types';
// import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';
// import Checkbox from '@mui/material/Checkbox';
// import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

// import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

// import { fDate } from 'src/utils/format-time';
// import { fCurrency } from 'src/utils/format-number';

// import Label from 'src/components/label';
import Image from 'src/components/image';
// import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function SymptomeItem({ data = {} }) {
  const { name, id, media } = data;

  return (
    <Card
      sx={{
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Stack sx={{ p: 3, pb: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2.5}>
          {/* Inclure l'image */}
          {media && media.length > 0 && (
            <Image src={media[0].original_url} alt={name} height={100} width={100} />
          )}
          {/* Ajouter d'autres composants si nécessaire */}
        </Stack>

        <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
          <Link component={RouterLink} to={`/plantmed/symptome/${id}`} color="inherit">
            <TextMaxLine variant="h6" line={1}>
              {name && <div>{name}</div>}
            </TextMaxLine>
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
}

SymptomeItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        original_url: PropTypes.string.isRequired,
      })
    ),
    // Ajoutez d'autres PropTypes au besoin pour d'autres propriétés
  }),
};
