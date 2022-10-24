import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GuestLayout(props) {

  const authState = useSelector((state)=>state.auth);  


  return (
    <React.Fragment>
        {!authState.check?(
            <>
                {props.children}
            </>
        ):(
            <Navigate to="/" replace />
        )}
        <ToastContainer />
    </React.Fragment>
  )
}

export default GuestLayout