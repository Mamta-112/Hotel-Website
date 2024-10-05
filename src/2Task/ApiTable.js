import React, { useEffect, useState } from 'react';
import "./ApiTable.css";

const API = "https://jsonplaceholder.typicode.com/users";

export const ApiTable = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {  // Corrected the typo from "lenght" to "length"
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th> {/* Remove the duplicate Address column */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => { // Use 'user' instead of 'id'
            const { id, name, email } = user;
            const { street, city, zipcode } = user.address; // Correctly destructure address
            return (
              <tr key={id}> {/* Use id as key for uniqueness */}
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{`${street}, ${city}, ${zipcode}`}</td> 
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
