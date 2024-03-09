import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';

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

export default function PlanteDetailsSummary({ data }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const formattedDescription = formatTextWithBr(data?.description || '');
  const formattedHabitat = formatTextWithBr(data?.habitat || '');
  const formattedPrecaution = formatTextWithBr(data?.precaution || '');
  const formattedPropriete = formatTextWithBr(data?.propriete || '');
  const formattedUsageExterne = formatTextWithBr(data?.usageExterne || '');
  const formattedUsageInterne = formatTextWithBr(data?.usageInterne || '');

  return (
    <Stack spacing={5}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <h3>Description</h3>
            <p>{formattedDescription}</p>
          </div>

          <div>
            <h3>Habitat</h3>
            <p>{formattedHabitat}</p>
          </div>

          <div>
            <h3>Precaution</h3>
            <p>{formattedPrecaution}</p>
          </div>

          <div>
            <h3>Propriété</h3>
            <p>{formattedPropriete}</p>
          </div>

          <div>
            <h3>Usage Externe</h3>
            <p>{formattedUsageExterne}</p>
          </div>

          <div>
            <h3>Usage Interne</h3>
            <p>{formattedUsageInterne}</p>
          </div>
        </>
      )}
    </Stack>
  );
}

PlanteDetailsSummary.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    habitat: PropTypes.string,
    precaution: PropTypes.string,
    propriete: PropTypes.string,
    usageExterne: PropTypes.string,
    usageInterne: PropTypes.string,
  }),
};
