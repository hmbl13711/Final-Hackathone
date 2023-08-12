import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-ul'>

        <li className='nav-ul-li'><Link to='/'><b>Home</b></Link></li>
        <li className='nav-ul-li'><Link to='/about'><b>About</b></Link></li>
        <li className='nav-ul-li'><Link to='/contactUs'><b>Contact </b></Link></li>
        <li className='nav-ul-li'><Link to='/signUp'><b>SignUp </b></Link></li>
        <li className='nav-ul-li'><Link to='/logIn'><b>Login</b></Link></li>

        <li className='nav-ul-li'><Link to='/Cart'><FaCartPlus 
        style={{width:30, height:30}}/></Link></li>

      </ul>
    </div>
  );
};

export default Navbar;
