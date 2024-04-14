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
  notes,
  userID,
  thumbnail,
}) => {
  const shortCreator =
    creator.length > 20 ? creator.substr(0, 20) + '...' : creator;
  const shortNotes = notes.length > 20 ? notes.substr(0, 20) + '...' : notes;
  const shortTitle = title.length > 20 ? title.substr(0, 20) + '...' : title;
  const shortSource =
    source.length > 20 ? source.substr(0, 20) + '...' : source;
  const shortSourceUrl =
    sourceUrl.length > 20 ? sourceUrl.substr(0, 20) + '...' : sourceUrl;
  return (
    <article className='citation'>
      <div className='citation_thumbnail'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='citation_content'>
        <Link to={`/citations/${citationID}`}>
          <h3>Title: {shortTitle}</h3>
        </Link>
        <Link to={`/citations/${citationID}`}>
          <p>Creator: {shortCreator}</p>
          <p>Source: {shortSource}</p>
          <p>License: {license}</p>
          <p>SourceURL: {shortSourceUrl}</p>
          <p> Notes: {shortNotes}</p>
        </Link>

        <div className='citation_footer'>
          <CitationAuthor />
          <Link to={`/citations/licenses/${license}`} className='btn license'>
            {license}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CitationItem;
