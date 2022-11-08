import api from "../Helper/Api";

export const getPanel = async () =>{
    return await api.get('/panels');
}
  
export const getPanelById = async (id) =>{
    return await api.get(`/panels/edit/${id}`);
}
  
export const createPanel = async (input) =>{
   return await api.post('/panels/create', input);
}
  
export const updatePanel = async (id, input) =>{
    return await api.post(`/panels/update/${id}`, input);
}
  
export const deletePanel = async (id) =>{
    return await api.post(`/panels/delete/${id}`);
}