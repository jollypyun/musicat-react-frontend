import api from './http'

const getMemberLIst = (data = null) => {
    return api.getPromise('GET', `http://localhost:8080/admin/memberList`);
}

export { getMemberLIst };