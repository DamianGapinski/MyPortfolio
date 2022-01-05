import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Cv from './Cv';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
const App = () =>{

    return(
        <Router>
            <Nav/>
                
                <Routes>
                    <Route path="/" exact element={<Header/>}/>
                    <Route path="/myProject" element={<h1>Test</h1>}/>
                    <Route path="/myCV" element={<Cv/>}/>    
                </Routes>
                
        </Router>
    )
}

export default App;