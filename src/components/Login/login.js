import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

import './login.css'
function Login(props) {
    const [isLoading, setIsLoading]=useState(false)
    const [id, setId]=useState(null)
       return (<>
    <Form>
    <Form.Field>
      <label>Please Enter Your ID</label>
      <input placeholder='ID' type="number" value={id} onChange={(e)=>{setId(e.target.value)}}></input>
    </Form.Field>
    {isLoading?
        <Form loading></Form>:
        <span/>
    }
    <Button type='submit' onClick={()=>{props.setIsCorrectId(true); setIsLoading(true)}}>Submit</Button>
    
    {!props.isCorrectId && id ? 
    <label className="notExistID">Your ID does not exist in the system</label>
    :<span/>
    }
  </Form>
        </>)

}



export default Login
