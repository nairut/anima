import React, { useState } from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform the form submission logic here
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "my-form", name }),
      });
      if (response.ok) {
        // Handle successful form submission
        console.log("Form submitted successfully");
        // Reset the input field after submission
        setName("");
      } else {
        // Handle form submission error
        console.error("Form submission failed");
      }
    } catch (error) {
      // Handle form submission error
      console.error("Form submission failed:", error);
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <form onSubmit={handleSubmit} netlify netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="my-form" />
            <input
              className="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <Group className="group-2" property1="default" to="/thank-you" />
      </div>
    </div>
  );
};
