import React from "react";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import { MagmaTranslation } from "../../components/MagmaTranslation";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <h1 className="text-wrapper">Professional Translation Services</h1>
        <p className="element-languages-that">
          120 languages that fits in your budget
          <br />
          11,000+ translators
          <br />
          Easy, Technological, Professional
        </p>
        <Group className="group-2" talkToAnExpertClassName="group-instance" />
        <Lady className="lady-instance" />
        <MagmaTranslation className="magma-translation-png" />
        <img className="img" alt="Group" src="/img/group-4.png" />
        <p className="p">Trusted by Elite Businesses Worldwide</p>
      </div>
    </div>
  );
};
