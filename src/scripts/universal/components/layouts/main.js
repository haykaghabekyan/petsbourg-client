import React from 'react';
import {Link} from 'react-router-dom';
import {PrivateHeader} from '../header/private-header';
import {PublicHeader} from '../header/public-header';
import {FooterComponent} from '../footer';

export const MainLayout = ({children, user = null, pets}) => {
  return (
    <div className="main-layout">
      <header className="main-header">
        <div className="container d-flex justify-space-between align-center">
          <h1 className="brand-container">
            <Link to="/" className="brand">Petsbourg</Link>
          </h1>
          {user ? <PrivateHeader user={user} pets={pets}/> : <PublicHeader/>}
        </div>
      </header>
      <main className="">
        <div className="container">
          {children}
        </div>
      </main>
      <FooterComponent/>
    </div>
  );
};
