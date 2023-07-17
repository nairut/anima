import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />

          <form name="contact" method="post" action="/contact">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" className="name" placeholder="Enter your name" />
        </div>
        <Group className="group-2" property1="default" to="/thank-you" />
      </div>
    </div>
  );
};
