import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import useFetchSymptom from 'src/hooks/useFetchSymptom';

import { SplashScreen } from 'src/components/loading-screen';

import SymptomeView from 'src/sections/_plante/view/symptome-view';


// ----------------------------------------------------------------------

export default function SymptomePage() {

  const { id } = useParams();

  // console.log('id:', id);

  const { symptom, isLoading } = useFetchSymptom(id);

  // console.log('symptom:', symptom);

  return (
    <>
      <Helmet>
        <title> PlantMed: Symptôme</title>
      </Helmet>

      {isLoading ? <SplashScreen /> : <SymptomeView id={id} data={symptom} />}

    </>
  );
}
