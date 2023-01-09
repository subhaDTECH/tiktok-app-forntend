import axios from 'axios';
const instance=axios.create({
    baseURL:"https://titok-backend.onrender.com",
})
export default instance;