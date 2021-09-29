import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { Button, Icon, Modal,Dropdown, Menu  } from 'semantic-ui-react'

import Login from './components/Login/login'
function App() {
  const [isLoggdin, setIsLoggdin]= useState(false)
  const [moveToLogin, setMoveToLogin] =useState(false)
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
<div className="App">
{moveToLogin?
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
     <Login setIsCorrectId={setIsCorrectId}/>     
     </Modal.Description>
   </Modal.Content>
   <Modal.Actions>
   {isCorrectId?
     <Button onClick={() => setIsLoggdin(true)} primary>
       Proceed <Icon name='right chevron' />
     </Button>
     :
     <span/>}
   </Modal.Actions>

   <Modal
     onClose={() => setIsLoggdin(false)}
     open={isLoggdin&&moveToLogin}
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
         onClick={() => {setIsLoggdin(false); setMoveToLogin(false)} }
       />
     </Modal.Actions>
   </Modal>
 </Modal>
</>
   :
   !(isLoggdin)?
   <div onClick={()=>{setMoveToLogin(true)}}>Login</div>:
   <div>Logout</div>
}
   </div>)
  
}

export default App;
