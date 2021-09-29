import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import './login.css'
function Login(props) {
   
       const [isLoggdin, setIsLoggdin]= useState(false)
       const [moveToLogin, setMoveToLogin] =useState(false)
    return (<>
    <Form>
    <Form.Field>
      <label>Please Enter Your ID</label>
      <input placeholder='ID' type="number"></input>
    </Form.Field>
    <Button type='submit' onClick={()=>{props.setIsCorrectId(true)}}>Submit</Button>

  </Form>
        </>)

}



export default Login
