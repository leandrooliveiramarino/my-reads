import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  return (
  <Link className='nav-link btn-rotate' to={props.link}>
    <p className='button'>{props.label}</p>
    <i className='nc-icon nc-simple-add'></i>
    <p>
      <span className='d-lg-none d-md-block'>{props.label}</span>
    </p>
  </Link>
)};

export default LinkButton;