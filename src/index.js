import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import CitationDetail from './pages/CitationDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Users from './pages/Users';
import CreateCitation from './pages/CreateCitation';
import EditCitation from './pages/EditCitation';
import DeleteCitation from './pages/DeleteCitation';
import LicenseCitations from './pages/LicenseCitations';
import UserCitations from './pages/UserCitations';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'citations/:id', element: <CitationDetail /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'profile/:id', element: <UserProfile /> },
      { path: 'users', element: <Users /> },
      { path: 'create', element: <CreateCitation /> },
      { path: 'citations/licenses/:license', element: <LicenseCitations /> },
      { path: 'citations/users/:id', element: <UserCitations /> },
      { path: 'mycitations/:id', element: <Dashboard /> },
      { path: 'citations/:id/edit', element: <EditCitation /> },
      { path: 'citations/:id/delete', element: <DeleteCitation /> },
      { path: 'logout', element: <Logout /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
