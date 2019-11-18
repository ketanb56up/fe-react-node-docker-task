import axios from 'axios'
const base_url = 'http://localhost:5000'

export const http = axios.create({
  baseURL: base_url,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
