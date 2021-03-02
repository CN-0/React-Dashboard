import React from "react";
import user from "../../assets/images/user.jpg";
import classes from "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { VscBellDot } from "react-icons/vsc";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <h3 className={classes.title}>Dashboard</h3>
      <div className={classes.main}>
        <ul className={classes.nav_list}>
          <li className={classes.nav_list_item}>
            <FiSearch className={classes.icon} />
          </li>
          <li className={classes.nav_list_item}>
            <FiMail className={classes.icon} />
          </li>
          <li className={classes.nav_list_item}>
            <VscBellDot className={classes.icon} />
          </li>
        </ul>
        <div className={classes.user}>
          <h className={classes.name}>Mr Smith</h>
          <div className={classes.userImage}>
            <img className={classes.image} src={user} alt="user" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
