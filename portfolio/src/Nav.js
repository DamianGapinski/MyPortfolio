import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
  return(
    <nav>
      <ul>
        <Link to='/'>O mnie</Link>
        <Link to='/myProject'>Moje projekty</Link>
        <Link to='/myCV'>CV</Link>
      </ul>
    </nav>
  )
}

export default Nav;