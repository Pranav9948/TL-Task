import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ShowUsersList = () => {
  const [usersLists, setUsersList] = useState([]);

  useEffect(() => {
    getAllUsersList();
  }, []);

  const getAllUsersList = async () => {
    const { data } = await axios.get("/api/users/allUsers");

    const { showusers } = data;

    setUsersList(showusers);

    console.log("555", showusers);
  };


  const deleteHandler=(id)=>{

    console.log('delete id from',id)
  }




  return(
  
  
  <div className="ml-52 mt-16">

    <h1> ALL USERS </h1>

    {
        usersLists.map((user)=>{

             return(

                <div className="bg-slate-500 w-1/3 p-4 mt-6">

                    <h4 className="mt-3 mb-3 ">username : {user.username}</h4>
                    <h5 className="mt-3 mb-3 ">MobileNumber : {user.mobileNumber}</h5>
                     
             <Button  className="bg-green-500 text-white">Edit</Button>{' '}
             <Button className="bg-red-400 text-white" onClick={()=>deleteHandler(user._id)} >Delete</Button>{' '}


                </div>
             )
        })
    }
    
    
    
</div>

  )
};

export default ShowUsersList;
