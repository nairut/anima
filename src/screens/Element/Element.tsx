import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Element = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="element"
      style={{
        minWidth: screenWidth < 1310 ? "1200px" : screenWidth >= 1310 ? "1310px" : undefined,
        padding:
          screenWidth < 1310 ? "100px 174px 100px 85px" : screenWidth >= 1310 ? "100px 198px 100px 217px" : undefined,
      }}
    >
      <div className="frame">
        <div className="div">
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
