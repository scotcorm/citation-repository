import React, { useContext, useEffect, useState } from 'react';
import CitationAuthor from '../components/CitationAuthor';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import DeleteCitation from './DeleteCitation';
import { UserContext } from '../context/userContext';
import axios from 'axios';

const CitationDetails = () => {
  const { id } = useParams();
  const [citation, setCitation] = useState(null);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getCitation = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/citations/${id}`
        );
        setCitation(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    getCitation();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className='citation-detail'>
      {error && <p className='error'>{error}</p>}
      {
        <div className='container citation-detail_container'>
          <div className='citation-detail_header'>
            <CitationAuthor
              authorID={citation.user}
              createdAt={citation.createdAt}
            />
            {currentUser?.id == citation?.user && (
              <div className='citation-detail_buttons'>
                <Link
                  to={`/citations/${citation?._id}/edit`}
                  className='btn sm primary'
                >
                  Edit
                </Link>
                <DeleteCitation citationId={id} />
              </div>
            )}
          </div>
          <h1>{citation.title}</h1>
          <div className='citation-detail_thumbnail'>
            <img
              src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${citation.thumbnail}`}
              alt=''
            />
          </div>
          <p dangerouslySetInnerHTML={{ __html: citation.description }}></p>
        </div>
      }
    </section>
  );
};

export default CitationDetails;
