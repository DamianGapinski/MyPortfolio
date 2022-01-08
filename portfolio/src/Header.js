import React from 'react';
import img from './img/damianTestImg.jpg' ;

const Header = () =>{
    return(
        <header>
            <div className='headerBox'><h1>About me</h1></div>
            <div className='imgBox'>
                <img src={img} alt='Main img'></img>
            </div>
            <div className='textBox'>
                    <p>
                        
                    </p>
                </div>
        </header>
    )
}

export default Header;