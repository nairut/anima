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
        </div>
        <Group className="group-2" property1="default" to="/thank-you" />
      </div>
    </div>
  );
};


import ReactDOM from 'react-dom';

render() {
  return (
    <form name="turian" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>Your Name: <input type="text" name="name"/></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email"/></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
