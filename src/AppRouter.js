import React from 'react';
import {Route, Routes } from 'react-router-dom';
import CarList from './components/projects/cars/CarList';
import PhotoList from './components/projects/photos/PhotoList';
import HomePage from './HomePage';
import NotFounPage from './pages/404/NotFoundPage.jsx';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cars' element={<CarList />} />
            <Route path='/photos' element={<PhotoList />} />
            <Route path="*" element={<NotFounPage />} />
        </Routes>
    );
}

export default AppRouter;
