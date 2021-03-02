import React from "react";
import classes from "./Calender.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Calender() {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <h4>October,2020</h4>
        <div>
          <button className={classes.btn}>
            <FaArrowLeft className={classes.arrow} />
          </button>
          <button className={classes.btn}>
            <FaArrowRight className={classes.arrow} />
          </button>
        </div>
      </div>
      <div className={classes.range}>
        <div className={classes.range_main}>
          <div>
            <p>From</p>
            <p>15.10.20</p>
          </div>
          <p>X</p>
        </div>
        <div className={classes.range_main}>
          <div>
            <p>From</p>
            <p>15.10.20</p>
          </div>
          <p>X</p>
        </div>
      </div>
      <div className={classes.calender}>
        <p className={classes.head}>SU</p>
        <p className={classes.head}>MO</p>
        <p className={classes.head}>TU</p>
        <p className={classes.head}>WE</p>
        <p className={classes.head}>TH</p>
        <p className={classes.head}>FR</p>
        <p className={classes.head}>SA</p>
        <p className={classes.inactive}>28</p>
        <p className={classes.inactive}>29</p>
        <p className={classes.inactive}>30</p>
        <p className={classes.item}>1</p>
        <p className={classes.item}>2</p>
        <p className={classes.item}>3</p>
        <p className={classes.item}>4</p>
        <p className={classes.item}>5</p>
        <p className={classes.item}>6</p>
        <p className={classes.blue}>7</p>
        <p className={classes.item}>8</p>
        <p className={classes.item}>9</p>
        <p className={classes.item}>10</p>
        <p className={classes.item}>11</p>
        <p className={classes.item}>12</p>
        <p className={classes.item}>13</p>
        <p className={classes.item}>14</p>
        <p className={classes.yellow}>15</p>
        <p className={classes.item}>16</p>
        <p className={classes.item}>17</p>
        <p className={classes.item}>18</p>
        <p className={classes.item}>19</p>
        <p className={classes.item}>20</p>
        <p className={classes.item}>21</p>
        <p className={classes.item}>22</p>
        <p className={classes.item}>23</p>
        <p className={classes.item}>24</p>
        <p className={classes.item}>25</p>
        <p className={classes.item}>26</p>
        <p className={classes.item}>27</p>
        <p className={classes.item}>28</p>
        <p className={classes.item}>29</p>
        <p className={classes.item}>30</p>
        <p className={classes.item}>31</p>
        <p className={classes.item}>1</p>
      </div>
    </div>
  );
}

export default Calender;
