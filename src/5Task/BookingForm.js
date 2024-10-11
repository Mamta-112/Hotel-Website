import React, { useState ,useEffect} from "react";
import { MdOtherHouses } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import "./BookingForm.css";
import Aos from 'aos';
import 'aos/dist/aos.css'

export const BookingForm = () => {
  useEffect(()=>{
    Aos.init();
  },[{ duraction:9000}])
  const [activeTab, setActiveTab] = useState("hotels");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    roomType: "",
    startDate: "",
    endDate: "",
    adult: "",
    child: "",
    rooms: "",
    nights: "",
  });

 
  const tabs = [
    { id: "hotels", title: "Book Hotel Rooms", backgroundColor: "lightgrey" },
    {
      id: "resorts",
      title: "Book Perfect Resorts",
      backgroundColor: "lightPink",
    },
    { id: "motels", title: "Book Exclusive Motels", backgroundColor: "gray" },
  ];

  // Handle input change.....................
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submission.................
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data: ", formData);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
  };

  return (
    <>
      <div className="BookingContainer"  data-aos="zoom-in-up">
      <h2
          style={{
            textAlign: "center",
            paddingTop: "30px",
            fontSize: "40px",
            marginTop: "0",
          }}
        >
          Booking Form
        </h2>
        <nav className="HouseLogo" data-aos="fade-right">
          <ol>
            <li>
              <MdOtherHouses />
            </li>
            <li>
              <IoIosArrowForward />
            </li>
            <li>Booking Form</li>
          </ol>
        </nav>
      </div>

      <div>
        <h2 style={{ textAlign: "center", paddingTop: "50px" }}  data-aos="flip-left">
          Book Any Accommodation With Minimalist Price And Comfortable
          Destinations
        </h2>
      </div>

      {/* Tabs Navigation .....................*/}
      <nav className="bookingTabs" data-aos="fade-right">
        <div className="navTabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`navlink ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.id.charAt(0).toUpperCase() + tab.id.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Tabs Content .................... */}
      <div className="product-tabs-content" data-aos="fade-right">
        {tabs.map((tab) => {
          if (activeTab === tab.id) {
            return (
              <div
                key={tab.id}
                className="tab-pane fade active show"
                role="tabpanel"
              >
                <div className="BookingForm">
                  <h2
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      marginBottom: "30px",
                      color: "#AD58EB",
                      fontSize: "30px",
                   }}
                  >
                    {tab.title}
                  </h2>
                </div>
                <form
                  className="FormContainer"
                  style={{ backgroundColor: tab.backgroundColor }}
                  onSubmit={handleFormSubmit}
                >
                  {/* Form Fields............. */}
                      
                     
                      <div className="animated-span"  >
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="animated-span"  >
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="animated-span"  >
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="animated-span"  >
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="animated-span"  >
                    <label>Rooms</label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option>Select A Room</option>
                      <option>Single Room</option>
                      <option>Double Room</option>
                    </select>
                  </div>
                  <div className="animated-span"  >
                    <label>Starting Date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="animated-span"  >
                    <label>Ending Date</label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="animated-span"  >
                    <label>Adult</label>
                    <input
                      type="number"
                      name="adult"
                      value={formData.adult}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="animated-span"  >
                    <label>Child</label>
                    <input
                      type="number"
                      name="child"
                      value={formData.child}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="animated-span"  >
                    <label>Rooms</label>
                    <select
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                  <div className="animated-span"  >
                    <label>Nights</label>
                    <select
                      name="nights"
                      value={formData.nights}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="animated-span"  >
                    <label>Rooms</label>
                    <select
                      name="room"
                      value={formData.room}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                  <span className="animated-span">
      <div className="BookNowBtn" style={{ width: '150px' }}>
        <FaPlusCircle />
        <button
          type="submit"
          style={{
            border: 'none',
            gap: '30px',
          }}
        >
          BOOK Now
        </button>
      </div>
    </span>
                </form>
                
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default BookingForm;
