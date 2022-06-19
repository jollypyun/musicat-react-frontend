import axios from 'axios';

export default function customAxios(url, callback) {
    axios(
        {
            url: '/admin' + url,
            method: 'post',
            baseURL: 'http://localhost:8080',
            withCredentials: true
        }
    ).then(function (response) {
        callback(response.data);
    });
}