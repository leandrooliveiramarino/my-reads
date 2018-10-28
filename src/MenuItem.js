import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = props => (
  <li className={`menu-item ${props.active && props.active.isExact && 'active'}`}>
    <Link to={props.to}>
      <p>{props.title}</p>
    </Link>
  </li>
);

MenuItem.propTypes = {
  active: PropTypes.object,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MenuItem;