import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCars, axiosCar } from '../../../services/fetchCRUDCarService';
import { axiosCountry } from '../../../services/axiosCountryService';
import { Formik, Field, Form, ErrorMessage, useFormik, } from 'formik';
import { PDFViewer } from '@react-pdf/renderer';
import CarsPDF from './CarsPDF.jsx';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Swal from 'sweetalert2';
import * as Yup from 'yup'
import { ContentCutOutlined, LastPage } from '@mui/icons-material';



const CarList = () => {

    const [cars, setCars] = useState([])
    const [allCars, setAllCars] = useState([])
    const [cauntries, setCauntries] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setTotalPages] = useState(1);
    const [totalRegisters, setTotalRegisters] = useState(0)
    const [clickedCar, setClickedCar] = useState({
        id: '',
        name: '',
        model: '',
        brand: '',
        country: ''
    });

    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const [isDisable, setDisabled] = useState(false); // State od button

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
    }, [currentPage])

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
        axiosCar.get(`/cars?page=${currentPage}`)
            .then((response) => {
                console.log('amount of cars: ', response.data.data)

                setCurrentPage(response.data.current_page)
                setTotalPages(response.data.last_page);
                setTotalRegisters(response.data.total)
            })
            .catch((error) => {
                setDisabled(true)
                console.log(`Something went wrong: ${error}`)
            })
    }
    const handlePageChange = (page) => {
        if (page <= currentPage || page <= lastPage) {
            setCurrentPage(page);
        }
    };

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
                listCars()
            })
            .catch((error) => console.log(error))

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
        axiosCar.delete(`/cars/${id}`)
            .then((response) => {
                if (response.status === 200 && response.data.message) {
                    listCars()
                }
            })
            .catch((error) => console.log(error))
    }
    const deleteCarConfirmationAlert = (id) => {
        return Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCarById(id)
            }
        })
    }

    const downloadCarspPDF = () => {
        axiosCar.get('/all_cars/all')
            .then((response) => {
                setAllCars(response.data)
            })
            .catch((error) => { console.log(error) });
    }
    const downloadCarsExcel = () => {
        const filename = "cars-excel.xlsx"
        axiosCar.get("/reports/generate-cars-excel", { responseType: 'blob' })
            .then((response) => {
                const blob = new Blob([response.data], { type: 'application/octet-stream' })
                // create download link for the blob
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', filename)
                //trigger the download link
                link.click();
                // Cleanup the link and object URL
                link.parentNode.removeChild(link);
                window.URL.revokeObjectURL(url);

            })
            .catch((error) => console.error(`There was an error while downloading: ${error}`))
    }

    var counter = 1
    return (
        <div className='container'>
            <div className="card table table-response">
                <div className="card-header table table-responsive">
                    
                    <div class="alert alert-info alert-dismissible fade show" role="alert">
                        <strong>I am sorry</strong>This functionality is not available right now due to I am deploying my API service 
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <button type="button" className="btn btn-success " data-bs-toggle="modal" data-bs-target="#createCarModal" disabled={isDisable}>
                        Create Car
                    </button>
                    {/* <button type="button" className="btn btn-primary ms-2" onClick={downloadCarsWord}>
                        Download Word
                    </button> */}
                    <button type="button" onClick={downloadCarspPDF} className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#CarsPDFModal" disabled={isDisable}>
                        Download Pdf
                    </button>
                    <button type="button" className="btn btn-success" onClick={downloadCarsExcel} disabled={isDisable}>
                        Download Excel
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
                            {(cars && cars.map((car) => (
                                <tr key={car.id}>
                                    <td>{counter++}</td>
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
                                            onClick={() => deleteCarConfirmationAlert(car.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))

                            )}
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><button className="page-link" onClick={() => handlePageChange(1)} title="Go to start"><KeyboardDoubleArrowLeftIcon /></button></li>
                            <li className="page-item"><button className="page-link" onClick={() => handlePageChange(currentPage - 1)} title="Previous"><KeyboardArrowLeftIcon /></button></li>
                            <li className="page-item"><button className="page-link" onClick={() => handlePageChange(currentPage + 1)} title="Next"><KeyboardArrowRightIcon /></button></li>
                            <li className="page-item"><button className="page-link" onClick={() => handlePageChange(lastPage)} title="Go to end"><KeyboardDoubleArrowRightIcon /></button></li>
                        </ul>
                    </nav>

                </div>
                <div className="card-footer text-muted">
                    <b>Page</b> <span className="badge bg-primary">{currentPage}</span> <b>of</b> <span className="badge bg-primary">{lastPage}</span> | <b>Registers</b> <span className="badge bg-success">{totalRegisters}</span>
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

            {/* cars pdf */}
            <div className="modal fade" id="CarsPDFModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="createCarModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="createCarModalLabel">Cars PDF</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-xl-12'>
                                    {allCars[0] &&
                                        <PDFViewer style={{ width: "100%", height: "90vh" }}>
                                            <CarsPDF cars={allCars} />
                                        </PDFViewer>
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default CarList;
