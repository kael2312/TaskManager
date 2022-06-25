import axiosClient from "./axiosClient"

const clientLocationAPI = {
    getLocation(){
        const url = '/api/clientlocations'
        return axiosClient.get(url)
    }
}

export default clientLocationAPI