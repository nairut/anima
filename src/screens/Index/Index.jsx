import React from "react";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import { MagmaTranslation } from "../../components/MagmaTranslation";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
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
        <p className="text-wrapper-2">Costumized to Fit your Specific Industry Needs</p>
        <img className="img" alt="Group" src="/img/group-6.png" />
        <div className="overlap-group">
          <div className="text-wrapper-3">Legal</div>
          <img className="law" alt="Law" src="/img/law.png" />
        </div>
        <div className="overlap">
          <div className="text-wrapper-4">Medical</div>
          <img className="img-2" alt="Medical bag" src="/img/medical-bag.png" />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-5">Manufacturing</div>
          <img className="img-2" alt="Manufacturing" src="/img/manufacturing.png" />
        </div>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
        <div className="rectangle-6" />
      </div>
    </div>
  );
};
