import React from 'react';
import './Home.css';
import { FaStar } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import {  BsWifi} from "react-icons/bs";
import { LuBath } from "react-icons/lu";

import { FaPlus } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

export const Home = () => {
  
  const rooms = [
    {
      id: 1,
      image: '/homePage/room1.jpg',
      price: '$100 / Night',
      name: 'Single Room  ',
      beds: '3 Bed |',
      bath: '2 Bath |',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    },
    {
      id: 2,
      image: '/homePage/room2.jpg',
      price: '$150 / Night',
      name: 'Double Room ',
      beds: '2 Bed |',
      bath: '2 Bath |',
     description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    },
    {
        id: 3,
        image: '/homePage/room3.jpg',
        price: '$150 / Night',
        name: 'Triple Room ',
        beds: '2 Bed |',
        bath: '1 Bath |',
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      },
      {
        id: 4,
        image: '/homePage/room4.jpg',
        price: '$150 / Night',
        name: 'Quad Room ',
        beds: '3 Bed |',
        bath: '2 Bath |',
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      },

      {
        id: 5,
        image: '/homePage/room5.jpg',
        price: '$150 / Night',
        name: 'Queen Room ',
        beds: '2 Bed |',
        bath: '2 Bath |',
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      },
      {
        id: 6,
        image: '/homePage/room6.jpg',
        price: '$140 / Night',
        name: 'King Room ',
        beds: '2 Bed |',
        bath: '1 Bath |',
       description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      },
      {
        id: 7,
        image: '/homePage/room7.jpg',
        price: '$100 / Night',
        name: 'Twin Room ',
        beds: '3 Bed |',
        bath: '2 Bath |',
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      },
      {
        id: 8,
        image: '/homePage/room8.jpg',
        price: '$130 / Night',
        name: 'Studio Room',
        beds: '2 Bed |',
        bath: '2 Bath |',
       description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      },
      {
        id: 9,
        image: '/homePage/room9.jpg',
        price: '$130 / Night',
        name: 'Standard Room ',
        beds: '2 Bed |',
        bath: '1 Bath |',
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      },
      {
        id: 10,
        image: '/homePage/room10.jpg',
        price: '$100 / Night',
        name: 'Deluxe Room',
        beds: '3 Bed |',
        bath: '2 Bath |',
        description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      },
      {
        id: 11,
        image: '/homePage/room11.jpg',
        price: '$120 / Night',
        name: 'Superior Suite',
        beds: '2 Bed |',
        bath: '2 Bath |',
       description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      },
      {
        id: 12,
        image: '/homePage/room12.jpg',
        price: '$140 / Night',
        name: 'Superior Suite',
        beds: '2 Bed |',
        bath: '1 Bath |',
       description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
      },
    
  ];
  const feedbackData = [
  {
    name: "Andrew Smith",
    title: "Motivational Speaker",
    image: "/homePage/testimonial1.png",
    rating: 5.0,
  },
  {
    name: "Jane Ronan",
    title: "Insurance Expert",
    image: "/homePage/testimonial2.png",
    rating: 5.0,
  },
  {
    name: "Jenin Pamela",
    title: "Social Influencer",
    image: "/homePage/testimonial3.png",
     rating: 5.0,
  },
  {
    name: "Daisy Lucy",
    title: "Graphics Designer",
    image: "/homePage/testimonial4.png",
    rating: 5.0,
  },
  {
    name: "Taylor Sopia",
    title: "Digital Marketer",
    image: "/homePage/testimonial5.png",
    rating: 5.0,
  },
  {
    name: "John Doe",
    title: "Banker",
    image: "/homePage/testimonial6.png",
    rating: 5.0,
  },
  ];
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
  const blogMembers = [
    {
      tag: 'Europe',
      text: 'A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.',
      imgSrc: '/homePage/blog1.jpg',
    },
    {
      tag: 'IreLend',
      text: 'The Importance of an Integrated Booking Engine in a Hotel’s Direct Booking.',
      imgSrc: '/homePage/blog2.jpg',
    },
    {
      tag: 'Dubai',
      text: 'How H10 Hotels grew their marketing database by capturing first-party data?',
      imgSrc: '/homePage/blog3.jpg',
    },
    {
      tag: 'New York',
      text: 'How H10 Hotels grew their marketing database by capturing first-party data?',
      imgSrc: '/homePage/blog4.jpg',
    },
    {
      tag: 'Singapore',
      text: 'How Penta Hotels Tripled Their Survey Answers Using Form Builder?',
      imgSrc: '/homePage/blog5.jpg',
    },
    {
      tag: 'Australia',
      text:'Inside Palacio Estoril: Combining Historical Charm with Cutting-Edge Hospitality.',
      imgSrc: '/homePage/blog6.jpg',
    },
 
  ]
  return (
    <div>
      <div className='ImageContainer'>
         <div className='textContainer'>
          <h2>Welcome To Our Motel </h2>
          <h1>Where friends and family will always feel at home!</h1>
          <button className='btn'>Contact Us</button>
        </div>
      </div>

      {/* searchBox......................................... */}
      <div className='searchBox'>
        <div className='dateInputs'>
          <input type='text' placeholder='Check In' />
          <input type='text' placeholder='Check Out' />
        </div>
        <br />
        <div className='selectInputs'>
          <select>
            <option selected>Adults</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select>
            <option selected>Childs</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select>
            <option selected>Rooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <br />
        <div>
          <button className='searchBtn'>Search</button>
        </div>
      </div>
      {/* Explore Our Rooms  (Grid Style) ............................. */}
      <div className='gridContainer'>
        <h2>Explore Our Rooms (Grid Style)</h2>
        <p className='paragrapRooms'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis<br/> ipsum suspendisse ultrices gravida.</p>
      </div>
       <div className='cardgridContainer'>
        {rooms.map((room) => (
          <div key={room.id} className='gridCard'>
            <img src={room.image} alt="rooms" width={300} height={250} />
            <button className='gridpriceBtn'>{room.price}</button>
            <h5  className="gridroomName">{room.name} 
                <span className="gridstars">
                <FaStar style={{ color: 'gold' }}  /><FaStar style={{ color: 'gold' }} /><FaStar style={{ color: 'gold' }}  /><FaStar style={{ color: 'gold' }}  /><FaStar  style={{ color: 'gold' }} />
                </span>
                </h5>
            <div className="gridroomDetails" style={{ padding: '.5rem'}}>
              <span><FaBed style={{ color: 'blue' }} />{room.beds}</span>
              <span><LuBath style={{ color: 'blue' }}/>{room.bath}</span>
              <span><BsWifi style={{ color: 'blue' }}/>wifi</span>
            </div>
            <p style={{ padding: '.5rem'}}>{room.description}</p>
            <div >
              <button style={{ backgroundColor: 'blueviolet' ,marginLeft:'1.8rem' }}>View Details</button>
              <button style={{ backgroundColor: 'black' ,marginLeft:'6rem' }}>Book Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Our Rooms (Slider Style)..................... */}

      <div className='SliderroomsContainer'>
        <h2>Explore Our Rooms (Slider Style)</h2>
        <p className='paragrapRooms'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis<br/> ipsum suspendisse ultrices gravida.</p>
      </div>
      <div className="SliderroomsContainer">
      <div className="SliderscrollWrapper">
        {rooms.map((room) => (
          <div key={room.id} className="SliderroomCard">
            <img src={room.image} alt={room.name} />
            <button className="SliderpriceBtn">{room.price}</button>
            <h5 className="SliderroomName">
              {room.name}
              <span className="sliderstars">
                <FaStar style={{ color: 'gold' }} />
                <FaStar style={{ color: 'gold' }} />
                <FaStar style={{ color: 'gold' }} />
                <FaStar style={{ color: 'gold' }} />
                <FaStar style={{ color: 'gold' }} />
              </span>
            </h5>
            <div className="SliderroomDetails">
              <span><FaBed style={{ color: 'blue' }} /> {room.beds}</span>
              <span><LuBath style={{ color: 'blue' }} /> {room.bath}</span>
              <span><BsWifi style={{ color: 'blue' }} /> Wifi</span>
            </div>
            <p>{room.description}</p>
            <div className="SlideractionButtons">
              <button className="SliderviewBtn">View Details</button>
              <button className="SliderbookBtn"  >Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Frequently Asked Questions................................. */}
      <div className='FrequentlyContainer'>
        <h2>Frequently Asked Questions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
      </div>
     <div class="container">
  <div class="column">
    <ul>
      <li>
        <details class="Quection"> 
          <summary>01. What do we mean by business? <FaPlus style={{ color: 'black' }} /></summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel
                 officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.
                  Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis
                   ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam
                    laboriosam autem aperiam distinctio fugiat.</p>
        </details>
      </li>
      <li>
        <details class="Quection"> 
          <summary>02. What are the positive aspects of business? <FaPlus  style={{ color: 'black' }} /></summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel
                 officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.
                  Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis
                   ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam
                    laboriosam autem aperiam distinctio fugiat.</p>
        </details>
      </li>
      <li>
        <details class="Quection"> 
          <summary>03. What are the negative aspects of business? <FaPlus  style={{ color: 'black' }} /></summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel
                 officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.
                  Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis
                   ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam
                    laboriosam autem aperiam distinctio fugiat.</p>
        </details>
      </li>
      <li>
        <details class="Quection"> 
          <summary>04. What is the way to grow a business? <FaPlus  style={{ color: 'black' }} /></summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel
                 officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.
                  Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis
                   ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam
                    laboriosam autem aperiam distinctio fugiat.</p>
        </details>
      </li>
    </ul>
  </div>
  
  <div class="column">
    <ul>
      <li>
        <details class="Quection"> 
          <summary>05. Where should my business be involved? <FaPlus style={{ color: 'black' }}  /></summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel
                 officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.
                  Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis
                   ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam
                    laboriosam autem aperiam distinctio fugiat.</p>
        </details>
      </li>
      <li>
        <details class="Quection"> 
          <summary>06. How much money can be used to start a business? <FaPlus style={{ color: 'black' }}  /></summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel
                 officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.
                  Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis
                   ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam
                    laboriosam autem aperiam distinctio fugiat.</p>
        </details>
      </li>
      <li>
        <details class="Quection"> 
          <summary>07. What are the benefits to business customers? <FaPlus  style={{ color: 'black' }} /></summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel
                 officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.
                  Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis
                   ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam
                    laboriosam autem aperiam distinctio fugiat.</p>
        </details>
      </li>
      <li>
        <details class="Quection"> 
          <summary>08. Ten easy rules to expand your business. <FaPlus  style={{ color: 'black' }} /></summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel
                 officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.
                  Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis
                   ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam
                    laboriosam autem aperiam distinctio fugiat.</p>
        </details>
      </li>
      <li>
        <details class="Quection"> 
          <summary>09. How do I highlight in the name of the business? <FaPlus  style={{ color: 'black' }} /></summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel
                 officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.
                  Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis
                   ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam
                    laboriosam autem aperiam distinctio fugiat.</p>
        </details>
      </li>
      <li>
        <details class="Quection"> 
          <summary>10. How do I analyze the promotion of the business? <FaPlus style={{ color: 'black' }} /></summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel
                 officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.
                  Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis
                   ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam
                    laboriosam autem aperiam distinctio fugiat.</p>
        </details>
      </li>
    </ul>
  </div>
</div>

{/* Clients Feedback............... */}
<div className="clientContainer">
<h2>Our Clients Feedback</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
</div>
<div className="feedbackContainer">
      <div className="scrollWrapper">
        {feedbackData.map((feedback, index) => (

          <div className="cardFeedback" key={index}>
          <div className="cardtextFeedback">  <span className="feedbackCards">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} style={{ color: "gold" }} />
              ))}{" "}
              (5.0)
            </span>
            <p   style={{ fontSize: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
            <div className="feedbackImage">
              <img src={feedback.image} alt={feedback.name} />
              <h3>{feedback.name}</h3>
              <span>{feedback.title}</span>
            </div>
            </div>
        ))}
      </div>
    </div>
    {/* Our Team....................... */}
    <div className="clientContainer">
<h2> Our Team</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
</div>
    <div className='OurTeamContainer'>
      {teamMembers.map((member, index) => (
        <div key={index} className='TeamCardContainer'>
          <div className='TeamImage'>
            <img src={member.imgSrc} alt={member.name} />
            <span className='icon'>
              <IoShareSocialSharp />
            </span>
          </div>
          <div className='teamName'>
            <h3>{member.name}</h3>
            <span>{member.title}</span>
          </div>
        </div>
      ))}
    </div>
    {/* OurBlogContainer............... */}
    <div className="clientContainer">
<h2>Our Latest Blog</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
</div>
<div className='OurBlogContainer'>
      {blogMembers.map((member, index) => (
        <div key={index} className='BlogCardContainer'>
          <div className='BlogImage'>
            <img src={member.imgSrc} alt={member.name} />
            </div>
            <div className='Blogicon'>
            <span >
              {member.tag}
             </span> 
            </div>
          <div className='BlogName'>
            <p>{member.text}</p>
             <a href="blog-details-right-sidebar.html" target="_blank" rel="icon">Read <FaArrowRight /></a>
             
          </div>
        </div>
      ))}
    </div>

    </div>
  );
};
