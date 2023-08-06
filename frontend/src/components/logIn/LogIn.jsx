import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LogIn.css'
import axios from 'axios'

const LogIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState()
  const logInHandler = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost/checkuser' , {
      email ,
      password
    })
    console.log(`Your Email is ${email}Your Password is ${password}`)

  }

  return (
    <div className='outerForm'>
      <div className='innerForm'>
        <h1 className='login-h1'>Login</h1><br />
        <div>
          <form action='' method='post'>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' /><br /><br />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' /><br /><br />
            <button className='my-button' onClick={logInHandler}><b>  Login </b></button>
            <p className='navigate' onClick={() => { navigate("/signup") }}><b> SignUp</b></p>

          </form>
        </div>

      </div>

    </div>
  )
}

export default LogIn