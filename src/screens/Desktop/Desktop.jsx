import React from "react";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="frame-2">
            <h1 className="h-1">Professional Translation Services</h1>
            <p className="element-languages-that-2">
              120 languages that fits in your budget
              <br />
              Human Translation done with the highest quality in the market
              <br /> Linguists with Master&#39;s Degrees
            </p>
            <Group className="design-component-instance-node" talkToAnExpertClassName="group-3" />
          </div>
          <div className="lady-wrapper">
            <Lady className="lady-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
