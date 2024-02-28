import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header=()=>{
 
  const [btnName,setBtnName]=useState("Logout");
  const onlineStatus=useOnlineStatus();

    return(
      <div className="flex justify-between shadow-sm mb-2 bg-green-50">
        <div className='logo-container'>
          <img className='w-44' src={LOGO_URL}/>
        </div>
        <div className='flex items-center '>
          <ul className='flex p-4 m-4'>
            <li className='px-4 p-2 m-3 '>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className='px-4 p-2 m-3 border-solid bg-gray-200 hover:bg-gray-400 rounded-md'><Link to="/">Home</Link></li>
            <li className='px-4 p-2 m-3 border-solid bg-gray-200 hover:bg-gray-400 rounded-md'><Link to="/about">About Us</Link></li>  
            <li className='px-4 p-2 m-3 border-solid bg-gray-200 hover:bg-gray-400 rounded-md'><Link to="/contact">Contact Us</Link></li>
            <li className='px-4 p-2 m-3 border-solid bg-gray-200 hover:bg-gray-400 rounded-md'><Link to="/grocery">Grocery Store</Link></li>
            <li className='px-4 p-2 m-3 border-solid bg-gray-200 hover:bg-gray-400 rounded-md'><Link to="/cart">Cart</Link></li>
            <button className='login-btn m-3 p-2 border-solid bg-gray-200 hover:bg-gray-400 rounded-md' onClick={()=>{
              {btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}
            }}>{btnName}</button>
          </ul>
        </div>
       
      </div>
    )
  }
  export default Header;