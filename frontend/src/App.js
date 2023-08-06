import './App.css';
import Navbar from './components/navbar/Navbar';
// import Navbar from '../src/components/navbar/Navbar';
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Services from './components/Services'
import {  Route, Routes } from 'react-router-dom';
import SignUp from './components/signUp/SignUp';
import LogIn from './components/logIn/LogIn';


function App() {
  return (<div>
      <Navbar />
      


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/LogIn" element={<LogIn/>} />



      </Routes>

  </div>
  );
}

export default App;
