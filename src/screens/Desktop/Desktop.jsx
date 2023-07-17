import React, { useRef } from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    // Process the form data and perform submission logic here
    console.log("Name:", name);
    // Example: Make an API request to submit the form data
  };

  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <form ref={formRef} name="contact" method="post" action="/contact">
            <input type="hidden" name="form-name" value="contact" />
            <div className="rectangle" />
            <input type="text" name="name" className="name" placeholder="Enter your name" />
            <Group className="group-2" property1="default" to="/thank-you" onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
};
