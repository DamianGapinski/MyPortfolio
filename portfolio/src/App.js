import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
const Header = () =>{
  return(
    <header>
        <nav>
            <div className='box'>
              <ul>
                <li><Link to='#'>CV</Link></li>
                <li><Link to='#'>Moje projekty</Link></li>
              </ul>
            </div>
        </nav>
    </header>
  )
  
}

export default Header;