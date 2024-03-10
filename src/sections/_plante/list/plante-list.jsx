import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import useFetchPlantsPage from 'src/hooks/useFetchPlantsPage';

import PlanteItem from './plante-item';
import PlanteItemSkeleton from './plante-item-skeleton';

export default function PlanteList({ loading, filter, plantId, matchingPlant, matchingPlantSymptom }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { dataPage } = useFetchPlantsPage(currentPage);

  // useEffect va se déclencher à chaque fois que dataPage change
  useEffect(() => {
    // console.log('Received data in PlanteList:', data);
  }, [dataPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    if (loading) {
      return <PlanteItemSkeleton />;
    }

    if (filter.filterKeyword && filter.filterKeyword !== null) {
      // Key avec l'id de la plante et data avec la plante correspondante
      return <PlanteItem key={plantId} data={matchingPlant} />;
    }

    // Avec le tableau de symptômes boucler sur chaque plante
    if (filter.filterCategories && filter.filterCategories !== null) {
      return matchingPlantSymptom.map((item, index) => <PlanteItem key={index} data={item} />);
    }

    if (Array.isArray(dataPage?.data) && dataPage?.data.length > 0) {
      return dataPage.data.map((item, index) => (
        <PlanteItem key={index} data={item} />
      ));
    }

    return <p>No data available</p>;
  };

  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {renderContent()}
      </Box>

      <Pagination
        count={dataPage ? dataPage.last_page : 1}
        page={currentPage}
        color="primary"
        onChange={(event, page) => handlePageChange(page)}
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

PlanteList.propTypes = {
  loading: PropTypes.bool,
  filter: PropTypes.object,
  plantId: PropTypes.number,
  matchingPlant: PropTypes.object,
  matchingPlantSymptom: PropTypes.array,
};

PlanteItem.propTypes = {
  dataPage: PropTypes.shape({
    name: PropTypes.string,
    // Add other properties based on your data structure
  }),
};
