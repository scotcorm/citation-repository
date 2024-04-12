import React, { useState } from 'react';
import { DUMMY_CITATIONS } from '../data';
import CitationItem from '../components/CitationItem';

const LicenseCitations = () => {
  const [citations, setCitations] = useState(DUMMY_CITATIONS);
  return (
    <section>
      {citations.length > 0 ? (
        <div className='container citations_container'>
          {citations.map(
            ({
              id,
              thumbnail,
              license,
              title,
              creator,
              source,
              sourceUrl,
              notes,
              userID,
            }) => (
              <CitationItem
                key={id}
                citationID={id}
                thumbnail={thumbnail}
                license={license}
                title={title}
                creator={creator}
                source={source}
                sourceUrl={sourceUrl}
                notes={notes}
                userID={userID}
              />
            )
          )}
        </div>
      ) : (
        <h2 className='center'>No Citations Found</h2>
      )}
    </section>
  );
};

export default LicenseCitations;
