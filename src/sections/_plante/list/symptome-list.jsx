import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import useFetchPlantsPage from 'src/hooks/useFetchPlantsPage';

// import SymptomeItem from './symptome-item';
import PlanteItemSkeleton from './plante-item-skeleton';

export default function SymptomeList() {

  const renderContent = () => {
    // if (loading) {
    //   return <PlanteItemSkeleton />;
    // }

    // if (filter.filterKeyword && filter.filterKeyword !== null) {
    //   // Key avec l'id de la plante et data avec la plante correspondante
    //   return <SymptomeItem key={plantId} data={matchingPlant} />;
    // }

    // // Avec le tableau de symptômes boucler sur chaque plante
    // if (filter.filterCategories && filter.filterCategories !== null) {
    //   return matchingPlantSymptom.map((item, index) => <SymptomeItem key={index} data={item} />);
    // }

    // if (Array.isArray(dataPage?.data) && dataPage?.data.length > 0) {
    //   return dataPage.data.map((item, index) => (
    //     <SymptomeItem key={index} data={item} />
    //   ));
    // }

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
        {/* {renderContent()} */}
      </Box>

      {/* <Pagination
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
      /> */}
    </>
  );
}

// PlanteList.propTypes = {
//   loading: PropTypes.bool,
// };
