import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../images/employeeM2.png';
import { FaEdit } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  //redirect to login page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <section className='profile'>
      <div className='container profile_container'>
        <div className='profile_details'>
          <div className='avatar_wrapper'>
            <div className='profile_avatar'>
              <img src={Avatar} alt='' />
            </div>
            {/* Form to update avatar */}
            <form className='avatar_form'>
              <input
                type='file'
                name='avatar'
                id='avatar'
                onChange={(e) => setAvatar(e.target.files[0])}
                accept='png, jpg, jpeg'
              />
              <label htmlFor='avatar'>
                {' '}
                <FaEdit />
              </label>
            </form>
            <button className='profile_avatar-btn'>
              <FaCheck />
            </button>
          </div>
          <h1>User 2</h1>

          <Link to={`/mycitations/user1`} className='btn primary'>
            My Citations
          </Link>

          {/* form to update user details */}
          <form className='form profile_form'>
            <p className='form_error-message'>This is an error message</p>
            <input
              type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Current Password'
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type='password'
              placeholder='New Password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type='password'
              placeholder='Confirm New Password'
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <button type='submit' className='btn primary'>
              Update details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
