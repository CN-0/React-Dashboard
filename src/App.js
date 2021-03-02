import React from "react";
import Calender from "./components/Calender/Calender";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import UserInfo from "./components/UserInfo/UserInfo";
import classes from "./index.css";
import CandidateCard from "./components/CandidateCard";

function App() {
  return (
    <div className={classes.main}>
      <Sidebar />
      <div className={classes.dashboard}>
        <Navbar />
        <div className={classes.content}>
          <div className={classes.welcome}>
            <div className={classes.task}>
              <div className={classes.left_task}>
                <h3>Hello Mr Smith</h3>
                <p>Today you have 9 applications</p>
                <p>Also you need to hire ROR developer, React JS Developer</p>
                <button className={classes.btn_orange}>Read more</button>
              </div>
              <div className={classes.bannerImg}></div>
            </div>
            <div className={classes.recruit}>
              <h3>Recruitment Progress</h3>
              <button className={classes.btn}>View All</button>
            </div>
            <div className={classes.head}>
              <h4>Full Name</h4>
              <h4 className={classes.des}>Designation</h4>
              <h4 className={classes.sta}>Status</h4>
            </div>
            <CandidateCard
              name="Jimmy C Wilson"
              designation="React JS Developer"
              status="Resume Review"
              color="red"
            />
            <CandidateCard
              name="Vivian J Joseph"
              designation="Node JS Developer"
              status="Final Interview"
              color="orange"
            />
            <CandidateCard
              name="Jimmy Neesham"
              designation="Software Developer"
              status="Fianl Task Status"
              color="blue"
            />
            <CandidateCard
              name="Marie G Shulke"
              designation="Projects Manager"
              status="Tech Interview"
              color="green"
            />
          </div>
          <div className={classes.info}>
            <Calender />
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
