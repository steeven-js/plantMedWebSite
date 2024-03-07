import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import useFetchPlants from 'src/hooks/useFetchPlants';

import CareerJobItem from './career-job-item';
import CareerJobItemSkeleton from './career-job-item-skeleton';

// ----------------------------------------------------------------------

export default function CareerJobList({ loading }) {
  const { data } = useFetchPlants();

  console.log(data);

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
        {loading ? (
          <CareerJobItemSkeleton />
        ) : (
          Array.isArray(data?.data) && data?.data.length > 0 ? (
            data.data.map((item, index) => (
              <CareerJobItem key={index} data={item} />
            ))
          ) : (
            <p>No data available</p>
          )
        )}
      </Box>

      <Pagination
        count={10}
        color="primary"
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
  data: PropTypes.shape({
    name: PropTypes.string,
    // Add other properties based on your data structure
  }),
};
