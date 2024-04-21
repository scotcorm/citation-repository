import React, { useContext, useState, useEffect } from 'react';
import { DUMMY_CITATIONS } from '../data';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const Dashboard = () => {
  const [citations, setCitations] = useState(DUMMY_CITATIONS);

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
    <section className='dashboard'>
      {citations.length ? (
        <div className='container dashboard_container'>
          {citations.map((citation) => {
            return (
              <article key={citation.id} className='dashboard_citation'>
                <div className='dashboard_citation-info'>
                  <div className='dashboard_citation-thumbnail'>
                    <img src={citation.thumbnail} alt='' />
                  </div>
                  <h5>{citation.title}</h5>
                </div>

                <div className='dashboard_citation-actions'>
                  <Link to={`/citations/${citation.id}`} className='btn sm'>
                    View
                  </Link>
                  <Link
                    to={`/citations/${citation.id}/edit`}
                    className='btn sm primary'
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/citations/${citation.id}/delete`}
                    className='btn sm danger'
                  >
                    Delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className='center'>You do not have any citations yet.</h2>
      )}
    </section>
  );
};

export default Dashboard;
