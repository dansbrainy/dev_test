import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import MessageBox from "../components/MessageBox";
// import LoadingBox from "../components/LoadingBox";

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        <nav>
          <NavLink className="nav-item" to="">sports</NavLink>
          <NavLink className="nav-item" to="">live & real</NavLink>
          <NavLink className="nav-item" to="">casino</NavLink>
          <NavLink className="nav-item" to="">esports</NavLink>
          <NavLink className="nav-item" to="">vegas</NavLink>
        </nav>
        
      </div>
    </div>
  );
}
