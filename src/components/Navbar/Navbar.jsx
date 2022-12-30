//Libs
import React from "react";
import { NavLink } from "react-router-dom";
//Styles
import styles from './Navbar.module.css'

const Navbar = () => {

  return(
  <div className={styles.navbar}>
    <h2>Gabriela's Blog</h2>

    <div className={styles.navbar___list}>
      <ul>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/createPost">Write a Story</NavLink>
        </li>
      </ul>
    </div>
  </div>
)
}

export default Navbar;