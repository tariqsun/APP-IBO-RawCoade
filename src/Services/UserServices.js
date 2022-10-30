import api from "../Helper/Api";




export const login = async (input) =>{
    return await api.post('/login', input);
}

export const getAuthUser =  () =>{
    if(sessionStorage.getItem('user') !== null){
        return JSON.parse(sessionStorage.getItem('user'));
    }else{
        return null
    }
}

export const getAuthToken =  () =>{
    if(sessionStorage.getItem('token') !== null){
        return sessionStorage.getItem('token');
    }else{
        return null
    }
}

export const isUserAuthenticated =  () =>{
    if(sessionStorage.getItem('token') !== null){
        return sessionStorage.getItem('token');
    }else{
        return null
    }
}