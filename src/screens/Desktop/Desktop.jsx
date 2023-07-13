import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <input className="name" />
        </div>
        <Group className="group-2" talkToAnExpertClassName="group-instance" />
      </div>
    </div>
  );
};
