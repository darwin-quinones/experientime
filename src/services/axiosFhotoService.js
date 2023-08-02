import axios from 'axios'

export const axiosFhoto = axios.create({
    baseURL: 'https://api.unsplash.com'
})