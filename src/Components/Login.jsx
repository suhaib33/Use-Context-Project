import React, { useContext, useState } from 'react'

import UserContext from '../Context/UserContext'

const Login = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState('')
    

    const {setuser} = useContext(UserContext)
    

    const Handlesubmit = (e) =>{
        e.preventDefault()
        setuser({username , password})


    }
   
  return (
  <div>
    <h2>Login</h2>
    <input type='text' placeholder='Enter Username'  value={username} onChange={(e)=>{
        setusername(e.target.value)
    }}/>
    <br/>
    <br/>
    
    <input type='Password' placeholder='Enter Password'  value={password} onChange={(e)=>{
        setpassword(e.target.value)
    }}/>
    <br/>
    
    
    <button onClick={Handlesubmit}>submit</button>
  </div>
  )
}

export default Login