import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';
import useFetchSymptoms from 'src/hooks/useFetchSymptoms';

import SymptomeList from '../list/symptome-list';
import SymptomesFilters from '../filters/symptomes-filters';


// ----------------------------------------------------------------------

export default function SymptomesView() {
  const loading = useBoolean(true);
  const [filter, setFilter] = useState({ filterCategories: null });
  const [symptomId, setSymptomId] = useState(null);
  const [matchingSymptom, setMatchingSymptom] = useState(null);
  const { symptoms } = useFetchSymptoms();

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  useEffect(() => {

    const findFilterSymptom = symptoms.find((symptom) => symptom.name === filter.filterCategories);

    setSymptomId(findFilterSymptom ? findFilterSymptom.id : null);

    setMatchingSymptom(findFilterSymptom);

  }, [symptoms, filter.filterCategories, matchingSymptom]);

  return (
    <Container>
      <SymptomesFilters onFiltersChange={setFilter} />

      <SymptomeList loading={loading.value} filter={filter} symptomId={symptomId} matchingSymptom={matchingSymptom} />
    </Container>
  );
}
