import React from 'react';
import { useState } from 'react';
import CitationItem from '../components/CitationItem';
import { DUMMY_CITATIONS } from '../data';

const UserCitations = () => {
  const [citations, setCitations] = useState(DUMMY_CITATIONS);
  return (
    <section className='citations'>
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
              description,
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
                description={description}
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

export default UserCitations;
