import React from "react";
import "./style.css";

export const Frame = (): JSX.Element => {
  return (
    <div className="frame">
      <div className="div">
        <div className="div-2">
          <h1 className="text-wrapper">Professional Translation Services</h1>
          <p className="element-languages-that">
            120 languages that fits in your budget
            <br />
            11,000+ translators
            <br />
            Easy, Technological, Professional
          </p>
          <div className="group">
            <div className="overlap-group">
              <div className="talk-to-an-expert">TALK TO AN EXPERT</div>
            </div>
          </div>
        </div>
        <img className="img" alt="Group" src="/img/group-1.png" />
      </div>
    </div>
  );
};
