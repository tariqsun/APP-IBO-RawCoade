import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page';
import { createPlan, getPlan, updatePlan } from '../../Services/PlanServices';

function EditPlan() {

  const params = useParams();
  const [state, setState] = useState({
    name:'',
    price:'',
    status:0
  });


  const HandleChange = (e) =>{
    const {name, value} = e.target;
    setState({
      ...state,
      [name]:value
    });
  }

  useEffect(()=>{
    getPlan(params.id)
    .then((res)=>{
        setState({
            ...state,
            name:res.data.name,
            price:res.data.price,
            status:res.data.status
        })
    })
    .catch((er)=>{
        console.log(er);
    });
  }, []);

  const HandleSubmit = (e) =>{
      e.preventDefault();
     
      updatePlan(params.id, {...state})
      .then((res)=>{
          console.log(res);
          toast.success("success fully added Plan");
      }).catch((err)=>{
        toast.error(err.response.data.message);
        console.log(err);
      });
  }


  return (
    <PrivateLayout>
       <Page title=" Edit Plans">
          <form onSubmit={HandleSubmit} className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="customer_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> 
                                      Name
                                    </label>
                                    <input type="text" 
                                           name="name" 
                                           id="name" 
                                           onChange={HandleChange}
                                           value={state.name}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                           placeholder="Plan Name"  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> 
                                      Price
                                    </label>
                                    <input type="number" 
                                           name="price" 
                                           id="price" 
                                           onChange={HandleChange}
                                           value={state.price}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                           placeholder="Plan Price"  />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> 
                                      Activate
                                    </label>
                                    <select name='status'
                                        onChange={HandleChange}
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
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Submit
                            </button>
                        </div>
           </form>
       </Page>

    </PrivateLayout>
  )
}

export default EditPlan