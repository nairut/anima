import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          
          <form name="contact" method="post" action="/contact">
          <input type="hidden" name="form-name" value="contact" />
    
          <div className="rectangle" />
            <input type="text" className="name" placeholder="Enter your name" />
            <button className="group-2" property1="default" type="submit">sasdsdasdasdasdasdsasdasdsd</button>
            
          </form>
        </div>

      </div>
    </div>
  );
};