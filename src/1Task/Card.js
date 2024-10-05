import logo from './logo.svg';
import './Card.css';
import { useState } from 'react';

function Card() {
   const[data,setData]=useState([1,2,3,4,5,6,7,8])
  const Card=()=>{
  return(
    <div className='card'>
    <img  className='card-image' src="/description.svg" alt='moyo'/>
    <h1 className='card-name'>Crative</h1>
    <p className='card-description'>One Liner Description</p>
  </div>
  
  )}
  return (<div>
{
  data.map((item,index)=>{
    return(
     <Card/>
    )
  })
}
  </div>
   
  );
}

export default Card;
