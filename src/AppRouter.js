import React from 'react';
import {Route, Routes } from 'react-router-dom';
import SitebarMenu from './components/SidebarMenu';
import CarCreate from './components/projects/cars/CarCreate';
import CarList from './components/projects/cars/CarList';
import ReportPDF from './components/projects/reports/ReportPDF';
import Dashboard from './components/Dashboard';
import PhotoList from './components/projects/photos/PhotoList';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/cars' element={<CarList />} />
            <Route path='/photos' element={<PhotoList />} />
        </Routes>
    );
}

export default AppRouter;
