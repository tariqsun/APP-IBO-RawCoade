import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page';
import { createCustomers } from '../../Services/CustomerServices';
import { getPlans } from '../../Services/PlanServices'

function AddCustomer() {

  const [state, setState] = useState({
    name:'',
    email:'',
    customer_id:'',
    phone_number:'',
    discount:'',
    plan:'',
    start_date:'',
    password:'',
    status:0
  });

  const { isLoading, isError, data }  = useQuery(['getPlans'], getPlans)
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
        name:'',
        email:'',
        customer_id:'',
        phone_number:'',
        discount:'',
        plan:'',
        start_date:'',
        password:'',
        status:0
      })
  }

  const handleSubmit = (e) =>{
     e.preventDefault();

       createCustomers({...state})
       .then((res)=>{
          toast.success("Success Fully added");
          restState();
          console.log(res);
       })
       .catch((err)=>{
            console.log(err);
            restState();
            toast.error("Error");
       })

  }



  return (
    <PrivateLayout>
        <Page title="Add Customer">
            <form 
                        onSubmit={handleSubmit}
                        className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                       
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="customer_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> 
                                      Customer ID
                                    </label>
                                    <input type="text" 
                                           name="customer_id" 
                                           id="customer_id" 
                                           onChange={handleChange}
                                           value={state.customer_id}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                           placeholder="Customer Id"  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> 
                                      Name
                                    </label>
                                    <input type="text" 
                                           name="name" 
                                           id="name" 
                                           onChange={handleChange}
                                           value={state.name}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                           placeholder="Name"  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> 
                                      Email
                                    </label>
                                    <input type="email" 
                                           name="email" 
                                           id="email" 
                                           onChange={handleChange}
                                           value={state.email}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                           placeholder="Email"  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="discount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                      Discount
                                    </label>
                                    <input type="number" 
                                           name="discount" 
                                           id="discount" 
                                           onChange={handleChange}
                                           value={state.discount}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                           placeholder="Discount" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                    <input 
                                            type="number" 
                                            name="phone_number" 
                                            id="phone-number"
                                            onChange={handleChange}
                                            value={state.phone_number} 
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="e.g. +(12)3456 789" 
                                            />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start At</label>
                                    <input type="date" 
                                            name="start_date" 
                                            id="start_date" 
                                            onChange={handleChange}
                                            value={state.start_date}
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                           placeholder="Customer Start At" 
                                          />
                                </div>
                                {/* <input type="number" name="company" id="company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required="" /> */}
                                {!isError && !isLoading?(
                                  <div className="col-span-6 sm:col-span-3">
                                  <label for="plans" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plans</label>
                                  <select name='plan'
                                          id='plan'
                                          onChange={handleChange}
                                          value={state.plan}
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                      <option value=""  hidden>Select Plan</option>
                                      {getdata?(
                                       <>
                                        {getdata.data.map((plan, i)=>{
                                          return <option value={plan.id}>{plan.name}</option> ;
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
                                    <label for="password" 
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                          Password
                                      </label>
                                    <input 
                                          type="password" 
                                          name="password" 
                                          id="password" 
                                          onChange={handleChange}
                                          value={state.password}
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> 
                                      Activate
                                    </label>
                                    <select name='status'
                                        onChange={handleChange}
                                        value={state.status}
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                      >
                                      <option value="1">Activate</option>
                                      <option value="0">Disactivate</option>
                                    </select>
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

export default AddCustomer