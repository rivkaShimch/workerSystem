import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
// import {getUser} from '../../services/user.services'
import './login.css'
import $ from "jquery";

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
    <Button type='submit' onClick={()=>{ getUser(id); props.setIsCorrectId(true); setIsLoading(true)}}>Submit</Button>
    
    {!props.isCorrectId && id ? 
    <label className="notExistID">Your ID does not exist in the system</label>
    :<span/>
    }
  </Form>
        </>)

}

const getUser= (id)=>{
    $.ajax({
        url: "https://goofy-ride-8664d8.netlify.app/.netlify/functions/api/getUser",
        type: 'POST',
        body:{id},
        success: function (data) {
            console.log("the user", data.user);
            return data.user
        },
        error: function (err) {
            console.log("error", err);
            return "error"
        }
    })
}

export default Login
