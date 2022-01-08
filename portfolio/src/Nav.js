import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
  return(
    <nav>
      <ul>
        <Link to='/'>Damian Gapiński</Link>
        <Link to='/myProject'>My projects</Link>
        <Link to='/mySkills'>Skills</Link>
      </ul>
    </nav>
  )
}

export default Nav;