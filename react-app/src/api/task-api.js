import axiosClient from "./axiosClient"

const taskAPI = {
    getListTasks(){
        const url = '/api/tasks'
        return axiosClient.get(url)
    },

    getTaskStatuses(){
        const url = '/api/taskstatuses'
        return axiosClient.get(url)
    },

    updateTaskStatus(data){
        const url = '/api/updatetaskstatus'
        return axiosClient.put(url, data)
    },

    getTaskPriorities(){
        const url = '/api/taskpriorities'
        return axiosClient.get(url)
    }
} 

export default taskAPI