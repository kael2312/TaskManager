import { addProject } from "../features/Projects/projectSlice"
import axiosClient from "./axiosClient"

const projectAPI = {
    getProjects(){
        const url = '/api/projects'
        return axiosClient.get(url)
    },

    addProject(data){
        const url = '/api/projects'
        return axiosClient.post(url, data)
    },

    deleteProject(projectID){
        const url = `/api/projects?ProjectID=${projectID}`
        return axiosClient.delete(url)
    },

    updateProject(data){
        const url = '/api/projects'
        return axiosClient.put(url, data)
    }
}

export default projectAPI