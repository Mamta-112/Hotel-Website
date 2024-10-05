import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom'; 
// import React, { useState } from 'react';

export const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 

  };

  return (
    <div className='Container'>
      <div>
        <h1 >Signup</h1>
      </div>
      <form onSubmit={handleSubmit}> 
        <label>
          Name:
          <input type='text' name='Name' className="inputtext" />
        </label>
        <br></br> <br></br>
        <label>
          Email:
          <input type='text' name='Email' className="inputtext" />
        </label>
        <br></br> <br></br>
        <label>
          Mobile No:
          <input type='tel' name='number' className="inputtext" />
        </label>
        <br></br> <br></br>
        <label>
          Password:
          <input type='password' name='Password' className="inputtext" />
        </label>
        <br></br> <br></br>
        <label>
          Confirm Password:
          <input type='password' name='ConfirmPassword' className="inputtext" /> 
        </label>
        <br></br> <br></br>
        <button type="submit" className="btn">Sign up</button>
        <br></br> <br></br>
        <Link to="./Login">Already have an account? Log in here</Link> 
      </form>
      <br></br>
      
    </div>
  );
};
