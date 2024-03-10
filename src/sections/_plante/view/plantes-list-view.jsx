import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';
import useFetchPlants from 'src/hooks/useFetchPlants';

import PlantesList from '../list/plante-list';
import PlantesFilters from '../filters/plantes-filters';


// ----------------------------------------------------------------------

export default function PlantesListView() {
  const loading = useBoolean(true);
  const [filter, setFilter] = useState({ filterKeyword: null, filterCategories: null });
  const [plantId, setPlantId] = useState(null);
  const [matchingPlant, setMatchingPlant] = useState(null);

  const { data } = useFetchPlants();

  // console.log('plantId:', plantId);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  useEffect(() => {
    // Retrieve the id based on the filterKeyword
    const findFilterPlant = data.find((plant) => plant.name === filter.filterKeyword);

    // Update the plantId state
    setPlantId(findFilterPlant ? findFilterPlant.id : null);
    setMatchingPlant(findFilterPlant);
  }, [data, filter.filterKeyword, matchingPlant]);

  return (
    <Container>
      <PlantesFilters onFiltersChange={setFilter} />
      <PlantesList loading={loading.value} filter={filter} plantId={plantId} matchingPlant={matchingPlant} />
    </Container>
  );
}

