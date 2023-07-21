import React, { useEffect, useState } from 'react';
import { getAllCars } from '../../../services/fetchCRUDCarService';

const CarList = () => {

    const [cars, setCars] = useState([])

    // execute at the bigging when page load
    useEffect(() => {
        listCars()
    }, [])

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

    const createCar = () => {
        console.log('creating new car')
    }
    var c = 1
    return (
        <div className="card table table-response">

            <div className="card-header table table-responsive" style={{ backgroundColor: "#33527F", float: 'right' }}>
                <button className="btn btn-success ms-auto" onClick={createCar}>
                    Agregar Carro</button>
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
