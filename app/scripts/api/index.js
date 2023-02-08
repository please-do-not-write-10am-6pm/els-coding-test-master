import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3035'
axios.defaults.timeout = 2000

const api = {
  fetchProducts: (searchKey) =>
    axios.get('/', {
      params: { searchKey },
    }),
}

export default api
