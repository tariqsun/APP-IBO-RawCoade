import api from '../Helper/Api'



export const getExpenseCategory = async () =>{
 return await api.get('/expense/category');
}

export const getExpenseCategoryById = async (id) =>{
return await api.get(`/expense/category/edit/${id}`);
}

export const createExpenseCategory = async (input) =>{
    return await api.post('/expense/category/create', input);
}


export const updateExpenseCategory = async (id, input) =>{
    return await api.post(`/expense/category/update/${id}`, input);
}

export const deleteExpenseCategory = async (id) =>{
    return await api.post(`/expense/category/delete/${id}`);
}


export const getExpense = async () =>{
    return await api.get('/expense');
}
   
export const getExpenseById = async (id) =>{
   return await api.get(`/expense/edit/${id}`);
}
   
export const createExpense = async (input) =>{
  return await api.post('/expense/create', input);
}
   
   
export const updateExpense = async (id, input) =>{
 return await api.post(`/expense/update/${id}`, input);
}
   
export const deleteExpense = async (id) =>{
   return await api.post(`/expense/delete/${id}`);
}