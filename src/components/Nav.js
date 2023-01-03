import React from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ users }) => {
  let location = useLocation();
  return (
    <nav>
      <Link to='/' className={location.pathname === '/' ? 'selected' : ''}>
        Home
      </Link>
      <Link
        to='/users'
        className={location.pathname === '/users' ? 'selected' : ''}
      >
        Users ({users.length})
      </Link>
      <Link
        to='/items'
        className={location.pathname === '/items' ? 'selected' : ''}
      >
        Items
      </Link>
    </nav>
  );
};

export default connect((state) => state)(Nav);
