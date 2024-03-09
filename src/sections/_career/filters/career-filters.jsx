import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import FilterPlantes from './filter-plantes';
import FilterCategories from './filter-categories';

const defaultValues = {
  filterPlantes: null,
  filterCategories: null,
};

export default function CareerFilters({ setFilter }) {
  const mdUp = useResponsive('up', 'md');
  const mobileOpen = useBoolean();
  const [filters, setFilters] = useState(defaultValues);

  const handleChangePlantes = useCallback(
    (newValue) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        filterPlantes: newValue,
      }));
      setFilter((prevFilter) => ({ ...prevFilter, filterPlantes: newValue }));
    },
    [setFilter]
  );

  const handleChangeCategory = useCallback(
    (newValue) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        filterCategories: newValue,
      }));
      setFilter((prevFilter) => ({ ...prevFilter, filterCategories: newValue }));
    },
    [setFilter]
  );

  const onReset = useCallback(() => {
    setFilters(defaultValues);
  }, []);

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(filters, null, 2));
    onReset();
  };

  const renderFilters = (
    <>
      <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} alignItems="center">
        <FilterPlantes
          filterPlantes={filters.filterPlantes}
          onChangePlantes={handleChangePlantes}
        />

        <FilterCategories
          filterCategories={filters.filterCategories}
          onChangeCategory={handleChangeCategory}
        />

        {mdUp && (
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={onSubmit}
            sx={{ px: 0, minWidth: { md: 48 } }}
          >
            <Iconify icon="carbon:search" width={24} />
          </Button>
        )}
      </Stack>

      {!mdUp && (
        <Button
          size="large"
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="carbon:search" />}
          sx={{ mt: 2.5 }}
        >
          Search
        </Button>
      )}
    </>
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

CareerFilters.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
