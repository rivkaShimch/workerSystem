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
    <Button type='submit' onClick={()=>{ 
            setIsLoading(true)
            getUser(id, props.setUser,props.setIsCorrectId, setIsLoading)
            // props.setUser(tempUser)
             
           }}
            >Submit</Button>
    
    {!props.isCorrectId && id ? 
    <label className="notExistID">Your ID does not exist in the system, please try again</label>
    :<span/>
    }
  </Form>
        </>)

}

const getUser= (id, setUser, setIsCorrectId, setIsLoading)=>{
    $.ajax({
        url: 
       // "http://localhost:9000/.netlify/functions/api/getUser",
         "https://goofy-ride-8664d8.netlify.app/.netlify/functions/api/getUser",
        type: 'POST',
        data:{id:id},
        success: function (data) {
            if(data.user){
                console.log("the user", data.user);
                setUser(data.user)
                setIsCorrectId(true)
                setIsLoading(false)
                return
            }
            else{
                setIsCorrectId(false)
                setIsLoading(false)
                return null
            }
                
           
        },
        error: function (err) {
            console.log("error", err);
            setIsCorrectId(false)
            setIsLoading(false)
            return null
        }
    })
}

export default Login
