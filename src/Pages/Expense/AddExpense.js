import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page';
import { createExpense, getExpenseCategory } from '../../Services/ExpenseService';

function AddExpense() {

  const [state, setState] = useState({
    category:'',
    amount:'',
    expens_date:'',
  });


  const { isLoading, isError, data } = useQuery(['getExpenseCategory'], getExpenseCategory);
  const getdata = React.useMemo(()=>data, [data]);

  const HandleChange = (e) =>{
    const {name, value} = e.target;
    setState({
      ...state,
      [name]:value
    });
  }

  const restState = () =>{
    setState({
      ...state,
      category:'',
      amount:'',
      expens_date:'',
    })
  }

  const HandleSubmit = (e) =>{
      e.preventDefault();
     
      createExpense({...state})
      .then((res)=>{
          console.log(res);
          toast.success("sexfully add category");
          restState();
      }).catch((err)=>{
        toast.error(err.response.data.message);
        restState();
        console.log(err);
      });
  }

  return (
    <PrivateLayout>
       <Page title="Add Expense">
            <form onSubmit={HandleSubmit} className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                       <div className="p-6 space-y-6">
                           <div className="grid grid-cols-6 gap-6">
                               <div className="col-span-6 sm:col-span-3">
                                   <label for="customer_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> 
                                     Amount
                                   </label>
                                   <input type="number" 
                                          name="amount" 
                                          id="amount" 
                                          onChange={HandleChange}
                                          value={state.amount}
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                          placeholder="Amount"  />
                               </div>
                               {!isError && !isLoading?(
                                  <div className="col-span-6 sm:col-span-3">
                                  <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                  <select name='category'
                                          id='category'
                                          onChange={HandleChange}
                                          value={state.category}
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                      <option value=""  hidden>Select Category</option>
                                      {getdata?(
                                       <>
                                        {getdata.data.map((category, i)=>{
                                          return <option value={category.id}>{category.name}</option> ;
                                        })}
                                       </>  
                                      ):(
                                        <option value="">No Category Found</option>   
                                      )};
                                  </select>
                              </div>
                                ):(
                                  <p>Loding Category</p>
                                )}
                               <div className="col-span-6 sm:col-span-3">
                                   <label for="expense_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> 
                                     Expense Date
                                   </label>
                                   <input type="date" 
                                          name="expens_date" 
                                          id="expens_date" 
                                          onChange={HandleChange}
                                          value={state.expens_date}
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                          placeholder="expens_date"  />
                               </div>
                           </div>
                       </div>
                       <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                           <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                             Submit
                           </button>
                       </div>
                   </form>
       </Page>
    </PrivateLayout>
  )
}

export default AddExpense