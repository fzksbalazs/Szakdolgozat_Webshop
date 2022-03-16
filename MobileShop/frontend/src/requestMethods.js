import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const TOKEN = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDQyMjM1OTNjOTg0YzI2YTE4ZmQ1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Njg0MDcxNSwiZXhwIjoxNjQ3MDk5OTE1fQ.YGu3MD6vAbYHCXgHeUBIjT8GLIFM53_QonFbqTItvs4"


// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
  
});
