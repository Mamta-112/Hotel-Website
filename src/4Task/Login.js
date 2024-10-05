import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom'; 
export const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault(); 
        
      };
  return (<div className='Container'>
    <div >
        <h1 >Login</h1>
      </div>
  <form onSubmit={handleLogin}>
  <label>
          Email:
          <input type='text' name='Email' className="inputtext" />
        </label><br></br><br></br>
    
        <label>
          Password:
          <input type='password' name='Password' className="inputtext" />
        </label><br></br><br></br>
        <button type="submit" className="btn">Login up</button>

        <br></br>
        <Link to="./Signup">Already have an account? Log in here</Link>  
 
 </form>
  
 
  
  </div>)
}
