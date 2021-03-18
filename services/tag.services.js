import http from "../http-common";

class TagService {
    
    createTag(body){
        return http.post("/create/tag",body)
    }

    getTagByUserID(body){
        return http.get(`/tags`,body)
    }

    deleteTagByName(body){
        return http.delete("/delete/tag/",body)
    }
}

export default new TagService();