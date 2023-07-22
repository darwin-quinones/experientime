import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SitebarMenu from './components/SidebarMenu';
import SitebarMenu2 from './components/SidebarMenu2';
import CarCreate from './components/projects/cars/CarCreate';
import CarList from './components/projects/cars/CarList';
import ReportPDF from './components/projects/reports/ReportPDF';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <SitebarMenu>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/cars' element={ <CarList/> } />
        </Routes>
      </SitebarMenu>
    </Router>
    
  );
}

export default App;
