import axios from "axios";

//Author : Banuka Kumara Ambegoda
//Date: 2023/06/19

export default axios.create({
  //Azure URL
  baseURL:"https://footballbkaapi.azurewebsites.net/api/",
  //Local URL
  //baseURL:"https://localhost:7211/api/",
  headers: {
    "Content-type": "application/json"
  }
});
