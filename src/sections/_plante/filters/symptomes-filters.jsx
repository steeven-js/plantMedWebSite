import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import FilterCategories from './filter-categories';

// ----------------------------------------------------------------------

const defaultValues = {
  filterCategories: null,
};

export default function SymptomesFilters({ onFiltersChange }) {
  const mdUp = useResponsive('up', 'md');

  const mobileOpen = useBoolean();

  const [filters, setFilters] = useState(defaultValues);

  const handleChangeCategory = useCallback(
    (newValue) => {
      setFilters({
        ...filters,
        filterCategories: newValue,
      });

      // Call the callback function with the updated filters
      onFiltersChange({ ...filters, filterCategories: newValue });
    },
    [filters, onFiltersChange]
  );

  const renderFilters = (
    <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} alignItems="center">

      <FilterCategories
        filterCategories={filters.filterCategories}
        onChangeCategory={handleChangeCategory}
      />

    </Stack>
  );

  if (mdUp) {
    return <Box sx={{ py: 5 }}>{renderFilters}</Box>;
  }

  return (
    <>
      <Stack alignItems="flex-end" sx={{ py: 3 }}>
        <Button
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="carbon:filter" width={18} />}
          onClick={mobileOpen.onTrue}
        >
          Filters
        </Button>
      </Stack>

      <Drawer
        anchor="right"
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: { pt: 5, px: 3, width: 280 },
        }}
      >
        {renderFilters}
      </Drawer>
    </>
  );
}

SymptomesFilters.propTypes = {
  onFiltersChange: PropTypes.func,
};
