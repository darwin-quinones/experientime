import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown.js'
import '../SidebarMenu.css'

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
// import {LightModeIcon, DarkModeIcon } from '@mui/icons-material';

const SitebarMenu = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)


    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={`d-flex main-b-${darkMode ? 'dark' : 'light'}`}>
            <div className={`b-dark col-auto col-md-2 min-vh-100 d-flex  justify-content-between flex-column`}>
                <div>
                    <a href='/' className={`text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-3`}>
                        <i className="fs-4 bi bi-speedmeter"></i>
                        <span className={`ms-1 fs-4 d-none d-sm-inline`}>Brand</span>
                    </a>
                    <hr className="text-secondary d-none d-sm-block" />
                    <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
                        <li className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                            <a href='/' className="nav-link text-white fs-5" aria-current="page">
                                <i className="bi bi-speedometer2"></i>
                                <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                            </a>
                        </li>

                        <li className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                            <a href='/' className="nav-link text-white fs-5" aria-current="page">
                                <i className="bi bi-house"></i>
                                <span className="ms-3 d-none d-sm-inline">Home</span>
                            </a>
                        </li>
                        <li className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                            <a href='/' className="nav-link text-white fs-5" aria-current="page">
                                <i className="bi bi-table"></i>
                                <span className="ms-3 d-none d-sm-inline">Orders</span>
                            </a>
                        </li>
                        <li className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                            <a href='/' className="nav-link text-white fs-5" aria-current="page">
                                <i className="bi bi-grid"></i>
                                <span className="ms-3 d-none d-sm-inline">Products</span>
                            </a>
                        </li>
                        <li className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                            <a href='/' className="nav-link text-white fs-5" aria-current="page">
                                <i className="bi bi-people"></i>
                                <span className="ms-3 d-none d-sm-inline">Costumers</span>
                            </a>
                        </li>
                    </ul>

                </div>


                <div className=" " >
                    <hr className="text-secondary d-none d-sm-block" />
                    {darkMode ?
                        <div className="nav  flex-column mb-3 mt-sm-0">
                            <div className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                                <div onClick={toggleDarkMode} className="nav-link text-white fs-5" aria-current="page">
                                    <LightModeIcon style={{ color: 'white' }} />
                                    <span className="ms-3 d-none d-sm-inline">Light mode</span>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="nav  flex-column mb-3 mt-sm-0">
                            <div className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                                <div onClick={toggleDarkMode} className="nav-link text-white fs-5" aria-current="page">
                                    <DarkModeIcon  style={{ color: 'white' }} />
                                    <span className="ms-3 d-none d-sm-inline">Dark mode</span>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>

            <div className={`col`}>{children}</div>
        </div>
    );
}

export default SitebarMenu;
