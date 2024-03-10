import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';

import { SplashScreen } from 'src/components/loading-screen';

function formatTextWithBr(text) {
  return text.split('\n\n').map((paragraph, paragraphIndex, paragraphs) => (
    <React.Fragment key={paragraphIndex}>
      {paragraph.split('\n').map((line, lineIndex, lines) => (
        <React.Fragment key={lineIndex}>
          {line}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
      {paragraphIndex < paragraphs.length - 1 && <br />}
      {paragraphIndex < paragraphs.length - 1 && <br />}
    </React.Fragment>
  ));
}

export default function SymptomeDetailsSummary({ data }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const formattedDescription = formatTextWithBr(data?.description || '');

  return (
    <Stack spacing={5}>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div>
          <h3>Description</h3>
          <p>{formattedDescription}</p>
        </div>
      )}
    </Stack>
  );
}

SymptomeDetailsSummary.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    habitat: PropTypes.string,
    precaution: PropTypes.string,
    propriete: PropTypes.string,
    usageExterne: PropTypes.string,
    usageInterne: PropTypes.string,
  }),
};
