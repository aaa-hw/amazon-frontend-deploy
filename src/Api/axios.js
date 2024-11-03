import axios from "axios"

const axiosInstance = axios.create({
    // local instance of firebase function
    // baseURL:"http://127.0.0.1:5001/clone-4614d/us-central1/api",


    // deploy version of amazon server on render.com
    baseURL: "https://amazon-api-deploy-3i1q.onrender.com/"
});

export {axiosInstance}
