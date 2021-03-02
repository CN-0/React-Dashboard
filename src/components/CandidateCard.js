import React from "react";
import classes from "../index.css";
import image from "../assets/images/user.jpg";
import { BsThreeDots } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

function CandidateCard(props) {
  return (
    <div>
      <div className={classes.row}>
        <div className={classes.person}>
          <img src={image} alt="image1" className={classes.img} />
          <p className={classes.name}>{props.name}</p>
        </div>
        <p className={[classes.designation, classes[props.color]].join(" ")}>
          {props.designation}
        </p>
        <div className={classes.person}>
          <BsDot
            className={[classes.dot, classes[props.color + "dot"]].join(" ")}
          />
          <p className={classes.status}>{props.status}</p>
        </div>
        <BsThreeDots className={classes.threedots} />
      </div>
    </div>
  );
}

export default CandidateCard;
