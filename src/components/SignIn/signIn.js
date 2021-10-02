import React, { useEffect, useState } from 'react'
import { Button, Form, Checkbox } from 'semantic-ui-react'
import $ from "jquery";

function SignIn(props) {
    const [isLoading, setIsLoading]=useState(false)
    const [id, setId]=useState(null)
    const [sellerCheck, setSellerCheck]=useState(false)
    const [managerCheck, setManagerCheck]=useState(false)
    const [warning, setWarning]= useState('This ID is alredy in the system, please try again')
    useEffect(()=>{

    },[managerCheck, props.isCorrectId])

    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

       return (<>
    <Form>
    <Form.Field>
      <label>Please Enter Your ID</label>
      <input placeholder='ID' type="number" value={id} onChange={(e)=>{setId(e.target.value)}}></input>
    </Form.Field>
    <Form.Field>
      <label>Choose Your Role/s</label>
      </Form.Field>
      <div style={{display:"flex", flexDirection:'column', paddingBottom:"5px"}}>

      <Checkbox label='Manager' checked={managerCheck} onChange={()=>{setManagerCheck(!managerCheck)}} />
      <Checkbox checked={sellerCheck} onChange={()=>{setSellerCheck(!sellerCheck)}} label='Seller' />
      </div>
    {isLoading?
        <Form loading></Form>:
        <span/>
    }
    <Button type='submit' onClick={()=>{ 
            setIsLoading(true)
            let roles=[]
            if(sellerCheck)
                roles.push("Seller")
            if(managerCheck)
                roles.push("Manager")
           
           
            if(!isNumber(id)){
                setWarning('ID must be a number')
                props.setIsCorrectId(false)
                setIsLoading(false)
            }
            if(roles.length<1){
                setWarning('You have to choose at list one role')
                props.setIsCorrectId(false)
                setIsLoading(false)
            }
            if(isNumber(id) && roles.length>=1 ){
                addUser(id, roles, props.setUser,props.setIsCorrectId, setIsLoading)
                setWarning('This ID is alredy in the system, please try again')
                props.setIsCorrectId(true)
            }
            // props.setUser(tempUser)
             
           }}
            >Submit</Button>
    
    {!props.isCorrectId && id ? 
    <label className="notExistID">{warning}</label>
    :<span/>
    }
  </Form>
        </>)

}

const addUser= (id,roles, setUser, setIsCorrectId, setIsLoading)=>{
    $.ajax({
        url: 
        //"http://localhost:9000/.netlify/functions/api/addUser",
         "https://goofy-ride-8664d8.netlify.app/.netlify/functions/api/addUser",
        type: 'POST',
        data:{id:id,role:roles },
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

export default SignIn
