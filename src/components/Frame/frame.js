import React, { useState } from 'react'
import Login from '../Login/login'
import { Button, Icon, Modal,Dropdown  } from 'semantic-ui-react';
function Frame(props) {
    const [isLoggdin, setIsLoggdin]= useState(false)
    const [moveToLogin, setMoveToLogin] =useState(false)
    const [openSecoundModal, setOpenSecoundModal]= useState(false)
    const [isCorrectId, setIsCorrectId] = useState(false)
    const roleOptions = [
      {
        text: 'Manager',
        value: 'Manager'    
      },
      {
        text: 'Seller',
        value: 'Seller',
      }]
    return (
<div >
    <>
    <Modal
      onClose={() => setMoveToLogin(false)}
      onOpen={() => setMoveToLogin(true)}
      open={moveToLogin}
    >
      <Modal.Header>The Worker</Modal.Header>
      <Modal.Content image>
        <div className='image'>
          <Icon name='right arrow' />
        </div>
        <Modal.Description>
        <Login isCorrectId={isCorrectId} setIsCorrectId={setIsCorrectId}/>     
        </Modal.Description>
      </Modal.Content>
      {isCorrectId?
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
       options={roleOptions}
     />
        </Modal.Content>
        <Modal.Actions>
      
          <Button
            content='Login'
            onClick={() => {setOpenSecoundModal(false); setMoveToLogin(false)} }
          />
        </Modal.Actions>
      </Modal>
    </Modal>
   </>
   <div style={{display:'flex', justifyContent:'center', padding:"40px"}}>
   {!(isLoggdin)?
      <Button onClick={()=>{setMoveToLogin(true)}}>Login</Button>:
      <Button onClick={()=>{setIsLoggdin(false)}}>Logout</Button>
      }

    </div>
    <h1>Welcome To Worker!</h1>
        </div>)

}



export default Frame



