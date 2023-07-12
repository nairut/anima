import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const IphoneProMax = (): JSX.Element => {
  return (
    <div className="iphone-pro-max">
      <div className="div-2">
        <div className="frame-4">
          <h1 className="text-wrapper-2">Professional Translation Services</h1>
          <p className="element-languages-that-2">
            120 languages that fits in your budget
            <br />
            11,000+ translators
            <br />
            Easy, Technological, Professional
          </p>
          <Group className="group-2-instance" />
        </div>
        <div className="vector-wrapper">
          <img className="vector-2" alt="Vector" src="/img/vector-4.png" />
        </div>
      </div>
    </div>
  );
};
