import axios from 'axios'

export const getAllCars = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/cars')
    return response.json()
}

export const axiosCar  = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})