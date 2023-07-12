import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const ElementWrapper = (): JSX.Element => {
  return (
    <div className="element-wrapper">
      <div className="frame-5">
        <div className="frame-6">
          <h1 className="text-wrapper-3">Professional Translation Services</h1>
          <p className="element-languages-that-3">
            120 languages that fits in your budget
            <br />
            11,000+ translators
            <br />
            Easy, Technological, Professional
          </p>
          <Group className="design-component-instance-node" />
        </div>
        <div className="div-wrapper">
          <div className="overlap-group-2">
            <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-5.png" />
            <div className="vector-3" />
            <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-2.png" />
            <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-3.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
