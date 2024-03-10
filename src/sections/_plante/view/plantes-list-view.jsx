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
    // Je récupère la plante correspondante au filtre avec find
    const findFilterPlant = data.find((plant) => plant.name === filter.filterKeyword);

    // Je récupère l'id de la plante et je le set dans le state
    setPlantId(findFilterPlant ? findFilterPlant.id : null);

    // Je set la plante correspondante dans le state
    setMatchingPlant(findFilterPlant);

  }, [data, filter.filterKeyword, matchingPlant]);

  return (
    <Container>
      <PlantesFilters onFiltersChange={setFilter} />
      <PlantesList loading={loading.value} filter={filter} plantId={plantId} matchingPlant={matchingPlant} />
    </Container>
  );
}

