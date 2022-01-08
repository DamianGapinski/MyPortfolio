import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Skills from './Skills';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
const App = () =>{

    return(
        <Router>
            <Nav/>
                
                <Routes>
                    <Route path="/" exact element={<Header/>}/>
                    <Route path="/myProject" element={<h1>Test</h1>}/>
                    <Route path="/mySkills" element={<Skills/>}/>  
                    <Route path="*" element={<h1>404</h1>}/>  
                </Routes>
                
        </Router>
    )
}

export default App;