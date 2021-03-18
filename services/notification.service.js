import http from "../http-common";

class NotificationService {
    
    createNotification(body){
        return http.post("/create/notification",body)
    }

    getNotificationByUserID(body){
        return http.get(`/notification`,body)
    }

    updateNotificationByID(body){
        return http.put(`/update/notification/`,body)
    }

    deleteNotificationByID(body){
        return http.delete("/delete/notification/",body)
    }
}

export default new NotificationService();