import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink to="/products/gloves" activeStyle={{ fontWeight: 'bold' }}>
            Gloves
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products/facemasks"
            activeStyle={{ fontWeight: 'bold' }}
          >
            Facemasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/beanies" activeStyle={{ fontWeight: 'bold' }}>
            Beanies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
