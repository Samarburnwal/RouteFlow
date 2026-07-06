import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000"
});

export async function findRouteApi(data) {
    const response = await api.post("/route", data);
    return response.data;
}