import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';

// import { _jobs } from 'src/_mock';

import CareerJobList from '../list/career-job-list';
// import CareerNewsletter from '../career-newsletter';
import CareerFilters from '../filters/career-filters';

// ----------------------------------------------------------------------

export default function CareerJobsView() {
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
      <CareerFilters setFilter={setFilter} />
      <CareerJobList loading={loading.value} filter={filter} />
    </Container>
  );
}
