import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = ({ isLoggedIn, onLogout }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 16px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
