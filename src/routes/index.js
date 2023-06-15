import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import About from '../pages/About/About';

const routes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<About/>}/>
                
            </Routes>
            
        </div>
    );
};

export default routes;