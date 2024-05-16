import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import '../Pages/Sidebar.css';

function Sidebar() {
  const location = useLocation();

  function handleLogout() {
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    window.location.href = "/";
  }

  function isStudentPage() {
    return location.pathname === '/Student';
  }

  return (
    <div className="sidebar">
      <ul>
        <li className={isStudentPage() ? "disabled-link" : ""}>
          <Link to="/dashboard">
            <HomeIcon /> Home
          </Link>
        </li>
        <li className={isStudentPage() ? "disabled-link" : ""}>
          <Link to="/addstudent">
            <PersonAddIcon /> Add Student
          </Link>
        </li>
        <li className={isStudentPage() ? "disabled-link" : ""}>
          <Link to="/viewstudent">
            <PersonOutlineIcon /> View Student
          </Link>
        </li>
        <li className={isStudentPage() ? "disabled-link" : ""}>
          <Link to="/viewusers">
            <AccountBoxIcon /> View Users
          </Link>
        </li>
        <li className={isStudentPage() ? "disabled-link" : ""}>
          <Link to="/managestudent">
            <GroupIcon /> Manage Student
          </Link>
        </li>
        <li className="logout" onClick={handleLogout}>
          <Link to="#">
            <span><LogoutIcon /></span> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
