import { useEffect, useState } from 'react';
import axios from 'axios';

export const ApiEdit=()=> {
  const [empData, setEmpData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resData = await axios.get('https://reqres.in/api/users')
    setEmpData(resData.data.data)
  }

  const createUser = async () => {
    const responseData = await axios.post('https://reqres.in/api/users', {
      'name': name,
      'job': job
    });
    setIsOpen(false);
  }

  const deleteUser = async (id) => {
    const responseData = await axios.delete('https://reqres.in/api/users/' + id);
  }

  return (
    <>
      <button onClick={() => {
        setIsOpen(true);
      }}>Create User</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  {item.id}
                </td>
                <td>
                  {item.first_name}
                </td>
                <td>
                  {item.last_name}
                </td>
                <td>
                  {item.email}
                </td>
                <td>
                  {item.avatar}
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <button>Edit</button>
                    <button onClick={() => {
                      deleteUser(item.id)
                    }}>Delete</button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <dialog open={isOpen}>
        <div>
          <div>
            <label>Name</label>
            <input type='text' name='name' value={name} onChange={(e) => {
              setName(e.target.value)
            }} />
          </div>

          <div>
            <label>Job</label>
            <input type='text' name='job' value={job} onChange={(e) => {
              setJob(e.target.value)
            }} />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button onClick={createUser}>Submit</button>
            <button onClick={() => {
              setIsOpen(false)
            }}>Cancel</button>
          </div>
        </div>
      </dialog>
    </>
  );
}

