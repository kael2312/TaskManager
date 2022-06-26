import axiosClient from "./axiosClient";

const userApi = {
    register(data){
        const url = '/register';
        return axiosClient.post(url, data)
    },

    login(data){
        const url = '/authenticate';
        return axiosClient.post(url, data)
    },

    getUsers(){
        const url = '/api/getallemployees'
        return axiosClient.get (url)
    }
}

export default userApi