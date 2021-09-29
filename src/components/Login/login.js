import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

import './login.css'
function Login(props) {
    const [isLoading, setIsLoading]=useState(false)
       return (<>
    <Form>
    <Form.Field>
      <label>Please Enter Your ID</label>
      <input placeholder='ID' type="number"></input>
    </Form.Field>
    {isLoading?
        <Form loading></Form>:
        <span/>
    }
    <Button type='submit' onClick={()=>{props.setIsCorrectId(true); setIsLoading(true)}}>Submit</Button>
    
    {!props.isCorrectId?
    <label className="notExistID">Your ID is Not Exist in The System</label>
    :<span/>
    }
  </Form>
        </>)

}



export default Login
