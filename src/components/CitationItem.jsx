import React from 'react';
import { Link } from 'react-router-dom';
import CitationAuthor from './CitationAuthor';

const CitationItem = ({
  citationID,
  license,
  title,
  creator,
  source,
  sourceUrl,
  userID,
  thumbnail,
  description,
  createdAt,
}) => {
  // const shortCreator =
  //   creator.length > 20 ? creator.substr(0, 20) + '...' : creator;
  // const shortDescription =
  //   description.length > 20 ? description.substr(0, 20) + '...' : description;
  // const shortTitle = title.length > 20 ? title.substr(0, 20) + '...' : title;
  // const shortSource =
  //   source.length > 20 ? source.substr(0, 20) + '...' : source;
  // const shortSourceUrl =
  //   sourceUrl.length > 20 ? sourceUrl.substr(0, 20) + '...' : sourceUrl;
  return (
    <article className='citation'>
      <div className='citation_thumbnail'>
        <img
          src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`}
          alt={title}
        />
      </div>
      <div className='citation_content'>
        <Link to={`/citations/${citationID}`}>
          <h3>Title: {title}</h3>
        </Link>
        <Link to={`/citations/${citationID}`}>
          <p>Creator: {creator}</p>
          <p>Source: {source}</p>
          <p>License: {license}</p>
          <p>SourceURL: {sourceUrl}</p>
          <p>Description: {description}</p>
        </Link>

        <div className='citation_footer'>
          <CitationAuthor userID={userID} createdAt={createdAt} />
          <Link to={`/citations/licenses/${license}`} className='btn license'>
            {license}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CitationItem;
