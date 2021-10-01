import React, { useEffect, useState } from 'react'
import Login from '../Login/login'
import SignIn from '../SignIn/signIn'

import { Button, Icon, Modal,Dropdown  } from 'semantic-ui-react';
function Frame(props) {
    const [isLoggdin, setIsLoggdin]= useState(false)
    const [moveToLogin, setMoveToLogin] =useState(false)
    const [openSecoundModal, setOpenSecoundModal]= useState(false)
    const [isCorrectId, setIsCorrectId] = useState(true)
    const [roleOptions]=useState([{"text":"Manager", "value":"Manager"},{"text":"Seller", "value":"Seller"}])
    const [user, setUser]=useState(null)
    const [dropdownValue, setDropdownValue]= useState(null)
    const [moveToSignIn, setMoveToSignIn]= useState(null)
    const [openFirstModal, setOpenFirstModal]= useState(false)

    useEffect(()=>{
        if(user){
            if(user.role.length===1 || moveToSignIn){
                setOpenSecoundModal(false); 
                setMoveToLogin(false) 
                setIsLoggdin(true)
                setDropdownValue(user.role[0])
                setOpenFirstModal(false)
            }
        }
        
    },[user])

    const logoutFunction=()=>{
        setIsLoggdin(false)
        setUser(null)
        setDropdownValue(null)
    }
    return (
<div >
    <>
    <Modal
      onClose={() => {setMoveToLogin(false); setOpenFirstModal(false); setMoveToSignIn(false)}}
      onOpen={() => openFirstModal(true)}
      open={openFirstModal}
    >
      <Modal.Header>{moveToSignIn? "Sign in to ":""}The Worker</Modal.Header>
      <Modal.Content image>
        <div className='image'>
          <Icon name='right arrow' />
        </div>
        <Modal.Description>
       {moveToLogin?
        <Login isCorrectId={isCorrectId} setIsCorrectId={setIsCorrectId} setUser={setUser} user={user}/>     
        :<SignIn isCorrectId={isCorrectId} setIsCorrectId={setIsCorrectId} setUser={setUser} user={user}/>}
    </Modal.Description>
      </Modal.Content>
      {isCorrectId && !moveToSignIn?
      <Modal.Actions>
      
        <Button onClick={() => {setIsLoggdin(true); setOpenSecoundModal(true); setIsCorrectId(false)}} primary>
          Proceed <Icon name='right chevron' />
        </Button>
      </Modal.Actions>
   :
   <span/>}
      <Modal
        onClose={() => setOpenSecoundModal(false)}
        open={openSecoundModal}
        size='small'
      > 
        <Modal.Header></Modal.Header>
        <Modal.Content>
          <p>In Which Role You Want To Enter?</p>
          <Dropdown
            placeholder='Select Role'
            fluid
            selection
            value={dropdownValue}
            onChange={(e)=>{ setDropdownValue(e.target.innerText); debugger; console.log("drop",e.target.innerText);}}
            options={roleOptions}
        />
        </Modal.Content>
        <Modal.Actions>
      
          <Button
            content='Login'
            onClick={() => {setOpenSecoundModal(false); setMoveToLogin(false); setOpenFirstModal(false)} }
          />
        </Modal.Actions>
      </Modal>
    </Modal>
   </>
   <div style={{display:'flex', justifyContent:'center', padding:"40px"}}>
   {!isLoggdin?<Button onClick={()=>{setMoveToSignIn(true); setOpenFirstModal(true)}}>Sign-In</Button>:
   <span/>}
   
   {!(isLoggdin)?
      <Button onClick={()=>{setMoveToLogin(true); setOpenFirstModal(true)}}>Login</Button>:
      <Button onClick={()=>{logoutFunction()}}>Logout</Button>
      }

    </div>
    <h1>Welcome To Worker {user&&user.id} {dropdownValue}</h1>
        </div>)

}



export default Frame



