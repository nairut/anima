import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <input className="name" />

          <form name="contact" method="post" action="/contact">
          <input type="hidden" name="form-name" value="contact" />
            <input type="text" className="name" placeholder="Enter your name" />
            <button type="submit" class="talk-to-an-expert">
  O que será isso?</button>
          </form>

        </div>
        
      </div>
    </div>
  );
};
