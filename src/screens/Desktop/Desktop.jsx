import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    // e.g., send form data to the server
  };

  return (
    <div className="desktop">
      <div className="div">
        <form name="contact" method="post" action="/contact">
          <input type="hidden" name="form-name" value="contact" />

          <div className="overlap-group">
            <div className="rectangle" />
            <input type="text" name="name" className="name" placeholder="Enter your name" />
          </div>

          <button className="desktop" type="submit" onClick={handleSubmit}>
            <Group property1="default" onClick={handleClick}/>
          </button>

        </form>
      </div>
    </div>
  );
};
