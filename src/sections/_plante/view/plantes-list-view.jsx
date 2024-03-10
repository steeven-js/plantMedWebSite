import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';

// import { _jobs } from 'src/_mock';

import PlantesList from '../list/plante-list';
import PlantesFilters from '../filters/plantes-filters';


// ----------------------------------------------------------------------

export default function PlantesListView() {
  const loading = useBoolean(true);
  const [filter, setFilter] = useState({ filterKeyword: null, filterCategories: null });

  console.log('filter:', filter);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  return (
    <Container>
      <PlantesFilters onFiltersChange={setFilter} />
      <PlantesList loading={loading.value} filter={filter} />
    </Container>
  );
}

