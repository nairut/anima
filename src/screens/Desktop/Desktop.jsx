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


<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  {/* You still need to add the hidden input with the form name to your JSX form */}
  <input type="hidden" name="form-name" value="contact" />
  ...
</form>