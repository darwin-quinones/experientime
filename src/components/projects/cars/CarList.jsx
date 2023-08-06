import React, { useEffect, useState } from 'react';
import { getAllCars, axiosCar } from '../../../services/fetchCRUDCarService';
import { axiosCountry } from '../../../services/axiosCountryService';
import * as Alerts from '../alerts/Alerts'
import CarCreate from './CarCreate.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown.js'
import validator from 'validator';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const CarList = () => {

    const [cars, setCars] = useState([])
    const [cauntries, setCauntries] = useState([])

    // execute at the bigging when page load
    useEffect(() => {
        listCars()
        getCarsTest()
    }, [])
    const getCarsTest = () => {
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
        nombre: '',
        modelo: '',
        marca: '',
        pais: ''
    }

    const createCarSchema = Yup.object().shape(
        {
            nombre: Yup.string()
                .required('El nombre es requerido')
                .min(4, 'El nombre es muy corto')
                .max(50, 'El nombre es muy largo'),
            modelo: Yup.string()
                .required('El modelo es requerido')
                .min(4, 'El modelo es muy corto')
                .max(50, 'El modelo es muy largo'),
            marca: Yup.string()
                .required('El marca es requerida')
                .min(4, 'El marca es muy corta')
                .max(50, 'El marca es muy larga'),
            pais: Yup.string()
                .required('El pais es requerido')
        }
    )
    const onHandleSubmit = async (values, { resetForm }) => {
        await new Promise((r) => setTimeout(r, 1000));
        createCar(values)
        resetForm({ values: '' })

    }

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


    const API_CARS = [
        {
            "id": 21,
            "nombre": "Spark GT",
            "modelo": "Modelo LT",
            "marca": "Chevrolet",
            "pais": "Colombia",
            "fechaCreate": "2022-10-26",
            "fechaUpdate": "2022-10-27"
        },
        {
            "id": 22,
            "nombre": "Toyota TXL",
            "modelo": "Modelo Diesel",
            "marca": "Toyota",
            "pais": "Japan",
            "fechaCreate": "2022-10-26",
            "fechaUpdate": null
        },
        {
            "id": 23,
            "nombre": "Mercedes Benz AGM",
            "modelo": "Modelo Turbo",
            "marca": "Mercedes Benz",
            "pais": "Germany",
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
                        Crear Carro
                    </button>
                </div>
                <div className="card-body table table-responsive">
                    <h4>Lista de carros</h4>
                    <table className="table table-responsive table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Modelo</th>
                                <th>Marca</th>
                                <th>Pais</th>
                                <th>Fecha Creación</th>
                                <th>Fecha Edición</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(cars ? cars.map((car) => (
                                <tr key={car.id}>
                                    <td>{c++}</td>
                                    <td>{car.nombre}</td>
                                    <td>{car.modelo}</td>
                                    <td>{car.marca}</td>
                                    <td>{car.pais}</td>
                                    <td>{car.fechaCreate}</td>
                                    {car.fechaUpdated ? (
                                        <td>{car.fechaUpdated}</td>
                                    ) :
                                        (<td>No se ha editado</td>)
                                    }
                                    <td>
                                        <button type="button" className="btn btn-warning"
                                            style={{ marginRight: "5px" }}
                                        // onClick={() => createCar(car.id)}
                                        >Editar</button>
                                        <button type="button" className="btn btn-danger">
                                            Borrar</button>
                                    </td>
                                </tr>
                            ))
                                :
                                (
                                    <tr key={cars}>
                                        <td colSpan={10}>No hay datos</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modals */}
            <div className="modal fade" id="createCarModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="createCarModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="createCarModalLabel">Crear un nuevo Carro</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <Formik
                            // initial values  that the form will take
                            initialValues={initialValues}
                            validationSchema={createCarSchema}
                            onSubmit={onHandleSubmit}

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
                                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                                <Field type="text"
                                                    name="nombre"
                                                    id="nombre"
                                                    className="form-control"
                                                    placeholder="Nombre" />
                                                {/* errors  */}
                                                {
                                                    /* If exists any error and also input is touched it return a message */
                                                    errors.nombre && touched.nombre &&
                                                    (
                                                        <ErrorMessage name="nombre" className='col-sm-12 text-danger' role="alert" component='div' />
                                                    )
                                                }
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="modelo" className="form-label">Modelo</label>
                                                <Field type="text"
                                                    name="modelo"
                                                    id="modelo"
                                                    placeholder="Modelo"
                                                    className="form-control" />
                                                {/* errors  */}
                                                {
                                                    /* If exists any error and also input is touched it return a message */
                                                    errors.modelo && touched.modelo &&
                                                    (
                                                        <ErrorMessage name="modelo" className='col-sm-12 text-danger' role="alert" component='div' />
                                                    )
                                                }

                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label">Marca</label>
                                                <Field type="text"
                                                    name="marca"
                                                    placeholder="Marca"
                                                    id="marca"
                                                    className="form-control"
                                                />
                                                {/* errors  */}
                                                {
                                                    /* If exists any error and also input is touched it return a message */
                                                    errors.marca && touched.marca &&
                                                    (
                                                        <ErrorMessage name="marca" className='col-sm-12 text-danger' role="alert" component='div' />
                                                    )
                                                }

                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="pais" className="form-label">País</label>
                                                <Field as="select" className="form-select"
                                                    name="pais" id="pais"
                                                    aria-label="Default select example">
                                                    <option value=''>Selecciona un país</option>
                                                    {
                                                        cauntries.map((country, index) => (
                                                            <option key={index} value={country.common}>{country.common}</option>
                                                        ))
                                                    }
                                                </Field>
                                                {/* errors  */}
                                                {
                                                    /* If exists any error and also input is touched it return a message */
                                                    errors.pais && touched.pais &&
                                                    (
                                                        <ErrorMessage name="pais" className='col-sm-12 text-danger' role="alert" component='div' />
                                                    )
                                                }

                                            </div>
                                            <div className="mb-3">
                                                {isSubmitting ? (<p>Creando nuevo carro...</p>) : null}
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="submit" className="btn btn-success">Enviar</button>
                                        </div>

                                    </Form>

                                )
                            }


                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarList;
