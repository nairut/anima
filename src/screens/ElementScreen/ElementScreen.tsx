import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const ElementScreen = (): JSX.Element => {
  return (
    <div className="element-screen">
      <div className="frame-2">
        <div className="frame-3">
          <h1 className="h-1">Professional Translation Services</h1>
          <p className="p">
            120 languages that fits in your budget
            <br />
            11,000+ translators
            <br />
            Easy, Technological, Professional
          </p>
          <Group className="group-instance" />
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img className="rectangle" alt="Rectangle" src="/img/rectangle-5.png" />
            <div className="vector" />
            <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-2.png" />
            <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-3.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
