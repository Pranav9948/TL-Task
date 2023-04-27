
import { useParams } from 'react-router-dom'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';


const USERNAME_REGEX = /^[a-zA-Z0-9_-]{3,16}$/;
const MOBILE_NUMBER_REGEX = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

const EditUsers = () => {

    const {id}=useParams()
    const [userzz, setUserzz] = useState([]);

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');
  
   
  
    const handleUsernameChange = (e) => {
      const { value } = e.target;
      setUsername(value);
      if (!USERNAME_REGEX.test(value)) {
        setUsernameError('Username must be between 3 and 16 characters and may only contain letters, numbers, underscores, and hyphens.');
      } else {
        setUsernameError('');
      }
    }
  
    const handleMobileNumberChange = (e) => {
      const { value } = e.target;
      setMobileNumber(value);
      if (!MOBILE_NUMBER_REGEX.test(value)) {
        setMobileNumberError('Please enter a valid Indian mobile number.');
      } else {
        setMobileNumberError('');
      }
    }
  
    const handleSubmit = async(e) => {
      e.preventDefault();
  
   
   
  
      try{
             console.log('api called');
          const data=await axios.post('/api/users/addcontact',{username,mobileNumber})
      }
  
      catch(err){
  
          console.log(err)
      }
  
      
      
    }


    

    console.log('4222',id);


    useEffect(()=>{

        showEditUser(id)

    },[])

    const   showEditUser = async (id) => {

        const { data } = await axios.get(`/api/users/getuser/${id}`);
        
        console.log('433',data);
    
        const {userDetails} = data;
    
        setUserzz(userDetails);

        

        console.log("333",userzz);


    
    
      };




  return (
    <div className='w-5/12 mt-40 ms-52'>

        <h1>EditUsers</h1>

      
<Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername" className='mt-3 mb-3'>
        <Form.Label className='mt-3 mb-3'>Username</Form.Label>
        <Form.Control name='username' type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} defaultValue={userzz.username} />
        {usernameError && <Form.Text className="text-danger">{usernameError}</Form.Text>}
      </Form.Group>
      <Form.Group controlId="formBasicMobileNumber" className='mt-3 mb-3'>
        <Form.Label className='mt-3 mb-3'>Mobile Number</Form.Label>
        <Form.Control name='mobile' type="tel" placeholder="Enter mobile number" defaultValue={userzz.mobileNumber} value={mobileNumber} onChange={handleMobileNumberChange} />
        {mobileNumberError && <Form.Text className="text-danger">{mobileNumberError}</Form.Text>}
      </Form.Group>
      <Button className='mt-3 mb-3 bg-green-500 font white' variant="primary" type="submit" disabled={!!usernameError || !!mobileNumberError}>
        Submit
      </Button>
    </Form>


    </div>
  )
}

export default EditUsers