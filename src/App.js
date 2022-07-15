import React, {Fragment, useEffect, useState} from 'react';
import Navbar from './Components/Header';
import Users from './Components/Users';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = () => {
      fetch('http://localhost:8080/api/users')
      .then(res => res.json())
      .then(res => setUsers(res))
    }
    getUsers()
  }, [])

  return (
    <Fragment>
      <Navbar brand='Clinic app' />

      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAlign: 'center'}}>
              Users list
            </h2>        
            <Users users={users}/>
          </div>
          <div className='col-5'> 
            <h2 style={{textAlign: 'center'}}>
              Users form
            </h2>    

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
