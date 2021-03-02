import React from "react";
import classes from "./Sidebar.css";
import titleImage from "../../assets/images/title-icon.png";
import { RiDashboardLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import bannerImage from "../../assets/images/work.jpg";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.icon}>
        <img className={classes.titleImg} src={titleImage} alt="title-img" />
        <h2 className={classes.title}>TwitHR</h2>
      </div>
      <nav className={classes.navbar}>
        <ul className={classes.nav_list}>
          <li className={[classes.nav_list_item, classes.active].join(" ")}>
            <RiDashboardLine className={classes.icon_svg} />
            Dashboard
          </li>
          <li className={classes.nav_list_item}>
            <BsPeople className={classes.icon_svg} />
            Recruitment
          </li>
          <li className={classes.nav_list_item}>
            <BsClipboardData className={classes.icon_svg} />
            Onboarding
          </li>
          <li className={classes.nav_list_item}>
            <AiOutlinePieChart className={classes.icon_svg} />
            Reports
          </li>
          <li className={classes.nav_list_item}>
            <IoCalendarOutline className={classes.icon_svg} />
            Calender
          </li>
          <li className={classes.nav_list_item}>
            <IoSettingsOutline className={classes.icon_svg} /> Settings
          </li>
        </ul>
      </nav>
      <div className={classes.bottom_banner}>
        <p className={classes.bottom_banner_text}>
          Use our Premium Features Now
        </p>
        <img src={bannerImage} className={classes.bannerImage} alt={"work"} />
      </div>
    </div>
  );
}

export default Sidebar;
