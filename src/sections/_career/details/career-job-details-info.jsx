import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

export default function CareerJobDetailsInfo({ data }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <Card sx={{ p: 3 }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Stack spacing={2}>
          <Stack spacing={2} direction="row" alignItems="flex-start">
            <Iconify icon="carbon:calendar" width={24} />
            <Stack>
              <Typography variant="subtitle2"> Nom scientifique </Typography>
              <Typography variant="body2" sx={{ color: 'error.main' }}>
                {data.nscient}
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={2} direction="row" alignItems="flex-start">
            <Iconify icon="carbon:hourglass" width={24} />
            <Stack>
              <Typography variant="subtitle2"> Famille </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {data.famille}
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={2} direction="row" alignItems="flex-start">
            <Iconify icon="carbon:money" width={24} />
            <Stack>
              <Typography variant="subtitle2"> Genre </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {data.genre}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Card>
  );
}

CareerJobDetailsInfo.propTypes = {
  data: PropTypes.object,
};
