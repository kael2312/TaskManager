import axiosClient from "./axiosClient"

const projectAPI = {
    getListProject(){
        const url = '/api/projects'
        return axiosClient.get(url)
    }
}

export default projectAPI