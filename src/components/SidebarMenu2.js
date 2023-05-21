import React, { Children } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown.js'
import '../SidebarMenu.css'

const SitebarMenu = ({ children }) => {
    return (
      <div className="d-flex">
        <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <a href='/' className='text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-3'>
              <i className="fs-4 bi bi-speedmeter"></i>
              <span className="ms-1 fs-4 d-none d-sm-inline">Brand</span>
            </a>
            <hr className="text-secondary d-none d-sm-block" />
            <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
              <li className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                <a href='/' className="nav-link text-white fs-5" aria-current="page">
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">{children}</div> {/* Aquí se muestra el contenido principal */}
      </div>
    );
  }
  

export default SitebarMenu;
