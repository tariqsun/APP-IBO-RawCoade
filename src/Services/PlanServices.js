import api from "../Helper/Api"




export const getPlans = async () =>{
    return await api.get('/plans');
}

export const getPlan = async (id) =>{
    return await api.get(`/plans/edit/${id}`);
}


export const createPlan = async (input) =>{
    return await api.post('/plans/create', input);
}

export const updatePlan = async (id, input) =>{
    return await api.post(`/plans/update/${id}`, input);
}

export const deletePlan = async (id) =>{
    return await api.post(`/plans/delete/${id}`);
}