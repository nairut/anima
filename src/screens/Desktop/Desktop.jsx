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
          <div className="rectangle" />
          <form name="TurianEUmesmo" method="post" data-netlify="true" data-netlify-honeypot="bot-field"  onSubmit={handleSubmit}>
           <input type="hidden" name="TurianEUmesmo" value="contact" />
            <input type="text" className="name" placeholder="Enter your name" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <Group className="group-2" property1="default" to="/thank-you" />
      </div>
    </div>
  );
};