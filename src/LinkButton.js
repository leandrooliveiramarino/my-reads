import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = (props) => (
  <Link className='nav-link btn-rotate' to={props.link}>
    <p className='button'>{props.label}</p>
    <i className={`nc-icon ${props.icon}`}></i>
  </Link>
);

export default LinkButton;