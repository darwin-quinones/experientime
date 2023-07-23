import axios from 'axios'

export const axiosCountry = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

// export const axiosCountry = axios.create({
//     baseURL: 'http://127.0.0.1:8000/api'
// })

// export const axiosCountry = axios.create({
//     baseURL: 'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1',
//     headers: {
//         'X-RapidAPI-Key': '83a1b3fb39mshe80cbceb6d0bd31p1c3051jsn401a6187eee3',
//         'X-RapidAPI-Host': 'ajayakv-rest-countries-v1.p.rapidapi.com'
//     }
// })

