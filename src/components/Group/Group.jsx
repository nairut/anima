import React, { useState } from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with name:", name);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="desktop">
      <div className="div">
        <form
          className="overlap-group"
          onSubmit={handleSubmit}
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="Turian"
        >
          <div className="rectangle" />
          <input
            className="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <button type="submit">Submit</button>
        </form>
        <Group className="group-2" property1="default" to="/thank-you">
          <button>TALK TO AN EXPERT</button>
        </Group>
      </div>
    </div>
  );
};
