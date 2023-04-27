import React from 'react'
import { Routes, Route } from "react-router-dom";
import Todo from './Todo';
import EditUsers from './EditUsers';

const Routers = () => {

  return (

    <div>

<Routes>
      <Route
        path="/"
        element={
         
            <Todo />  
          
        }
      />
      <Route
        path="/edit/:id"
        element={
          
            <EditUsers />
        
        }
      />
      
</Routes>



    </div>

  )
}

export default Routers