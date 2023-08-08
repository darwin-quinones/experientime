import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown.js'
import '../css/SidebarMenu.css'
import { Link } from "react-router-dom";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
// import {LightModeIcon, DarkModeIcon } from '@mui/icons-material';

const SitebarMenu = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)


    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={` d-flex main-b-${darkMode ? 'dark' : 'light'} `} >
            <div className={`sidebar b-dark col-2 col-sm-2 col-md-2 min-vh-100 d-flex  justify-content-between flex-column`}  >
                <div>
                    <Link to='/' className={`text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-3`}>
                        <i className="fs-4 bi bi-speedmeter"></i>
                        <span className={`ms-1 fs-4 d-none d-sm-inline`}>Experientime</span>
                    </Link>
                    <hr className="text-secondary d-none d-sm-block" />
                    <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
                        <li className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                            <Link to='/' className="nav-link text-white fs-5" aria-current="page">
                                <i className="bi bi-bi bi-house"></i>
                                <span className="ms-3 d-none d-sm-inline">Home</span>
                            </Link>
                        </li>

                        <li className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                            <Link to='/cars' className="nav-link text-white fs-5" aria-current="page">
                                <i className="bi bi-car-front-fill"></i>
                                <span className="ms-3 d-none d-sm-inline">Cars</span>
                            </Link>
                        </li>
                        <li className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                            <Link to='/photos' className="nav-link text-white fs-5" aria-current="page">
                                <i className="bi bi-images"></i>
                                <span className="ms-3 d-none d-sm-inline">Photos</span>
                            </Link>
                        </li>
                        <li className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                            <Link to='/' className="nav-link text-white fs-5" aria-current="page">
                                <i className="bi bi-grid"></i>
                                <span className="ms-3 d-none d-sm-inline">Products</span>
                            </Link>
                        </li>
                        <li className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                            <Link to='/' className="nav-link text-white fs-5" aria-current="page">
                                <i className="bi bi-people"></i>
                                <span className="ms-3 d-none d-sm-inline">Costumers</span>
                            </Link>
                        </li>
                        {
                            darkMode ?
                            
                                <div className="nav  flex-column mb-3 mt-sm-0">
                                    <div className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                                        <div onClick={toggleDarkMode} className="nav-link text-white fs-5 btn btn-primary" aria-current="page">
                                            <LightModeIcon style={{ color: 'white' }} />
                                            <span className="ms-3 d-none d-sm-inline">Light mode</span>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="nav  flex-column mb-3 mt-sm-0">
                                    <div className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                                        <div onClick={toggleDarkMode} className="nav-link text-white fs-5 btn btn-primary" aria-current="page">
                                            <DarkModeIcon style={{ color: 'white' }} />
                                            <span className="ms-3 d-none d-sm-inline">Dark mode</span>
                                        </div>
                                    </div>
                                </div>

                        }
                    </ul>
                    {/* this div in the button */}
                    {/* <div className=" " >
                        <hr className="text-secondary d-none d-sm-block" />
                        {darkMode ?
                            <div className="nav  flex-column mb-3 mt-sm-0">
                                <div className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                                    <div onClick={toggleDarkMode} className="nav-link text-white fs-5 btn btn-primary" aria-current="page">
                                        <LightModeIcon style={{ color: 'white' }} />
                                        <span className="ms-3 d-none d-sm-inline">Light mode</span>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="nav  flex-column mb-3 mt-sm-0">
                                <div className="nav item text-white fs-4 my-1 py-2 py-sm-0">
                                    <div onClick={toggleDarkMode} className="nav-link text-white fs-5 btn btn-primary" aria-current="page">
                                        <DarkModeIcon style={{ color: 'white' }} />
                                        <span className="ms-3 d-none d-sm-inline">Dark mode</span>
                                    </div>
                                </div>
                            </div>
                        }
                    </div> */}
                </div>
            </div>

            <div className={`main col-10 col-sm-10 col-md-10  main-b-${darkMode ? 'dark' : 'light'}`} >{children}</div>
        </div>
    );
}

export default SitebarMenu;
