import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';
import useFetchSymptoms from 'src/hooks/useFetchSymptoms';

import { _jobs } from 'src/_mock';

import SymptomeList from '../list/symptome-list';
import SymptomesFilters from '../filters/symptomes-filters';


// ----------------------------------------------------------------------

export default function SymptomesView() {
  const loading = useBoolean(true);
  const [filter, setFilter] = useState({ filterCategories: null });
  const { symptoms } = useFetchSymptoms();

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  useEffect(() => {

  }, [symptoms]);

  return (
    <>
      <Container>
        <SymptomesFilters onFiltersChange={setFilter} />

        <SymptomeList jobs={_jobs} loading={loading.value} />
      </Container>
    </>
  );
}
