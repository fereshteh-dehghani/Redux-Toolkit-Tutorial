import axios from 'axios';
const API =axios.create({
    base:process.env.REACT_APP_BASEURL
});
API.interceptors.request.use((req) =>{
    if(localStorage.getItem("user")){
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
        }`;
    }
    return req;
})
