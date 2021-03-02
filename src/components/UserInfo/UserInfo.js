import React from "react";
import classes from "./UserInfo.css";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import User from "../../assets/images/user.jpg";

function UserInfo() {
  return (
    <div className={classes.main}>
      <img className={classes.img} src={User} alt="user" />
      <h3>Mr Smith</h3>
      <p className={classes.title}>Sr. HR Manager</p>
      <div className={classes.contact}>
        <div className={classes.wrapper}>
          <IoMdCall className={classes.icon} />
        </div>
        <div className={classes.wrapper}>
          <IoMdMail className={classes.icon} />
        </div>
        <div className={classes.wrapper}>
          <RiMessage2Fill className={classes.icon} />
        </div>
      </div>
      <div className={classes.row}>
        <h5>Company</h5>
        <p className={classes.para}>FoxHR Pvt Ltd.</p>
      </div>
      <div className={classes.row}>
        <h5>Joining Date</h5>
        <p className={classes.para}>01/01/18</p>
      </div>
      <div className={classes.row}>
        <h5>Projects</h5>
        <p className={classes.para}>34 Active</p>
      </div>
    </div>
  );
}

export default UserInfo;
