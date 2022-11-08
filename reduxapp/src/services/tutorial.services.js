import http from "../http-common";

class TutorialDataService {
    getAll() {
        return http.get('/tutorial');
    }
    grt(id) {
        return http.get('/tutorial/${id}');
    }
    createData(data) {
        return http.put('/tutorials,data');
    }
    createData(id,data) {
        return http.get('/tutorials/${id},data');
    }
    delete(id) {
        return http.delete('/tutorials/${id}');
    }
    deleteAll() {
        return http.delete('/tutorials');
    }
    findByTitle(title) {
        return http.get('/tutorial?title=${title}');
    }
}
export default new TutorialDataService;