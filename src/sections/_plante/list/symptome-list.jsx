import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import SymptomeItem from './symptome-item';
import PlanteItemSkeleton from './plante-item-skeleton';


// ----------------------------------------------------------------------

export default function SymptomeList({ jobs, loading }) {
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
        {(loading ? [...Array(9)] : jobs).map((job, index) =>
          job ? <SymptomeItem key={job.id} job={job} /> : <PlanteItemSkeleton key={index} />
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

SymptomeList.propTypes = {
  jobs: PropTypes.array,
  loading: PropTypes.bool,
};
