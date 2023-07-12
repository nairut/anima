import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Group } from "../../components/Group";
import "./style.css";

export const Element = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="element"
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
        className="iphone-pro-max"
        style={{
          alignItems: screenWidth >= 1200 ? "flex-end" : undefined,
          alignSelf: screenWidth >= 1200 ? "stretch" : undefined,
          backgroundColor: screenWidth < 1200 ? "#ffffff" : undefined,
          border: screenWidth < 1200 ? "1px none" : undefined,
          display: screenWidth >= 1200 ? "flex" : undefined,
          height: screenWidth < 1200 ? "640px" : undefined,
          justifyContent: screenWidth >= 1200 ? "space-between" : undefined,
          width: screenWidth < 1200 ? "360px" : undefined,
        }}
      >
        <div
          className="frame"
          style={{
            gap: screenWidth < 1200 ? "59.17px" : screenWidth >= 1200 ? "27px" : undefined,
            left: screenWidth < 1200 ? "31px" : undefined,
            position: screenWidth < 1200 ? "absolute" : screenWidth >= 1200 ? "relative" : undefined,
            top: screenWidth < 1200 ? "53px" : undefined,
            width: screenWidth < 1200 ? "279px" : screenWidth >= 1200 ? "486px" : undefined,
          }}
        >
          <h1
            className="text-wrapper"
            style={{
              fontSize: screenWidth < 1200 ? "31.6px" : screenWidth >= 1200 ? "55px" : undefined,
              marginRight: screenWidth < 1200 ? "-8.62px" : screenWidth >= 1200 ? "-15.00px" : undefined,
              marginTop: screenWidth < 1200 ? "-0.57px" : screenWidth >= 1200 ? "-1.00px" : undefined,
              width: screenWidth < 1200 ? "287.85px" : screenWidth >= 1200 ? "501px" : undefined,
            }}
          >
            Professional Translation Services
          </h1>
          <p
            className="element-languages-that"
            style={{
              fontSize: screenWidth < 1200 ? "12.1px" : screenWidth >= 1200 ? "21px" : undefined,
              lineHeight: screenWidth < 1200 ? "24.1px" : screenWidth >= 1200 ? "42px" : undefined,
              marginRight: screenWidth < 1200 ? "-31.03px" : screenWidth >= 1200 ? "-54.00px" : undefined,
              width: screenWidth < 1200 ? "310.26px" : screenWidth >= 1200 ? "540px" : undefined,
            }}
          >
            120 languages that fits in your budget
            <br />
            11,000+ translators
            <br />
            Easy, Technological, Professional
          </p>
          <Group
            className={`${screenWidth < 1200 && "class"} ${screenWidth >= 1200 && "class-2"}`}
            talkToAnExpertClassName={`${screenWidth < 1200 && "class-3"}`}
          />
        </div>
        <img
          className="img"
          style={{
            height: screenWidth < 1200 ? "183px" : screenWidth >= 1200 ? "321px" : undefined,
            left: screenWidth < 1200 ? "104px" : undefined,
            minWidth: screenWidth >= 1200 ? "268.23px" : undefined,
            position: screenWidth < 1200 ? "absolute" : screenWidth >= 1200 ? "relative" : undefined,
            top: screenWidth < 1200 ? "437px" : undefined,
            width: screenWidth < 1200 ? "153px" : undefined,
          }}
          alt="Group"
          src={screenWidth < 1200 ? "/img/group-1-1.png" : screenWidth >= 1200 ? "/img/group-1-2.png" : undefined}
        />
      </div>
    </div>
  );
};
