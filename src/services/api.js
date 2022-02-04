
import axios from "axios";
export const key = "2a5350b3b6dfc888cd3d5ce3b45589905519982f";
const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;