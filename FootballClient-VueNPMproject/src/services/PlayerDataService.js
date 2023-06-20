import http from "../http-common";

//Author : Banuka Kumara Ambegoda
//Date: 2023/06/19

class PlayerDataService {
  getAll() {
    return http.get("/players");
  }

  get(id) {
    return http.get(`/players/${id}`);
  }

  create(data) {
    return http.post("/players", data);
  }

  update(id, data) {
    return http.put(`/players/${id}`, data);
  }

  delete(id) {
    return http.delete(`/players/${id}`);
  }

}

export default new PlayerDataService();