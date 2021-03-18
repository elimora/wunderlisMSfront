import http from "../http-common";

class UserService {
    
    loginUser(body){
        return http.post("/login",body)
    }

    registerUser(body){
        return http.post("/register",body)
    }

    profile(body){
        return http.get("/profile",body)
    }

    updateUser(body){
        return http.put(`/update/user/`,body)
    }

    deleteUser(body){
        return http.delete("/delete/user/",body)
    }

    getUserByMail(body){
        return http.get(`/user`,body)
    }

}

export default new UserService();