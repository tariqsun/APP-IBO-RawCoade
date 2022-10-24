import api from "../Helper/Api"







export const getCustomers = async () =>{
  return await api.get('/customers');
}
export const getCustomersCount = async () =>{
  return await api.get('/customers/counts');
}

export const getCustomer = async (id) =>{
  return await api.get(`/customers/edit/${id}`);
}

export const createCustomers = async (input) =>{
  return await api.post('/customers/create', input);
}

export const updateCustomer = async (id, input) =>{
  return await api.post(`/customers/update/${id}`, input);
}

export const deleteCustomer = async (id) =>{
  return await api.post(`/customers/delete/${id}`);
}