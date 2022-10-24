import axios from "axios";
import { API_BASE_URL } from "../Constand";
import { getAuthToken } from "../Services/UserServices";




if(getAuthToken() !== null){
    axios.defaults.headers['Authorization'] = "Bearer "+getAuthToken();
}



const api = axios.create({
 baseURL:API_BASE_URL,
});



export const mapResponse = (data) =>{
    let map = {};
    let response = Object.assign({}, {message:data.message}, {...data.errors});
    for(let k in response){
        if(typeof response[k] === 'string'){
          map[k] = response[k];
        }else{
            if(Array.isArray(response[k])){
               map[k] = response[k][0]; 
            }
        }
    }
    return map;
}

export const getIfError = (e, k) =>{
    if(e !== null){
        if(e.hasOwnProperty(k)){
                return e[k];
        }else{
            return '';
        }
    }else{
        return '';
    }
}


export default api;
