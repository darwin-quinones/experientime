import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SitebarMenu from './components/SidebarMenu';
import SitebarMenu2 from './components/SidebarMenu2';
import CarCreate from './components/projects/cars/CarCreate';
import CarList from './components/projects/cars/CarList';
import CarFieldExample from './components/projects/cars/carFieldExample';
import ReportPDF from './components/projects/reports/ReportPDF';
import Dashboard from './components/Dashboard';
import PhotoList from './components/projects/photos/PhotoList';

function App() {
  return (
    <Router>
      <SitebarMenu>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          {/* <Route path='/cars' element={ <CarFieldExample/> } /> */}
          <Route path='/cars' element={ <CarList/> } />
          <Route path='/photos' element={ <PhotoList/> } />
        </Routes>
      </SitebarMenu>
    </Router>
    
  );
}

export default App;
