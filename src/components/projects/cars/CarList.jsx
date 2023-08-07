import React, { useEffect, useState } from 'react';
import { getAllCars, axiosCar } from '../../../services/fetchCRUDCarService';
import { axiosCountry } from '../../../services/axiosCountryService';
import { confirmDeletionAlert } from '../alerts/Alerts';
import * as Alerts from '../alerts/Alerts'
import CarCreate from './CarCreate.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown.js'
import validator from 'validator';

import { Formik, Field, Form, ErrorMessage, useFormik, } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';


const CarList = () => {

    const [cars, setCars] = useState([])
    const [cauntries, setCauntries] = useState([])

    const [clickedCar, setClickedCar] = useState({
        id: '',
        name: '',
        model: '',
        brand: '',
        country: ''
    });

    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    // Function to open the modal
    const openModal = () => {
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
    };

    // execute at the bigging when page load
    useEffect(() => {
        listCars()
        getCountries()
    }, [])

    useEffect(() => {
        if (showModal) {
            // Update Formik initial values when clickedCar changes
            formik.setValues(clickedCar);
        }
    }, [clickedCar, showModal]);

    const getCountries = () => {
        axiosCountry.get('/all')
            .then((response) => {
                if (response.data) {
                    // order country names alphabetically
                    const countries = response.data.map((country) => {
                        return country.name
                    })
                    const orderedCountries = countries.slice().sort((a, b) => {
                        return a.common.localeCompare(b.common);
                    });
                    setCauntries(orderedCountries)
                }
            })
            .catch((error) => console.log(error))
    }

    const listCars = async () => {
        getAllCars()
            .then((response) => {
                setCars(response)
            }).catch((error) => {
                console.log(`Something went wrong: ${error}`)
            })
        // .finally(() => {
        //     console.log('ended obtaining cars')
        // })
    }

    const initialValues = {
        name: '',
        model: '',
        brand: '',
        country: ''
    }


    const createCarSchema = Yup.object().shape(
        {
            name: Yup.string()
                .required('Name is required')
                .min(4, 'Name is too short')
                .max(50, 'Name is too large'),
            model: Yup.string()
                .required('Model is required')
                .min(4, 'Model is too short')
                .max(50, 'Model is too large'),
            brand: Yup.string()
                .required('Brand is required')
                .min(4, 'Brand is too short')
                .max(50, 'Brand is too large'),
            country: Yup.string()
                .required('Country is required')
        }
    )


    const onHandleSubmitCarCreate = async (values, { resetForm }) => {
        await new Promise((r) => setTimeout(r, 1000));
        createCar(values)
        resetForm({ values: '' })

    }
    const onHandleSubmitCarEdit = async (car, { resetForm }) => {
        await new Promise((r) => setTimeout(r, 1000));
        // resetForm({ values: '' })
        axiosCar.put(`/cars/${car.id}`, car)
            .then((response) => {
                console.log('card edited: ', response.data);
                listCars()
            })
            .catch((error) => console.log(error))
        // console.log('edit car values: ', values)

    }
    const formik = useFormik({

        initialValues: {
            // We use || '' to provide a default value of an empty string if clickedCar.name is undefined
            id: clickedCar.id || '',
            name: clickedCar.name || '',
            model: clickedCar.model || '',
            brand: clickedCar.brand || '',
            country: clickedCar.country || ''
        },
        validationSchema: createCarSchema,
        onSubmit: onHandleSubmitCarEdit
    });

    const createCar = (data) => {
        axiosCar.post('/cars', data)
            .then((response) => {
                if (response.status === 201 && Object.keys(response.data).length > 0) {
                    // if the car is created succesfully the we list again cars
                    listCars()
                }
            })
            .catch((error) => console.log(error))
    };

    const getCarById = (id) => {
        axiosCar.get(`/cars/${id}`)
            .then((response) => {
                setClickedCar({
                    id: response.data.id,
                    name: response.data.name,
                    model: response.data.model,
                    brand: response.data.brand,
                    country: response.data.country
                })
                openModal()
            })
            .catch((error) => console.log(error))
    }

    const deleteCarById = (id) => {
        //confirmDeletionAlert()
        axiosCar.delete(`/cars/${id}`)
        .then((response) => {
            console.log('response of deliting: ', response)
            if(response.status === 200 && response.data.message){
                listCars()
            }
        })
        .catch((error) => console.log(error))
    }
    const API_CARS = [
        {
            "id": 21,
            "name": "Spark GT",
            "model": "model LT",
            "brand": "Chevrolet",
            "country": "Colombia",
            "fechaCreate": "2022-10-26",
            "fechaUpdate": "2022-10-27"
        },
        {
            "id": 22,
            "name": "Toyota TXL",
            "model": "model Diesel",
            "brand": "Toyota",
            "country": "Japan",
            "fechaCreate": "2022-10-26",
            "fechaUpdate": null
        },
        {
            "id": 23,
            "name": "Mercedes Benz AGM",
            "model": "model Turbo",
            "brand": "Mercedes Benz",
            "country": "Germany",
            "fechaCreate": "2022-10-26",
            "fechaUpdate": null
        }
    ]

    var c = 1
    return (
        <div>
            <div className="card table table-response">
                <div className="card-header table table-responsive" style={{ backgroundColor: "#33527F", float: 'right' }}>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#createCarModal">
                        Create Car
                    </button>
                </div>
                <div className="card-body table table-responsive">
                    <h4>Car List</h4>
                    <table className="table table-responsive table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Brand</th>
                                <th>Country</th>
                                <th>Creation date</th>
                                <th>Update date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(cars ? cars.map((car) => (
                                <tr key={car.id}>
                                    <td>{c++}</td>
                                    <td>{car.name}</td>
                                    <td>{car.model}</td>
                                    <td>{car.brand}</td>
                                    <td>{car.country}</td>
                                    <td>{car.creation_date}</td>
                                    {car.update_date ? (
                                        <td>{car.update_date}</td>
                                    ) :
                                        (<td>No edited</td>)
                                    }
                                    <td>
                                        <button type="button" className="btn btn-warning"
                                            style={{ marginRight: "5px" }}
                                            
                                            onClick={() => getCarById(car.id)}
                                        >Edit</button>
                                        <button type="button" className="btn btn-danger" 
                                        onClick={ () => deleteCarById(car.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                                :
                                (
                                    <tr key={cars}>
                                        <td colSpan={10}>No data</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modals */}
            {/* create car modal */}
            <div className="modal fade" id="createCarModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="createCarModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="createCarModalLabel">Create new Car</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <Formik
                            // initial values  that the form will take
                            initialValues={initialValues}
                            validationSchema={createCarSchema}
                            onSubmit={onHandleSubmitCarCreate}
                        >
                            {
                                ({
                                    values,
                                    touched,
                                    errors,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur
                                }) => (
                                    <Form>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <Field type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    placeholder="Name" />
                                                {/* errors  */}
                                                {
                                                    /* If exists any error and also input is touched it return a message */
                                                    errors.name && touched.name &&
                                                    (
                                                        <ErrorMessage name="name" className='col-sm-12 text-danger' role="alert" component='div' />
                                                    )
                                                }
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="model" className="form-label">Model</label>
                                                <Field type="text"
                                                    name="model"
                                                    id="model"
                                                    placeholder="Model"
                                                    className="form-control" />
                                                {/* errors  */}
                                                {
                                                    /* If exists any error and also input is touched it return a message */
                                                    errors.model && touched.model &&
                                                    (
                                                        <ErrorMessage name="model" className='col-sm-12 text-danger' role="alert" component='div' />
                                                    )
                                                }

                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label">Brand</label>
                                                <Field type="text"
                                                    name="brand"
                                                    placeholder="Brand"
                                                    id="brand"
                                                    className="form-control"
                                                />
                                                {/* errors  */}
                                                {
                                                    /* If exists any error and also input is touched it return a message */
                                                    errors.brand && touched.brand &&
                                                    (
                                                        <ErrorMessage name="brand" className='col-sm-12 text-danger' role="alert" component='div' />
                                                    )
                                                }

                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="country" className="form-label">Country</label>
                                                <Field as="select" className="form-select"
                                                    name="country" id="country"
                                                    aria-label="Default select example">
                                                    <option value=''>Select a country</option>
                                                    {
                                                        cauntries.map((country, index) => (
                                                            <option key={index} value={country.common}>{country.common}</option>
                                                        ))
                                                    }
                                                </Field>
                                                {/* errors  */}
                                                {
                                                    /* If exists any error and also input is touched it return a message */
                                                    errors.country && touched.country &&
                                                    (
                                                        <ErrorMessage name="country" className='col-sm-12 text-danger' role="alert" component='div' />
                                                    )
                                                }

                                            </div>
                                            <div className="mb-3">
                                                {isSubmitting ? (<p>Creating new car...</p>) : null}
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-success">Send</button>
                                        </div>

                                    </Form>

                                )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
            {/* edit car modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} id="editCarModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="editCarModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="createCarModalLabel">Edit Car</h1>
                            <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text"
                                        name="name"
                                        id="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="form-control"
                                        placeholder="Name"

                                    />
                                    {/* errors  */}
                                    {
                                        /* If exists any error and also input is touched it return a message */
                                        formik.errors.name && formik.touched.name &&
                                        (
                                            <div className='col-sm-12 text-danger' role="alert" >{formik.errors.name}</div>
                                        )
                                    }
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="model" className="form-label">Model</label>
                                    <input type="text"
                                        name="model"
                                        id="model"
                                        value={formik.values.model}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Model"
                                        className="form-control" />
                                    {/* errors  */}
                                    {
                                        /* If exists any error and also input is touched it return a message */
                                        formik.errors.model && formik.touched.model &&
                                        (
                                            <div className='col-sm-12 text-danger' role="alert" >{formik.errors.model}</div>
                                        )
                                    }

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Brand</label>
                                    <input type="text"
                                        name="brand"
                                        placeholder="Brand"
                                        id="brand"
                                        value={formik.values.brand}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="form-control"
                                    />
                                    {/* errors  */}
                                    {
                                        /* If exists any error and also input is touched it return a message */
                                        formik.errors.brand && formik.touched.brand &&
                                        (
                                            <div className='col-sm-12 text-danger' role="alert" >{formik.errors.brand}</div>
                                        )
                                    }

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select"
                                        name="country" id="country"
                                        aria-label="Default select example"
                                        value={formik.values.country}  // Bind the selected value to formik.values.country
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}>

                                        <option value=''>Select a country</option>
                                        {
                                            cauntries.map((country, index) => (
                                                <option key={index} value={country.common}>{country.common}</option>
                                            ))
                                        }
                                    </select>
                                    {/* errors  */}
                                    {
                                        /* If exists any error and also input is touched it return a message */
                                        formik.errors.country && formik.touched.country &&
                                        (
                                            <div className='col-sm-12 text-danger' role="alert" >{formik.errors.country}</div>
                                        )
                                    }

                                </div>
                                <div className="mb-3">
                                    {formik.isSubmitting ? (<p>Editing car...</p>) : null}
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                <button type="submit" className="btn btn-success">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CarList;
