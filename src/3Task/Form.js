import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

export const Form = () => {
  const [formState, setFormState] = useState({
    memberId: '',
    mrName: '',
    wifeName: '',
    anniversaryDate: '',
    birthDate: '',
    businessProfile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(' https://phpstack-1002300-4891440.cloudwaysapps.com/api/create', formState);
      console.log('Form data submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container">
      <img className='logo-image' src="/image 14.png" alt='logo' />
      <h2>Loins Club</h2>
      <form className="inputName" onSubmit={handleSubmit}>
        <label>
          Member ID:
          <input
            type='tel'
            name='memberId'
            className="inputTask"
            value={formState.memberId}
            onChange={handleChange}
          />
        </label><br /><br />
        <label>
          Mr.:
          <input
            type='text'
            name='mrName'
            className="inputTask"
            value={formState.mrName}
            onChange={handleChange}
          />
        </label><br /><br />
        <label>
          Wife Name:
          <input
            type='text'
            name='wifeName'
            className="inputTask"
            value={formState.wifeName}
            onChange={handleChange}
          />
        </label><br /><br />
        <label>
          Date of Anniversary:
          <input
            type='date'
            name='anniversaryDate'
            className="inputTask"
            value={formState.anniversaryDate}
            onChange={handleChange}
          />
        </label><br /><br />
        <label>
          Date of Birth:
          <input
            type='date'
            name='birthDate'
            className="inputTask"
            value={formState.birthDate}
            onChange={handleChange}
          />
        </label><br /><br />
        <label>
          Business Profile:
          <input
            type='text'
            name='businessProfile'
            className="inputTask"
            value={formState.businessProfile}
            onChange={handleChange}
          />
        </label><br /><br />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};


// import React from 'react'
// import './Signup.css';
// import Link from 'react/link'
// export const Signup = () => {
//     const handleSubmit = (e) => {
//         setSubmit(e.target.value);
//         setError((prevErrors) => ({ ...prevErrors, email: "" }));
//       };
//   return (
//     <div>
//         <div >
//             <h1 className='Container'>signup</h1>
//             </div>
//      <form  onSubmit={handleSubmit}>
//     <label>
//         Name:
//         <input type='text'  name='Name'  className="inputtext"/>
//     </label>
//     <label>
//         email:
//         <input type='text'  name='Email'  className="inputtext"/>
//     </label>

//     <label>
//         mobileNo:
//         <input type='tel' name='MobileNo' className="inputtext"/>
//     </label>
 
//     <label>
//         PassWord:
//         <input type='tel' name='Password' className="inputtext"/>
//     </label>
//     <label>
//         Confirm-PassWord:
//         <input type='tel' name='Password' className="inputtext"/>
//     </label>
 
//     <button type="submit" className="btn"  >Sign up</button>
 
//  </form>
//  <Link href="/login"></Link>


//     </div>
//   )
// }
