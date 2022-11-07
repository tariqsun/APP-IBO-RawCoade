import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAuthUser, isUserAuthenticated, login } from '../../Services/UserServices'
import { mapResponse } from '../../Helper/Api'

const initialState = {
   check:isUserAuthenticated(),
   token:null,
   user:getAuthUser(),
   errors:null,
   state:'idle'
};



export const authLoginUser = createAsyncThunk(
    'users/auth',
    async (input, { rejectWithValue }) => {
        try {
            const response = await login(input)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
  )


export const AuthReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      getUser: (state) => {
        state.user = JSON.parse(sessionStorage.getItem('user'));
      }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(authLoginUser.pending, (state)=>{
            state.state = 'pending';
        })
        .addCase(authLoginUser.fulfilled, (state, action)=>{
            state.state = 'idle';
            if(action.payload.errors){
               toast.error(action.payload.message);
               state.errors = action.payload;

            }else{
                sessionStorage.setItem('token', action.payload.token);
                sessionStorage.setItem('user', JSON.stringify(action.payload.user)); 
                state.check = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
                
            }
        })
        .addCase(authLoginUser.rejected, (state, action)=>{
            toast.error(action.payload.message);
            state.errors =  mapResponse(action.payload);
            state.state = 'idle';
        });
    }
})
  
  // Action creators are generated for each case reducer function
export const { getUser  } = AuthReducer.actions

export const getAuthState = ( state ) => state.auth;
  
export default AuthReducer.reducer