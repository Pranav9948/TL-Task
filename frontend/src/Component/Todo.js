import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import InputFields from './InputFields';
import ShowUsersList from './ShowUsersList';

const Todo = () => {

    const [showField,setShowField]=useState(false)
    const [showUsers,setShowUsers]=useState(false)

  return (

    <div class="text-3xl">

<div className="addButton" style={{position:'absolute',right:'100px',top:'300px'}}>
        <Button className='bg-red-400 font-bold h-28 w-80 text-white text-5xl' 

        onClick={()=>setShowUsers(!showUsers)}
        
        
        >Show All Users</Button>{' '}
        </div>
        

        <div className="addButton" style={{position:'absolute',right:'100px',bottom:'100px'}}>
        <Button className='bg-red-400 font-bold h-28 w-28 text-white text-5xl' 

        onClick={()=>setShowField(!showField)}
        
        
        >+</Button>{' '}
        </div>

        {
            showField &&  <InputFields/>
        }

{
            showUsers &&  <ShowUsersList/>
        }

    </div>
  )
}

export default Todo