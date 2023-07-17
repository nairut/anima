import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <form name="contact" method="post" action="/contact">
          <input type="hidden" name="form-name" value="contact" />
            <input type="text" className="name" placeholder="Enter your name" />
            <button className="group group-2" type="submit">
              <div className="talk-to-an-expert">TALK TO AN EXPERT</div>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};


<button type="submit"></button>