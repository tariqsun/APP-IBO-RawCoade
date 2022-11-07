import api from "../Helper/Api";

export const getNas = async () =>{
    return await api.get('/mikrotik');
}
  
export const getNasById = async (id) =>{
    return await api.get(`/mikrotik/edit/${id}`);
}
  
export const createNas = async (input) =>{
   return await api.post('/mikrotik/create', input);
}
  
export const updateNas = async (id, input) =>{
    return await api.post(`/mikrotik/update/${id}`, input);
}
  
export const deleteNas = async (id) =>{
    return await api.post(`/mikrotik/delete/${id}`);
}