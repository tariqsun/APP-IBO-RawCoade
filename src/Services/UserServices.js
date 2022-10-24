import axios from "axios"
import api from "../Helper/Api";




export const login = async (input) =>{
    return await api.post('/login', input);
}

export const getAuthUser =  () =>{
    if(localStorage.getItem('user') !== null){
        return JSON.parse(localStorage.getItem('user'));
    }else{
        return null
    }
}

export const getAuthToken =  () =>{
    if(localStorage.getItem('token') !== null){
        return localStorage.getItem('token');
    }else{
        return null
    }
}

export const isUserAuthenticated =  () =>{
    if(localStorage.getItem('token') !== null){
        return localStorage.getItem('token');
    }else{
        return null
    }
}