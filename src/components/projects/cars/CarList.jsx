import React, { useEffect, useState } from 'react';
import { getAllCars } from '../../../services/fetchCRUDCarService';
import { axiosCountry } from '../../../services/axiosCountryService';
import * as Alerts from '../alerts/Alerts'
import CarCreate from './CarCreate.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown.js'
import validator from 'validator';

const CarList = () => {

    const [cars, setCars] = useState([])
    const [cauntries, setCauntries] = useState([])
    const [formData, setFormData] = useState({
        nombre: '',
        modelo: '',
        marca: '',
        pais: ''
    });

    const [errors, setErrors] = useState({
        nombre: '',
        modelo: '',
        marca: '',
        pais: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation before sending data
        if (validateForm()) {
            // Send data to the server or perform other actions
            sendData(formData);
        }
    };
    const validateForm = () => {
        // Perform validation on the form data
        const { nombre, modelo, marca, pais } = formData;
        const newErrors = {};
        if (validator.isEmpty(nombre)) {newErrors.nombre = 'Este campo es requerido'}
        if (validator.isEmpty(modelo)) {newErrors.modelo = 'Este campo es requerido'}
        if (validator.isEmpty(marca)) {newErrors.marca = 'Este campo es requerido'}
        if (validator.isEmpty(pais)) { newErrors.pais = 'Este campo es requerido'}

        // if (validator.isLength(nombre, { max: 30 })) {newErrors.nombre = 'No debe tener más de 30 caracteres';}
        // if (validator.isLength(modelo, { max: 30 })) {newErrors.modelo = 'No debe tener más de 30 caracteres';}
        // if (validator.isLength(marca, { max: 30 })) {newErrors.modelo = 'No debe tener más de 30 caracteres';}
        // Update the state with the errors
        setErrors(newErrors);

        // Return true if there are no errors, otherwise return false
        return Object.keys(newErrors).length === 0;
    };

    const sendData = (data) => {
        console.log('data to sent: ', data)
        // Send the form data to the server or perform other actions
        // You can use fetch, Axios, or any other library to make API calls to the server.
    };

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
            }).finally(() => {
                console.log('ended obtaining cars')
            })
    }

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
    const minLength = 3; const maxLength = 30
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
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text"
                                        name="nombre"
                                        minLength={minLength}
                                        maxLength={maxLength}
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Nombre" id="nombre"
                                        aria-describedby="emailHelp" />
                                    {errors.nombre && <span style={{ color: 'red' }}>{errors.nombre}</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="modelo" className="form-label">Modelo</label>
                                    <input type="Modelo"
                                        name="modelo"
                                        minLength={minLength}
                                        maxLength={maxLength}
                                        value={formData.modelo}
                                        onChange={handleChange}
                                        placeholder="Modelo"
                                        id="modelo"
                                        className="form-control" />
                                   {errors.modelo && <span style={{ color: 'red' }}>{errors.modelo}</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Marca</label>
                                    <input type="text"
                                        name="marca"
                                        id="marca"
                                        minLength={minLength}
                                        maxLength={maxLength}
                                        value={formData.marca}
                                        onChange={handleChange}
                                        className="form-control"
                                        aria-describedby="emailHelp" />
                                    {errors.marca && <span style={{ color: 'red' }}>{errors.marca}</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pais" className="form-label">País</label>
                                    <select className="form-select"
                                        value={formData.pais}
                                        onChange={handleChange}
                                        name="pais" id="pais"
                                        aria-label="Default select example">
                                        <option selected>Selecciona un país</option>
                                        {
                                            cauntries.map((country) => (
                                                <option value={country.common}>{country.common}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.pais && <span style={{ color: 'red' }}>{errors.pais}</span>}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-success">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarList;
