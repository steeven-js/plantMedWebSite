import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import useFetchSymptom from 'src/hooks/useFetchSymptom';

import { SplashScreen } from 'src/components/loading-screen';

import SymptomeView from 'src/sections/_plante/view/symptome-view';


// ----------------------------------------------------------------------

export default function SymptomePage() {
  const { id } = useParams();
  const { symptom, isLoading } = useFetchSymptom(id);

  // console.log('symptom:', symptom.plants);

  return (
    <>
      <Helmet>
        <title> PlantMed: Symptôme</title>
      </Helmet>

      {isLoading ? <SplashScreen /> : <SymptomeView id={id} data={symptom} />}

    </>
  );
}
