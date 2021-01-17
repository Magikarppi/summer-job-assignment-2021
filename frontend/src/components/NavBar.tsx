import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/products/gloves">Gloves</Link>
        </li>
        <li>
          <Link to="/products/facemasks">Facemasks</Link>
        </li>
        <li>
          <Link to="/products/beanies">Beanies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
