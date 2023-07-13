import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Group } from "../../components/Group";
import "./style.css";


export { Element } from "./Element";
import React from "react";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-K3GKPJ5'
}

TagManager.initialize(tagManagerArgs)





export const IphoneProMax = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="iphone-pro-max"
      style={{
        alignItems: screenWidth >= 1200 ? "flex-start" : undefined,
        border: screenWidth >= 1200 ? "1px none" : undefined,
        flexDirection: screenWidth < 1200 ? "row" : screenWidth >= 1200 ? "column" : undefined,
        gap: screenWidth >= 1200 ? "10px" : undefined,
        justifyContent: screenWidth < 1200 ? "center" : undefined,
        minWidth: screenWidth >= 1200 ? "1200px" : undefined,
        padding: screenWidth >= 1200 ? "100px 174px 100px 85px" : undefined,
        position: screenWidth >= 1200 ? "relative" : undefined,
        width: screenWidth < 1200 ? "100%" : undefined,
      }}
    >
      <div
        className="iphone_pro_max-2"
        style={{
          alignItems: screenWidth >= 1200 ? "flex-end" : undefined,
          alignSelf: screenWidth >= 1200 ? "stretch" : undefined,
          backgroundColor: screenWidth < 1200 ? "#ffffff" : undefined,
          border: screenWidth < 1200 ? "1px none" : undefined,
          display: screenWidth >= 1200 ? "flex" : undefined,
          height: screenWidth < 1200 ? "640px" : undefined,
          justifyContent: screenWidth >= 1200 ? "space-between" : undefined,
          position: screenWidth >= 1200 ? "relative" : undefined,
          width: screenWidth < 1200 ? "360px" : undefined,
        }}
      >
        {screenWidth < 1200 && (
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
          </div>
        )}

        {screenWidth >= 1200 && (
          <>
            <div className="div">
              <h1 className="h-1">Professional Translation Services</h1>
              <p className="p">
                120 languages that fits in your budget
                <br />
                11,000+ translators
                <br />
                Easy, Technological, Professional
              </p>
              <Group className="group-2-instance" />
            </div>
            <img className="img" alt="Group" src="/img/group-1-2.png" />
          </>
        )}
      </div>
    </div>
  );
};
