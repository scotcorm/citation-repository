import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar1 from '../images/employeeM.png';
import Avatar2 from '../images/employeeF.png';

const usersData = [
  { id: 1, avatar: Avatar1, name: 'Corm Grower', citations: '3' },
  { id: 2, avatar: Avatar2, name: 'Jane Doe', citations: '2' },
];

const Users = () => {
  const [users, setUsers] = useState(usersData);
  return (
    <section className='users'>
      {users.length > 0 ? (
        <div className='container users_container'>
          {users.map(({ id, avatar, name, citations }) => {
            return (
              <Link key={id} to={`/citations/users/${id}`} className='user'>
                <div className='user_avatar'>
                  <img src={avatar} alt={`Image of ${name}`} />
                </div>
                <div className='user_info'>
                  <h4>{name}</h4>
                  <p>{citations}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className='center'>No users found.</h2>
      )}
    </section>
  );
};

export default Users;
