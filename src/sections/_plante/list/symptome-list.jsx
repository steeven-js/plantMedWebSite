import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import useFetchSymptomsPage from 'src/hooks/useFetchSymptomsPage';

import SymptomeItem from './symptome-item';
import PlanteItemSkeleton from './plante-item-skeleton';

export default function SymptomeList({ loading, filter, symptomId, matchingSymptom }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { dataSymptomsPage } = useFetchSymptomsPage(currentPage);

  useEffect(() => {
    // console.log('Received data in SymptomList:', dataSymptomsPage);
  }, [dataSymptomsPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    if (loading) {
      return <PlanteItemSkeleton />;
    }

    if (filter.filterCategories && filter.filterCategories !== null) {
      return <SymptomeItem key={symptomId} data={matchingSymptom} />;
    }

    if (Array.isArray(dataSymptomsPage?.data) && dataSymptomsPage?.data.length > 0) {
      return dataSymptomsPage.data.map((item, index) => (
        <SymptomeItem key={index} data={item} />
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

      {!filter.filterCategories && filter.filterCategories === null && (
        <Pagination
          count={dataSymptomsPage ? dataSymptomsPage.last_page : 1}
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
      )}
    </>
  );
}

SymptomeList.propTypes = {
  loading: PropTypes.bool,
  filter: PropTypes.object,
  symptomId: PropTypes.number,
  matchingSymptom: PropTypes.object,
};

SymptomeItem.propTypes = {
  dataSymptomsPage: PropTypes.shape({
    name: PropTypes.string,
  }),
};
