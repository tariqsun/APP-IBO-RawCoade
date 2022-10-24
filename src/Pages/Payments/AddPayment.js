import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page';
import { createCustomers, getCustomers } from '../../Services/CustomerServices';
import { createPayments } from '../../Services/PaymentServices'

function AddPayment() {

  const [state, setState] = useState({
    customer_id:'',
    payment:0
  });

  const { isLoading, isError, data }  = useQuery(['getCustomers'], getCustomers)
  const getdata = React.useMemo(()=>data, [data]);

  const handleChange = (e) =>{
    const {name, value} = e.target;

    setState({
      ...state,
      [name]:value
    });
  }

  const restState = () =>{
    setState({
      ...state,
      customer_id:'',
      payment:0
    })
  }

  const handleSubmit = (e) =>{
     e.preventDefault();

     createPayments({...state})
       .then((res)=>{
          toast.success("Success Fully added");
          console.log(res);
          restState();
       })
       .catch((err)=>{
            console.log(err);
            toast.error("Error");
            restState();
       })

  }



  return (
    <PrivateLayout>
       <Page title="Add Payment">
       <form 
            onSubmit={handleSubmit}
                        className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                       
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-6 gap-6">
                                {/* <input type="number" name="company" id="company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required="" /> */}
                                {!isError && !isLoading?(
                                  <div className="col-span-6 sm:col-span-3">
                                  <label for="customer_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customers</label>
                                  <select name='customer_id'
                                          id='customer_id'
                                          onChange={handleChange}
                                          value={state.customer_id}
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                      <option value=""  hidden>Select Customers</option>
                                      {getdata?(
                                       <>
                                        {getdata.data.map((customer, i)=>{
                                          return <option value={customer.id}>{customer.name}</option> ;
                                        })}
                                       </>  
                                      ):(
                                        <option value="">No Plans Found</option>   
                                      )};
                                  </select>
                              </div>
                                ):(
                                  <p>Loding plans</p>
                                )}
                               
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="amout" 
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                          Amoutn
                                      </label>
                                    <input 
                                          type="number" 
                                          name="payment" 
                                          id="amount" 
                                          onChange={handleChange}
                                          value={state.payment}
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="" />
                                </div>
                               
                            </div>
                        </div>
                        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
                        </div>
                    </form>
       </Page>

    </PrivateLayout>
  )
}

export default AddPayment