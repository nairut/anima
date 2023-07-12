import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Frame } from "../../components/Frame";
import "./style.css";

export const Index = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="index"
      style={{
        alignItems: screenWidth >= 1236 ? "flex-start" : undefined,
        border: screenWidth >= 1236 ? "1px none" : undefined,
        flexDirection:
          (screenWidth >= 744 && screenWidth < 1236) || screenWidth < 744
            ? "row"
            : screenWidth >= 1236
            ? "column"
            : undefined,
        gap: screenWidth >= 1236 ? "60px" : undefined,
        height: screenWidth >= 1236 ? "780px" : undefined,
        justifyContent: (screenWidth >= 744 && screenWidth < 1236) || screenWidth < 744 ? "center" : undefined,
        minWidth: screenWidth >= 1236 ? "1236px" : undefined,
        padding: screenWidth >= 1236 ? "103px 163px" : undefined,
        position: screenWidth >= 1236 ? "relative" : undefined,
        width: (screenWidth >= 744 && screenWidth < 1236) || screenWidth < 744 ? "100%" : undefined,
      }}
    >
      {((screenWidth >= 744 && screenWidth < 1236) || screenWidth < 744) && (
        <div
          className="iphone-mini"
          style={{
            height: screenWidth < 744 ? "812px" : screenWidth >= 744 && screenWidth < 1236 ? "1133px" : undefined,
            width: screenWidth < 744 ? "375px" : screenWidth >= 744 && screenWidth < 1236 ? "744px" : undefined,
          }}
        >
          {screenWidth < 744 && (
            <div className="frame-2">
              <h1 className="text-wrapper">Professional Translation Services</h1>
              <p className="p">
                120 languages that fits in your budget
                <br />
                11,000+ translators
                <br />
                Easy, Technological, Professional
              </p>
              <div className="boto">
                <div className="rectangle-2" />
                <div className="talk-to-an-expert-2">TALK TO AN EXPERT</div>
              </div>
              <img className="img" alt="Whatsapp image" src="/img/whatsapp-image-2023-07-12-at-12-41-3.png" />
            </div>
          )}

          {screenWidth >= 744 && screenWidth < 1236 && (
            <Frame
              botOClassName="frame-4"
              className="frame-14"
              elementLanguagesThatClassName="frame-3"
              frameClassName="frame-instance"
              frameClassNameOverride="frame-14-instance"
              professionalClassName="instance-node"
              rectangleClassName="frame-5"
              talkToAnExpertClassName="frame-6"
              whatsappImage="/img/whatsapp-image-2023-07-12-at-12-41-2-2.png"
              whatsappImageClassName="frame-7"
            />
          )}
        </div>
      )}

      {screenWidth >= 1236 && <Frame className="frame-8" />}
    </div>
  );
};
