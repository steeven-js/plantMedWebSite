import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import useFetchPlantsPage from 'src/hooks/useFetchPlantsPage';

import CareerJobItem from './plante-job-item';
import CareerJobItemSkeleton from './plante-job-item-skeleton';

export default function CareerJobList({ loading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { dataPage } = useFetchPlantsPage(currentPage);

  useEffect(() => {
    // console.log('Received data in CareerJobList:', data);
  }, [dataPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    if (loading) {
      return <CareerJobItemSkeleton />;
    }

    if (Array.isArray(dataPage?.data) && dataPage?.data.length > 0) {
      return dataPage.data.map((item, index) => (
        <CareerJobItem key={index} data={item} />
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

CareerJobList.propTypes = {
  loading: PropTypes.bool,
};

CareerJobItem.propTypes = {
  dataPage: PropTypes.shape({
    name: PropTypes.string,
    // Add other properties based on your data structure
  }),
};
