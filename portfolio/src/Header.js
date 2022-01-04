import React from 'react';
import img from './img/damianTestImg.jpg' ;

const Header = () =>{
    return(
        <header>
            <div className='headerBox'><h1>O mnie</h1></div>
            <div className='imgBox'>
                <img src={img} alt='Main img'></img>
            </div>
            <div className='textBox'><p>lorem..</p></div>
        </header>
    )
}

export default Header;