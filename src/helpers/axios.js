import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_AUTH_BASE_URL,
})
console.log(process.env.REACT_APP_AUTH_BASE_URL)
export default instance
