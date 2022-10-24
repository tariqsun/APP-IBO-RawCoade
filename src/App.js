import './App.css';
import { Route, Routes } from 'react-router-dom'
import routes from './Config/routes'
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <Routes>
        {routes.map((route, i)=>{
          return <Route {...route} key={i} />
        })}
      </Routes>
    </React.Fragment>
  );
}

export default App;
