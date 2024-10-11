 import React, { useState } from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import './Home.css';

const TeamMemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };
  const teamMembers = [
    {
      name: 'John Smith',
      title: 'Hotel Manager',
      imgSrc: '/homePage/team1.jpg',
    },
    {
      name: 'Amily Mark',
      title: 'Hotel Receptionist',
      imgSrc: '/homePage/team2.jpg',
    },
    {
      name: 'Lucy Eva',
      title: 'Concierge',
      imgSrc: '/homePage/team3.jpg',
    },
    {
      name: 'John Smith',
      title: 'Hotel Manager',
      imgSrc: '/homePage/team4.jpg',
    },
    {
      name: 'Jammy Haris',
      title: 'HR Manager',
      imgSrc: '/homePage/team5.jpg',
    },
    {
      name: 'Taylor Sopia',
      title: 'IT Manager',
      imgSrc: '/homePage/team6.jpg',
    },
    {
      name: 'Harry Steve',
      title: 'Accounting Manager',
      imgSrc: '/homePage/team7.jpg',
    },
    {
      name: 'Sarah Taylor',
      title: 'Security Manager',
      imgSrc: '/homePage/team8.jpg',
    },
  ];
  return (
    <div 
      className='TeamCardContainer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='TeamImage' >
        <img src={member.imgSrc} alt={member.name} />
        <ul className={`icon ${isHovered ? 'visible' : ''}`} >
          {isHovered ? (
            <>
              <a 
                href="#"
                className={ `facebook ${activeIcon === 'facebook' ? 'active' : ''} `}
                onClick={() => handleIconClick('facebook')}
              >
                <li className="facebook"><TiSocialFacebook /></li>
              </a>
              <a 
                href="#"
                className={`twitter ${activeIcon === 'twitter' ? 'active' : ''}`}
                onClick={() => handleIconClick('twitter')}
              >
                <li className="facebook"><FaXTwitter /></li>
              </a>
              <a 
                href="#"
                className={`instagram ${activeIcon === 'instagram' ? 'active' : ''}`}
                onClick={() => handleIconClick('instagram')}
              >
                <li className="facebook"><FaInstagramSquare /></li>
              </a>
              <a 
                href="#"
                className={`linkedin ${activeIcon === 'linkedin' ? 'active' : ''}`}
                onClick={() => handleIconClick('linkedin')}
              >
                <li className="facebook"><FaLinkedin /></li>
              </a>
            </>
          ) :
           (
            <a 
              href="#"
              className={`share ${activeIcon === 'share' ? 'active' : ''}`}
              onClick={() => handleIconClick('share')}
            >
              </a>
          )
          }
        </ul>
        <span className="IoShareSocialSharp"><IoShareSocialSharp /></span>
      </div>
      <div className='teamName'>
   
        <h3>{member.name}</h3>
        <span>{member.title}</span>
        
      </div>
    </div>
  );
};

export default TeamMemberCard;
 
