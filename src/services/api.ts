import axios from 'axios'

export const restaurantApi = axios.create({
  baseURL: 'https://98d36ac94d36499f89398905f4d4f609.api.mockbin.io/',
})

export const menuApi = axios.create({
  baseURL: 'https://2486713dae314753ae6b0ff127002d12.api.mockbin.io/',
})
