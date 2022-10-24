import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GuestLayout from '../Components/Layout/GuestLayout';
import Input from '../Components/UI/Input';
import { authLoginUser } from '../Config/Reducers/AuthReducer'
import { getIfError } from '../Helper/Api';


function Login() {

    const authState = useSelector((state)=>state.auth);
    const [state, setState] = useState({
        email:'',
        password:''
    });
    
    const dispatch = useDispatch();

    const onSubmitHandle = (e) =>{
        e.preventDefault();
        dispatch(authLoginUser({
            email:state.email,
            password:state.password
        }));

    }

    const onChangeHandle = (e) =>{
        const {name, value} = e.target;
        setState({
            ...state,
            [name]:value
        });
    }


  return (
    <GuestLayout>
         <section className="h-screen flex justify-center items-center bg-slate-900">
              <div className='w-11/12 lg:w-4/12 md:w-4/12 sm:w-11/12 px-6 py-11 bg-white rounded-lg shadow-xl'>
                    <div className='p-4 text-center rounded-lg shadow-2xl'>
                        <h1 className='text-4xl font-extrabold text-gray-800 uppercase'>
                            <span className='text-yellow-500'>ISP</span>BoxOffice
                        </h1>
                        
                    </div>
                    <h1
                        className='text-2xl text-center font-semibold pt-4'
                        > Login
                        </h1>
                    
            <form onSubmit={onSubmitHandle}>
                
                

                <Input 
                    label="Your Email"
                     placeholder="name@flowbite.com" 
                     type="email" 
                     id="email" 
                     name='email'
                     onChange={onChangeHandle}
                     errors={getIfError(authState.errors, 'email')}
                />
                <Input  
                        label="Your Password"
                        type="password" 
                        id="password" 
                        name='password'
                        placeholder="password" 
                        onChange={onChangeHandle}
                        errors={getIfError(authState.errors, 'password')}
                        />
                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                    
                 <div className='text-center'>
                  
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg px-9 py-2 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                           {authState.status === 'pending'?(
                             <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                             </svg>
                            ):''}
                            Login
                        </button>   
                </div>   
            </form>

              </div>
        </section>
    </GuestLayout>
  )
}

export default Login