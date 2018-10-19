import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => (
  <li className={`menu-item ${props.active && 'active'}`}>
    <Link to={props.to}>
      <p>{props.title}</p>
    </Link>
  </li>
);

export default MenuItem;