import React, { useEffect, useState } from 'react';
import { getAllCars } from '../../../services/fetchCRUDCarService';
import * as Alerts from '../alerts/Alerts'
import CarCreate from './CarCreate.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown.js'

const CarList = () => {

    const [cars, setCars] = useState([])
    const [showCreateCarModal, setShowCreateCarModal] = useState(true)

    // execute at the bigging when page load
    useEffect(() => {
        listCars()
    }, [])

    const listCars = async () => {
        getAllCars()
            .then((response) => {
                console.log(response)
                setCars(response)
            }).catch((error) => {
                // alert(`Something went wrong: ${error}`)
                Alerts.carError()
            }).finally(() => {
                console.log('ended obtaining cars')
            })
    }

    const createCar = () => {
        return (
            <CarCreate />
        )
    }
    var c = 1
    return (
        <div className="card table table-response">

            <div className="card-header table table-responsive" style={{ backgroundColor: "#33527F", float: 'right' }}>
                <button className="btn btn-success ms-auto"
                    onClick={() => setShowCreateCarModal(true)}
                >
                    Agregar Carro
                </button>
                {showCreateCarModal && (
                    <div className="modal fade show" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setShowCreateCarModal(false)} // Close the modal on close button click
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    {/* Render the CarCreate component */}
                                    {/* <CarCreate createCar={createCar} /> */}
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => setShowCreateCarModal(false)} // Close the modal on close button click
                                    >
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={createCar}>
                                        Create Car
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                )}

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
    );
}

export default CarList;
