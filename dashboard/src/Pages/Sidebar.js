import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import '../Pages/Sidebar.css';

function Sidebar() {

  function handleLogout() {
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    window.location.href = "/";
  }

function EmailorID(){
    if(localStorage = 'email'){

    }
    else if(localStorage = 'id'){

    };
}
  
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard" pointerEvents: storedData === 'id' ? 'none' : 'auto', opacity: storedData === 'id' ? '0.5' : '1>
            <HomeIcon /> Home
          </Link>
        </li>

        <li>
          <Link to="/addstudent" pointerEvents: storedData === 'id' ? 'none' : 'auto', opacity: storedData === 'id' ? '0.5' : '1>
            <PersonAddIcon /> Add Student
          </Link>
        </li>

        <li>
          <Link to="/viewstudent" pointerEvents: storedData === 'id' ? 'none' : 'auto', opacity: storedData === 'id' ? '0.5' : '1>
            <PersonOutlineIcon /> View Student
          </Link>
        </li>

        <li>
          <Link to="/viewusers" pointerEvents: storedData === 'id' ? 'none' : 'auto', opacity: storedData === 'id' ? '0.5' : '1>
            <AccountBoxIcon /> View Users
          </Link>
        </li>

        <li>
          <Link to="/managestudent" pointerEvents: storedData === 'id' ? 'none' : 'auto', opacity: storedData === 'id' ? '0.5' : '1>
            <GroupIcon /> Manage Student
          </Link>
        </li>

        <li className="logout" onClick={handleLogout}>
        <Link to="/dashboard">
        <span><LogoutIcon /></span> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

