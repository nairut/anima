import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="name-wrapper">
          <input className="name" />
        </div>
        <Group className="design-component-instance-node" talkToAnExpertClassName="group-3" />
      </div>
    </div>
  );
};
