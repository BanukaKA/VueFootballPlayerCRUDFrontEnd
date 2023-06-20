import http from "../http-common";

//Author : Banuka Kumara Ambegoda
//Date: 2023/06/19

class TeamDataService {
  getAll() {
    return http.get("/teams");
  }

  get(id) {
    return http.get(`/teams/${id}`);
  }

  create(data) {
    return http.post("/teams", data);
  }

  update(id, data) {
    return http.put(`/teams/${id}`, data);
  }

  delete(id) {
    return http.delete(`/teams/${id}`);
  }


}

export default new TeamDataService();