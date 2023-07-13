import React from "react";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import { MagmaTranslation } from "../../components/MagmaTranslation";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="group-2">
          <h1 className="text-wrapper">Professional Translation Services</h1>
          <p className="element-languages-that">
            120 languages that fits in your budget
            <br />
            Human Translation done with the highest quality in the market
            <br /> Linguists with Master&#39;s Degrees
          </p>
          <Group className="group-instance" talkToAnExpertClassName="group-2-instance" />
        </div>
        <Lady className="lady-instance" />
        <MagmaTranslation className="magma-translation-png" />
        <p className="p">Trusted by Elite Businesses Worldwide</p>
        <img className="img" alt="Group" src="/img/group-6.png" />
      </div>
    </div>
  );
};
