import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../images/employeeM.png';

const CitationAuthor = () => {
  return (
    <Link to={`/citations/users/user1`} className='citation_author'>
      <div className='citation_author-avatar'>
        <img src={Avatar} alt='' />
      </div>
      <div className='citation_author-details'>
        <h5>By: Corm Grower</h5>
        <small>timestamp</small>
      </div>
    </Link>
  );
};

export default CitationAuthor;
