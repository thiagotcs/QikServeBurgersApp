import axios from 'axios'

export const restaurantApi = axios.create({
  baseURL: 'http://localhost:5000/venue',
})

export const menuApi = axios.create({
  baseURL: 'http://localhost:5000/menu',
})
