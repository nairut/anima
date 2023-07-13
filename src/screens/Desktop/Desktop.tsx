import React from "react";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import { MagmaTranslation } from "../../components/MagmaTranslation";
import "./style.css";

export const Desktop = (): JSX.Element => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="frame">
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
        </div>
        <MagmaTranslation className="magma-translation-png" />
        <img className="rectangle" alt="Rectangle" src="/img/rectangle-2.png" />
        <img className="img" alt="Rectangle" src="/img/rectangle-10.png" />
        <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-3.png" />
        <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-11.png" />
        <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-4.png" />
        <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-12.png" />
        <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-5.png" />
        <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-13.png" />
        <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-6.png" />
        <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-14.png" />
        <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-7.png" />
        <img className="rectangle-11" alt="Rectangle" src="/img/rectangle-15.png" />
        <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-8.png" />
        <img className="rectangle-13" alt="Rectangle" src="/img/rectangle-16.png" />
        <img className="rectangle-14" alt="Rectangle" src="/img/rectangle-9.png" />
        <img className="rectangle-15" alt="Rectangle" src="/img/rectangle-17.png" />
        <p className="p">Trusted by Elite Businesses Worldwide</p>
      </div>
    </div>
  );
};
