import React from 'react';
import { Link } from 'react-router-dom';

/*
  Aqui definimos as possíveis combinações do botão do canto superior direito, que no total são apenas duas.
  Optei por centralizar os atributos dentro desse arquivo para ficar mais organizado.
 */
const attributes = {
  any: {
    label: 'Back to Home',
    link: '/',
    icon: 'nc-minimal-left'
  },
  search: {
    label: 'Search',
    link: '/search',
    icon: 'nc-simple-add'
  }
}

const LinkButton = props => {
  /*
    O botão possui apenas duas combinações possíveis: Sempre que a rota for igual a /search, enviar o usuário sempre para a página inicial, caso contrário, enviar para /search
   */
  const key = props.location.pathname === '/search'
    ? 'any'
    : 'search';

  return (
    <Link className='nav-link btn-rotate' to={attributes[key].link}>
      <p className='button'>{attributes[key].label}</p>
      <i className={`nc-icon ${attributes[key].icon}`}></i>
    </Link>
  )
};

export default LinkButton;