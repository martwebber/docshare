import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return( 
   <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add-document">Add New Document</NavLink>
    </div>
);
};

export default NavBar;