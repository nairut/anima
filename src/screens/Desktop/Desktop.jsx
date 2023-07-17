import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <form name="contact" method="post" action="/contact">
          <input type="hidden" name="form-name" value="contact" />

          <div className="overlap-group">
            <div className="rectangle" />
            <input type="text" className="name" placeholder="Enter your name" />
          </div>

            <button type="submit">
            <Group className="group-2" property1="default" to="/thank-you" />
            </button>

          </form>

      </div>
    </div>
  );
};