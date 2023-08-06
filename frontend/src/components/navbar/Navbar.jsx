import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <ol className='nav-ol'>

        <li className='nav-ol-li'><Link to='/'><b>Home</b></Link></li>
        <li className='nav-ol-li'><Link to='/about'><b>About</b></Link></li>
        <li className='nav-ol-li'><Link to='/services'><b>Services</b></Link></li>
        <li className='nav-ol-li'><Link to='/contactUs'><b>Contact </b></Link></li>
        <li className='nav-ol-li'><Link to='/signUp'><b>SignUp </b></Link></li>
        <li className='nav-ol-li'><Link to='/logIn'><b>Login </b></Link></li>


      </ol>
    </div>
  );
};

export default Navbar;
