import React from "react";
import "./topbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";

export default function Topbar() {

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    localStorage.clear();
    e.preventDefault();
    dispatch(logout());
    
  }


  return (
    
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">B/M admin</span>
        </div>
        <div className="topRight">
         <a onClick={(e) => handleLogout(e)} href="/login"  className="logout">LOGOUT</a>
    
        </div>
      </div>
    </div>
  );
}


