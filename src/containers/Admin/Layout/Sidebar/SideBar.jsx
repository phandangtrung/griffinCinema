import './sidebar.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Movie,
} from '@mui/icons-material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../../Auth/authSlice";

export default function SideBar() {
 const dispatch = useDispatch()
 const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout());
    
      navigate('/auth');
  
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/admin/dashboard" className={ "link sidebarListItem"} activeClassName="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              DashBoard
            </NavLink>
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink to="/admin/users" className="link sidebarListItem"  activeClassName="sidebarListItem active">
              <PermIdentity className="sidebarIcon" />
              Users
            </NavLink>
            <NavLink to="/admin/movies" className="link sidebarListItem"   activeClassName="sidebarListItem active">
              <Movie className="sidebarIcon" />
              Movies
            </NavLink>
            {/* <Button onClick={handleLogout}>Đăng Xuất</Button> */}
            {/* <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
