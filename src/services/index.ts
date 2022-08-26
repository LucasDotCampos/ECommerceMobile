import axios from "axios";
export const api = axios.create({
  baseURL: "https://ecommerceapi2022.herokuapp.com",
});
