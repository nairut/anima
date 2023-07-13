import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = (): JSX.Element => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="name-wrapper">
          <input className="name" />
        </div>
        <Group className="group-instance" talkToAnExpertClassName="group-2-instance" />
      </div>
    </div>
  );
};
