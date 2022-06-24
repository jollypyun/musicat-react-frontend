import axios from 'axios'

axios.interceptors.response.use(
    function (response) {
        if (response.data.code != '200' || response.data.code != '201') {
            console.log('error');
        }

        return response
    },
    function (error) {
        return Promise.reject(error)
    }
);

export default axios;