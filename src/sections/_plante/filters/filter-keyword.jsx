import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import useFetchPlants from 'src/hooks/useFetchPlants';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FilterKeyword({ filterKeyword, onChangeKeyword, sx }) {
  const { data } = useFetchPlants();

  return (
    <Autocomplete
      sx={{ width: 1 }}
      options={data.map((item) => item.name)}
      getOptionLabel={(option) => option}
      value={filterKeyword}
      onChange={(event, value) => onChangeKeyword(value)}
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
            sx: { pb: 1, ...sx },
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

FilterKeyword.propTypes = {
  filterKeyword: PropTypes.string,
  onChangeKeyword: PropTypes.func,
  sx: PropTypes.object,
};
