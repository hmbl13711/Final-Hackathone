import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const signUpHandler = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:800/saveuser', {
      name,
      email,
      password
    })

    console.log(`Your Name is ${name}Your Email is ${email}Your Password is ${password} `)
  }

  return (
    <div className='outerForm'>
      <div className='innerForm'>
        <h1 className='signUp-h1'>SignUp</h1><br />
        <div>
          <form action='' method='post'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' /><br /><br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' /><br /><br />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' /><br /><br />
            <p className='navigate' onClick={() => { navigate("/login") }}><b>  Login </b></p>
            <button className='my-button' onClick={signUpHandler}><b>  SignUp </b></button>

          </form>
        </div>

      </div>

    </div>
  )
}

export default SignUp