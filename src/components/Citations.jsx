import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CitationItem from './CitationItem';
import Loader from '../components/Loader';

const Citations = () => {
  const [citations, setCitations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCitations = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/citations`
        );
        setCitations(response?.data);
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false);
    };
    fetchCitations();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className='citations'>
      {citations.length > 0 ? (
        <div className='container citations_container'>
          {citations.map(
            ({
              _id: id,
              thumbnail,
              license,
              title,
              creator,
              source,
              sourceUrl,
              user,
              createdAt,
              description,
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
                userID={user}
                createdAt={createdAt}
                description={description}
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

export default Citations;
