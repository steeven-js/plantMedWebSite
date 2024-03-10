import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import useFetchPlant from 'src/hooks/useFetchPlant';

import { SplashScreen } from 'src/components/loading-screen';

import PlanteView from 'src/sections/_plante/view/plante-view';


// ----------------------------------------------------------------------

export default function PlantePage() {

  const { id } = useParams();

  // console.log('id:', id);

  const { data, isLoading } = useFetchPlant(id);

  // console.log('data:', data);

  return (
    <>
      <Helmet>
        <title> PlantMed: Plante</title>
      </Helmet>

      {isLoading ? <SplashScreen /> : <PlanteView id={id} data={data} />}

    </>
  );
}
