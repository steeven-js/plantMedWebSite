import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import useFetchSymptoms from 'src/hooks/useFetchSymptoms';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FilterCategories({ filterCategories, onChangeCategory }) {
  const { symptoms } = useFetchSymptoms();

  return (
    <Autocomplete
      sx={{ width: 1 }}
      options={symptoms.map((item) => item.name)}
      getOptionLabel={(option) => option}
      value={filterCategories}
      onChange={(event, value) => onChangeCategory(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          placeholder="Symptômes"
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  width={24}
                  icon="carbon:inventory-management"
                  sx={{ color: 'text.disabled', mr: 1 }}
                />
              </InputAdornment>
            ),
            sx: { pb: 1 },
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

FilterCategories.propTypes = {
  filterCategories: PropTypes.string,
  onChangeCategory: PropTypes.func,
};
