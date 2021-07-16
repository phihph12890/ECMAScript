import { axiosClient } from './axiosClient';
const authAPI = {
    signup(user) {
        const url = '/signup';
        return axiosClient.post(url, user);
    },
    signin(user) {
        const url = '/signin';
        return axiosClient.post(url, user);
    },
    list() {
        const url = `/users`;
        return axiosClient.get(url);
    },
    remove(id) {
        const url = `/users/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/users/${id}`;
        return axiosClient.put(url, data);
    },
    read(id) {
        console.log(id);
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },
}
export default authAPI;