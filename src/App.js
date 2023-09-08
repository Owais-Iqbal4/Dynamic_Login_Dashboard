import './App.css';
import Login from './Views/Login/Login';
import Dashboard from './Views/Dashboard/Dashboard';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(false)
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
    profileImg: ""
  })
  console.log('user data: ', userData)
  return (
    <div >
      {
        user ?
          <Dashboard userData = {userData} />
          :
          <Login setUser={setUser} setUserData={setUserData} />
      }
    </div>
  );
}

export default App;
