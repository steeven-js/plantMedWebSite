import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';

// import { _jobs } from 'src/_mock';

import PlanteList from '../list/plante-list';
// import CareerNewsletter from '../plante-newsletter';
import PlanteFilters from '../filters/filter-plantes';

// ----------------------------------------------------------------------

export default function PlanteListView() {
  const loading = useBoolean(true);
  const [filter, setFilter] = useState({ filterPlantes: null, filterCategories: null });

  // console.log('filter:', filter);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  return (
    <Container>
      <PlanteFilters setFilter={setFilter} />
      <PlanteList loading={loading.value} filter={filter} />
    </Container>
  );
}
