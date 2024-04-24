import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { Link } from 'react-router-dom';

const DeleteCitation = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  //redirect to login page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  return <Link className='btn sm danger'>Delete</Link>;
};

export default DeleteCitation;
