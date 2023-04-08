import axios from "axios"

class ClientService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
    });
  }

  getClients() {
    return this.api.get('/client').then(({ data }) => data).catch(err => console.error(err))
  }

  getClient(id) {
    return this.api.get(`/${id}`).then(({ data }) => data).catch(err => console.error(err))
  }

  createClient(body) {
    return this.api.post('/', body).then(({ data }) => data).catch(err => console.error(err))
  }

  editClient(id, body) {
    return this.api.put(`/${id}`, body).then(({ data }) => data).catch(err => console.error(err))
  }

  deleteClient(id) {
    return this.api.delete(`/${id}`).then(({ data }) => data).catch(err => console.error(err))
  }

  // async getCourses2() {
  //   try {
  //     const response = await this.api.get('/');
  //     return response.data
  //   } catch (error) {
  //     console.error(err)
  //   }
  // }


}

const clientService = new ClientService();
export default clientService;