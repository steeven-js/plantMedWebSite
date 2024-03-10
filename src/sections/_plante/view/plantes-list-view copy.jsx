import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';
import useFetchPlants from 'src/hooks/useFetchPlants';
import useFetchSymptoms from 'src/hooks/useFetchSymptoms';

import PlantesList from '../list/plante-list';
import PlantesFilters from '../filters/plantes-filters';


// ----------------------------------------------------------------------

export default function PlantesListView() {
  const loading = useBoolean(true);
  const [filter, setFilter] = useState({ filterKeyword: null, filterCategories: null });
  const [plantId, setPlantId] = useState(null);
  const [symptomId, setSymptomId] = useState([]);
  const [matchingPlant, setMatchingPlant] = useState(null);
  const { data } = useFetchPlants();
  const { symptoms } = useFetchSymptoms();

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
  }, [data, filter.filterKeyword]);

  useEffect(() => {
    // Je récupère le symptôme correspondant au filtre avec find
    const findFilterSymptom = symptoms.find((symptom) => symptom.name === filter.filterCategories);
    // Je récupère les ids des plantes associées au symptôme
    const findFilterSymptomPlantIds = findFilterSymptom?.plants?.map((plant) => plant.id) || [];
    // Je stocke les ids des plantes associées au symptôme dans le state
    setSymptomId(findFilterSymptomPlantIds);
    // Je récupère les plantes correspondantes aux ids des plantes associées au symptôme
    const findFilterSymptomPlants = data.filter((plant) => findFilterSymptomPlantIds.includes(plant.id));
    // Je set les plantes correspondantes dans le state
    setMatchingPlant(findFilterSymptomPlants);
  }, [data, filter.filterCategories, symptoms, symptomId]);

  // console.log('matchingPlant:', matchingPlant);

  return (
    <Container>
      <PlantesFilters onFiltersChange={setFilter} />
      <PlantesList
        loading={loading.value}
        filter={filter}
        plantId={plantId}
        matchingPlant={matchingPlant}
        matchingPlantSymptom={matchingPlant}
      />
    </Container>
  );
}
