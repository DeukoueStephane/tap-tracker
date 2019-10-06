import axios from 'axios' //use to allow transfert between frontend and backend

export default () => {
  return axios.create({
    baseURL:`http://localhost:8081/`
  })
}
