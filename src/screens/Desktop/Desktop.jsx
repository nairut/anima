import React from "react";
import { Group } from "../../components/Group";
import "./style.css";
import ProjectForm from "../../components/Group";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <input className="name" />
        </div>
        <Group className="group-2" property1="default" to="/thank-you" />
        <ProjectForm/>
      </div>
    </div>
  );
};


