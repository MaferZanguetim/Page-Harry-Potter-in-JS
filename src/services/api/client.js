import axios from "axios";

const client = axios.create({
    baseURL: 'https://api.potterdb.com/'
})

export default client