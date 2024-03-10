import { useEffect } from 'react';

import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';

import { _jobs } from 'src/_mock';

import SymptomeList from '../list/symptome-list';
import SymptomesFilters from '../filters/symptomes-filters';


// ----------------------------------------------------------------------

export default function SymptomesView() {
  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  return (
    <>
      <Container>
        <SymptomesFilters />

        <SymptomeList jobs={_jobs} loading={loading.value} />
      </Container>
    </>
  );
}
