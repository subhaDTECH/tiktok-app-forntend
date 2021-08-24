import axios from 'axios';
const instance=axios.create({
    baseURL:"https://tiktok-mern-build111.herokuapp.com",
})
export default instance;