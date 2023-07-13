import React from "react";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import { MagmaTranslation } from "../../components/MagmaTranslation";
import "./style.css";

export const DesktopScreen = () => {
  return (
    <div className="desktop-screen">
      <div className="desktop-2">
        <div className="group-4">
          <h1 className="text-wrapper-6">Professional Translation Services</h1>
          <p className="element-languages-that-3">
            120 languages that fits in your budget
            <br />
            Human Translation done with the highest quality in the market
            <br /> Linguists with Master&#39;s Degrees
          </p>
          <Group className="group-5" talkToAnExpertClassName="group-6" />
        </div>
        <Lady className="lady-3" />
        <MagmaTranslation className="magma-translation-instance" />
        <p className="text-wrapper-7">Trusted by Elite Businesses Worldwide</p>
        <img className="group-7" alt="Group" src="/img/image.png" />
      </div>
    </div>
  );
};
