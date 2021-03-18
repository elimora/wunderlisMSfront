import http from "../http-common";

class TaskService {
    
    createTask(body){
        return http.post("/create/task",body)
    }

    tagTaskByID(body){
        return http.post("/assing/task/tag",body)
    }

    getTaskByUserID(body){
        return http.get(`/task`,body)
    }

    updateTask(body){
        return http.put(`/update/task/`,body)
    }

    updateTaskOrderByTasksArray(body){
        return http.put(`/update/order/task/`,body)
    }

    deleteTask(body){
        return http.delete("/delete/task/",body)
    }
}

export default new TaskService();