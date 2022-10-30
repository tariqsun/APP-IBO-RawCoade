import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Config/store';
import { BrowserRouter as RouteProvide } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();


root.render(
   <RouteProvide>
     <Provider store={store}>
         <QueryClientProvider client={queryClient}>
             <App />
        </QueryClientProvider>
     </Provider>
   </RouteProvide>
);


