import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})


axiosInstance.interceptors.response.use(
  res => res,
  async error => {
    return Promise.reject(error)
  }
)

export default axiosInstance
