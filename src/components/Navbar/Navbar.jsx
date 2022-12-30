//Libs
import React from "react";
import { Link } from "react-router-dom";
//Styles
import styles from './Navbar.module.css'

const Navbar = () => {

  return(
  <div className={styles.navbar}>
    <h2>Gabriela's Blog</h2>

    <div className={styles.navbar___list}>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/createPost">Write a Story</Link>
        </li>
      </ul>
    </div>
  </div>
)
}

export default Navbar;