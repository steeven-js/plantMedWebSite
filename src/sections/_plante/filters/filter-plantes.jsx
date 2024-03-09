import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import useFetchPlants from 'src/hooks/useFetchPlants';

// import { _jobTitles } from 'src/_mock';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FilterPlantes({ filterPlantes, onChangePlantes, sx }) {

  const { data } = useFetchPlants();
  const names = data.map((item) => item.name);

  // console.log('names', names);

  return (
    <Autocomplete
      sx={{ width: 1 }}
      options={names}
      getOptionLabel={(option) => option}
      value={filterPlantes}
      onChange={(event, value) => onChangePlantes(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          placeholder="Plantes médicinales"
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:search" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            ),
            sx: { pb: 1, color: 'primary.main', ...sx },
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option}>
          {option}
        </li>
      )}
    />
  );
}

FilterPlantes.propTypes = {
  filterPlantes: PropTypes.string,
  onChangePlantes: PropTypes.func,
  sx: PropTypes.object,
};

