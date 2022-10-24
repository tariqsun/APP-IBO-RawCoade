import api from "../Helper/Api"







export const getPendingPayments = async () =>{
    return await api.get('/payments');
}

export const getDonePayments = async () =>{
    return await api.get('/payments/done');
}

export const createPayments = async (input) =>{
    return await api.post('/payments/partial', input);
}


export const getPendingThisMonthPayments = async () =>{
    return await api.get('/payments/pending-monthly');
}

export const getRecoverPayments = async () =>{
    return await api.post('/payments/recovery-payment');
}

export const getTotalPendingPayments = async () =>{
    return await api.post('/payments/total-payment');
}