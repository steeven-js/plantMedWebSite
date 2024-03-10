import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';
import useFetchSymptoms from 'src/hooks/useFetchSymptoms';

import SymptomesFilters from '../filters/symptomes-filters';
import SymptomeList from '../list/symptome-list';


// ----------------------------------------------------------------------

export default function SymptomesListView() {
  const loading = useBoolean(true);
  // const [filter, setFilter] = useState({ filterKeyword: null });
  const { symptoms } = useFetchSymptoms();

  // console.log('plantId:', plantId);

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
    <Container>
      <SymptomesFilters />
      <SymptomeList loading={loading.value} />
    </Container>
  );
}

