import React from 'react';
import {Link} from 'react-router-dom';

export const PublicHeader = () => {
  return (
    <div className="header-actions auth-actions">
      Have an account? <Link to="/" className="btn btn-transparent">Sign In</Link>
    </div>
  );
};
