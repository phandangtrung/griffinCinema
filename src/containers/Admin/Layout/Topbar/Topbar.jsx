import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate, useNavigate } from 'react-router-dom';

import { logout } from "../../../Auth/authSlice";


import { useSelector, useDispatch } from 'react-redux';
export default function Topbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout());
    
      navigate('/auth');
  
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo" onClick={() => { navigate("/admin") }}>Griffin Admin</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}

          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          <div onClick={() => handleLogout()} className="topbarIconContainer">
            <LogoutIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
