import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
        toast("Unexpected error occurred");
    }

    return Promise.reject(error);
});

const http = {
    get: axios.get,
    post: axios.post
};

export default http;