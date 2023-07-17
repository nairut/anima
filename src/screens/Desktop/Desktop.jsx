import React from "react";
import { Lady } from "../../components/Lady";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">

      <form name="contact" method="post" action="/contact">
        <input type="hidden" name="form-name" value="contact" /> 

        <div className="overlap">
          <div className="rectangle" />
          <input type="text" name="name" className="name" placeholder="Enter your name" />
        </div>


        <button className="desktop" type="submit">
        <div className="overlap-group">
          <div className="talk-to-an-expert">TALK TO AN EXPERT</div>
          </button>




          </form> 
        </div>
        <Lady className="lady-instance" />
      </div>
    </div>
  );
};

