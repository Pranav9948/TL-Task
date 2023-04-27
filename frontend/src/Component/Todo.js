import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import InputFields from './InputFields';

const Todo = () => {

    const [showField,setShowField]=useState(false)

  return (

    <div class="text-3xl">
        

        <div className="addButton" style={{position:'absolute',right:'100px',bottom:'100px'}}>
        <Button className='bg-red-400 font-bold h-28 w-28 text-white text-5xl' 

        onClick={()=>setShowField(!showField)}
        
        
        >+</Button>{' '}
        </div>

        {
            showField &&  <InputFields/>
        }

    </div>
  )
}

export default Todo