import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const FrameScreen = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="frame-screen"
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
      <div
        className="iphone-mini"
        style={{
          alignItems: screenWidth >= 1236 ? "flex-start" : undefined,
          alignSelf: screenWidth >= 1236 ? "stretch" : undefined,
          border: (screenWidth >= 744 && screenWidth < 1236) || screenWidth < 744 ? "1px none" : undefined,
          display: screenWidth >= 1236 ? "flex" : undefined,
          flexDirection: screenWidth >= 1236 ? "column" : undefined,
          gap: screenWidth >= 1236 ? "10px" : undefined,
          height:
            screenWidth < 744
              ? "812px"
              : screenWidth >= 744 && screenWidth < 1236
              ? "1133px"
              : screenWidth >= 1236
              ? "540px"
              : undefined,
          position: screenWidth >= 1236 ? "relative" : undefined,
          width: screenWidth < 744 ? "375px" : screenWidth >= 744 && screenWidth < 1236 ? "744px" : undefined,
        }}
      >
        <div
          className="frame-2"
          style={{
            alignSelf: screenWidth >= 1236 ? "stretch" : undefined,
            backgroundColor: screenWidth >= 744 && screenWidth < 1236 ? "#ffffff" : undefined,
            flexDirection: (screenWidth >= 744 && screenWidth < 1236) || screenWidth < 744 ? "column" : undefined,
            gap:
              screenWidth < 744
                ? "31.99px"
                : screenWidth >= 744 && screenWidth < 1236
                ? "5.31px"
                : screenWidth >= 1236
                ? "262.11px"
                : undefined,
            height: screenWidth >= 744 && screenWidth < 1236 ? "548px" : undefined,
            left: screenWidth < 744 ? "32px" : screenWidth >= 744 && screenWidth < 1236 ? "73px" : undefined,
            marginBottom: screenWidth >= 1236 ? "-92.00px" : undefined,
            padding: screenWidth >= 1236 ? "45px 64px" : undefined,
            top: screenWidth < 744 ? "97px" : screenWidth >= 744 && screenWidth < 1236 ? "173px" : undefined,
            width: screenWidth < 744 ? "328px" : screenWidth >= 744 && screenWidth < 1236 ? "429px" : undefined,
          }}
        >
          {screenWidth < 744 && (
            <>
              <h1 className="h-1">Professional Translation Services</h1>
              <p className="p">
                120 languages that fits in your budget
                <br />
                11,000+ translators
                <br />
                Easy, Technological, Professional
              </p>
              <div className="boto">
                <div className="rectangle" />
                <div className="talk-to-an-expert-2">TALK TO AN EXPERT</div>
              </div>
              <img
                className="whatsapp-image"
                alt="Whatsapp image"
                src="/img/whatsapp-image-2023-07-12-at-12-41-3.png"
              />
            </>
          )}

          {screenWidth >= 744 && screenWidth < 1236 && (
            <div className="frame-3">
              <div className="frame-4">
                <div className="text-wrapper-2">Professional Translation Services</div>
                <p className="element-languages-that-2">
                  120 languages that fits in your budget
                  <br />
                  11,000+ translators
                  <br />
                  Easy, Technological, Professional
                </p>
                <div className="boto-2">
                  <div className="rectangle-2" />
                  <div className="talk-to-an-expert-3">TALK TO AN EXPERT</div>
                </div>
              </div>
              <img
                className="whatsapp-image-2"
                alt="Whatsapp image"
                src="/img/whatsapp-image-2023-07-12-at-12-41-2-2.png"
              />
            </div>
          )}

          {screenWidth >= 1236 && (
            <>
              <div className="frame-5">
                <h1 className="text-wrapper-3">Professional Translation Services</h1>
                <p className="element-languages-that-3">
                  120 languages that fits in your budget
                  <br />
                  11,000+ translators
                  <br />
                  Easy, Technological, Professional
                </p>
                <div className="boto-3">
                  <div className="rectangle-3" />
                  <div className="talk-to-an-expert-4">TALK TO AN EXPERT</div>
                </div>
              </div>
              <img className="whatsapp-image" alt="Whatsapp image" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
