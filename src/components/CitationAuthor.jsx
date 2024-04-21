import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';

TimeAgo.addDefaultLocale(en);

const CitationAuthor = ({ userID, createdAt }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/users/${userID}`
        );
        setUser(response?.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <Link to={`/citations/users/user1`} className='citation_author'>
      <div className='citation_author-avatar'>
        <img
          src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${user?.avatar}`}
          alt=''
        />
      </div>
      <div className='citation_author-details'>
        <h5>By: {user?.name}</h5>
        <small>
          <ReactTimeAgo date={new Date(createdAt)} locale='en-US' />
        </small>
      </div>
    </Link>
  );
};

export default CitationAuthor;
