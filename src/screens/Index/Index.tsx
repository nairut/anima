import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Index = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="index"
      style={{
        alignItems: (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310 ? "flex-start" : undefined,
        border: (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310 ? "1px none" : undefined,
        flexDirection:
          (screenWidth >= 430 && screenWidth < 1200) || screenWidth < 430
            ? "row"
            : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
            ? "column"
            : undefined,
        gap: (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310 ? "10px" : undefined,
        justifyContent: (screenWidth >= 430 && screenWidth < 1200) || screenWidth < 430 ? "center" : undefined,
        minWidth: screenWidth >= 1200 && screenWidth < 1310 ? "1200px" : screenWidth >= 1310 ? "1310px" : undefined,
        padding:
          screenWidth >= 1200 && screenWidth < 1310
            ? "100px 174px 100px 85px"
            : screenWidth >= 1310
            ? "100px 198px 100px 217px"
            : undefined,
        position: (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310 ? "relative" : undefined,
        width: (screenWidth >= 430 && screenWidth < 1200) || screenWidth < 430 ? "100%" : undefined,
      }}
    >
      <div
        className="iphone-pro-max"
        style={{
          alignItems: (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310 ? "flex-end" : undefined,
          alignSelf: (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310 ? "stretch" : undefined,
          backgroundColor: (screenWidth >= 430 && screenWidth < 1200) || screenWidth < 430 ? "#ffffff" : undefined,
          border: (screenWidth >= 430 && screenWidth < 1200) || screenWidth < 430 ? "1px none" : undefined,
          display: (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310 ? "flex" : undefined,
          height: screenWidth < 430 ? "640px" : screenWidth >= 430 && screenWidth < 1200 ? "932px" : undefined,
          justifyContent:
            (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310 ? "space-between" : undefined,
          width: screenWidth < 430 ? "360px" : screenWidth >= 430 && screenWidth < 1200 ? "430px" : undefined,
        }}
      >
        <div
          className="frame"
          style={{
            gap:
              screenWidth < 430
                ? "59.17px"
                : screenWidth >= 430 && screenWidth < 1200
                ? "82px"
                : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                ? "27px"
                : undefined,
            left: screenWidth < 430 ? "31px" : screenWidth >= 430 && screenWidth < 1200 ? "21px" : undefined,
            position:
              (screenWidth >= 430 && screenWidth < 1200) || screenWidth < 430
                ? "absolute"
                : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                ? "relative"
                : undefined,
            top: screenWidth < 430 ? "53px" : screenWidth >= 430 && screenWidth < 1200 ? "89px" : undefined,
            width:
              screenWidth < 430
                ? "279px"
                : screenWidth >= 430 && screenWidth < 1200
                ? "387px"
                : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                ? "486px"
                : undefined,
          }}
        >
          <h1
            className="text-wrapper"
            style={{
              fontSize:
                screenWidth < 430
                  ? "31.6px"
                  : screenWidth >= 430 && screenWidth < 1200
                  ? "43.8px"
                  : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                  ? "55px"
                  : undefined,
              marginRight:
                screenWidth < 430
                  ? "-8.62px"
                  : screenWidth >= 430 && screenWidth < 1200
                  ? "-11.94px"
                  : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                  ? "-15.00px"
                  : undefined,
              marginTop:
                screenWidth < 430
                  ? "-0.57px"
                  : screenWidth >= 430 && screenWidth < 1200
                  ? "-0.80px"
                  : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                  ? "-1.00px"
                  : undefined,
              width:
                screenWidth < 430
                  ? "287.85px"
                  : screenWidth >= 430 && screenWidth < 1200
                  ? "398.94px"
                  : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                  ? "501px"
                  : undefined,
            }}
          >
            Professional Translation Services
          </h1>
          <p
            className="element-languages-that"
            style={{
              fontSize:
                screenWidth < 430
                  ? "12.1px"
                  : screenWidth >= 430 && screenWidth < 1200
                  ? "16.7px"
                  : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                  ? "21px"
                  : undefined,
              lineHeight:
                screenWidth < 430
                  ? "24.1px"
                  : screenWidth >= 430 && screenWidth < 1200
                  ? "33.4px"
                  : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                  ? "42px"
                  : undefined,
              marginRight:
                screenWidth < 430
                  ? "-31.03px"
                  : screenWidth >= 430 && screenWidth < 1200
                  ? "-43.00px"
                  : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                  ? "-54.00px"
                  : undefined,
              width:
                screenWidth < 430
                  ? "310.26px"
                  : screenWidth >= 430 && screenWidth < 1200
                  ? "430px"
                  : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                  ? "540px"
                  : undefined,
            }}
          >
            120 languages that fits in your budget
            <br />
            11,000+ translators
            <br />
            Easy, Technological, Professional
          </p>
          <div
            className="group"
            style={{
              height:
                screenWidth < 430
                  ? "31.6px"
                  : screenWidth >= 430 && screenWidth < 1200
                  ? "43.8px"
                  : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                  ? "55px"
                  : undefined,
              minWidth:
                screenWidth < 430
                  ? "194.47px"
                  : screenWidth >= 430 && screenWidth < 1200
                  ? "268.76px"
                  : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                  ? "337px"
                  : undefined,
            }}
          >
            <div
              className="overlap-group"
              style={{
                height:
                  screenWidth < 430
                    ? "32px"
                    : screenWidth >= 430 && screenWidth < 1200
                    ? "44px"
                    : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                    ? "55px"
                    : undefined,
                width:
                  screenWidth < 430
                    ? "192px"
                    : screenWidth >= 430 && screenWidth < 1200
                    ? "267px"
                    : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                    ? "335px"
                    : undefined,
              }}
            >
              <div
                className="talk-to-an-expert"
                style={{
                  fontSize:
                    screenWidth < 430
                      ? "7.5px"
                      : screenWidth >= 430 && screenWidth < 1200
                      ? "10.4px"
                      : screenWidth >= 1200 && screenWidth < 1310
                      ? "15px"
                      : screenWidth >= 1310
                      ? "13px"
                      : undefined,
                  height:
                    screenWidth < 430
                      ? "5px"
                      : screenWidth >= 430 && screenWidth < 1200
                      ? "7px"
                      : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                      ? "9px"
                      : undefined,
                  left:
                    screenWidth < 430
                      ? "36px"
                      : screenWidth >= 430 && screenWidth < 1200
                      ? "50px"
                      : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                      ? "63px"
                      : undefined,
                  letterSpacing:
                    screenWidth < 430
                      ? "0.57px"
                      : screenWidth >= 430 && screenWidth < 1200
                      ? "0.80px"
                      : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                      ? "1.00px"
                      : undefined,
                  lineHeight:
                    screenWidth < 430
                      ? "7.5px"
                      : screenWidth >= 430 && screenWidth < 1200
                      ? "10.4px"
                      : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                      ? "13px"
                      : undefined,
                  top:
                    screenWidth < 430
                      ? "13px"
                      : screenWidth >= 430 && screenWidth < 1200
                      ? "18px"
                      : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth < 430
                      ? "120px"
                      : screenWidth >= 430 && screenWidth < 1200
                      ? "166px"
                      : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                      ? "209px"
                      : undefined,
                }}
              >
                TALK TO AN EXPERT
              </div>
            </div>
          </div>
        </div>
        <div
          className="overlap_group"
          style={{
            backgroundImage:
              screenWidth < 430
                ? "url(/img/group-1.png)"
                : screenWidth >= 430 && screenWidth < 1200
                ? "url(/img/group-1-1.png)"
                : undefined,
            backgroundSize: (screenWidth >= 430 && screenWidth < 1200) || screenWidth < 430 ? "100% 100%" : undefined,
            height:
              screenWidth < 430
                ? "227px"
                : (screenWidth >= 1200 && screenWidth < 1310) ||
                  screenWidth >= 1310 ||
                  (screenWidth >= 430 && screenWidth < 1200)
                ? "365px"
                : undefined,
            left: screenWidth < 430 ? "69px" : screenWidth >= 430 && screenWidth < 1200 ? "62px" : undefined,
            minWidth: (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310 ? "305px" : undefined,
            position:
              (screenWidth >= 430 && screenWidth < 1200) || screenWidth < 430
                ? "absolute"
                : (screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310
                ? "relative"
                : undefined,
            top: screenWidth < 430 ? "413px" : screenWidth >= 430 && screenWidth < 1200 ? "534px" : undefined,
            width: screenWidth < 430 ? "190px" : screenWidth >= 430 && screenWidth < 1200 ? "305px" : undefined,
          }}
        >
          {((screenWidth >= 430 && screenWidth < 1200) || screenWidth < 430) && (
            <img
              className="vector"
              style={{
                height: screenWidth < 430 ? "178px" : screenWidth >= 430 && screenWidth < 1200 ? "311px" : undefined,
                left: screenWidth < 430 ? "18px" : screenWidth >= 430 && screenWidth < 1200 ? "24px" : undefined,
                top: screenWidth < 430 ? "29px" : screenWidth >= 430 && screenWidth < 1200 ? "30px" : undefined,
                width: screenWidth < 430 ? "119px" : screenWidth >= 430 && screenWidth < 1200 ? "208px" : undefined,
              }}
              alt="Vector"
              src={
                screenWidth < 430
                  ? "/img/vector-5.png"
                  : screenWidth >= 430 && screenWidth < 1200
                  ? "/img/vector-2.png"
                  : undefined
              }
            />
          )}

          {((screenWidth >= 1200 && screenWidth < 1310) || screenWidth >= 1310) && (
            <div className="overlap">
              <img className="rectangle" alt="Rectangle" src="/img/rectangle-5.png" />
              <img
                className="img"
                style={{
                  height:
                    screenWidth >= 1200 && screenWidth < 1310 ? "244px" : screenWidth >= 1310 ? "311px" : undefined,
                  left: screenWidth >= 1200 && screenWidth < 1310 ? "0" : screenWidth >= 1310 ? "23px" : undefined,
                  objectFit: screenWidth >= 1310 ? "cover" : undefined,
                  top: screenWidth >= 1200 && screenWidth < 1310 ? "121px" : screenWidth >= 1310 ? "31px" : undefined,
                  width: screenWidth >= 1200 && screenWidth < 1310 ? "24px" : screenWidth >= 1310 ? "208px" : undefined,
                }}
                alt="Rectangle"
                src={
                  screenWidth >= 1200 && screenWidth < 1310
                    ? "/img/rectangle-2.png"
                    : screenWidth >= 1310
                    ? "/img/vector-2.png"
                    : undefined
                }
              />
              <img
                className="rectangle-2"
                style={{
                  height:
                    screenWidth >= 1200 && screenWidth < 1310 ? "24px" : screenWidth >= 1310 ? "244px" : undefined,
                  top: screenWidth >= 1200 && screenWidth < 1310 ? "341px" : screenWidth >= 1310 ? "121px" : undefined,
                  width: screenWidth >= 1200 && screenWidth < 1310 ? "254px" : screenWidth >= 1310 ? "24px" : undefined,
                }}
                alt="Rectangle"
                src={
                  screenWidth >= 1200 && screenWidth < 1310
                    ? "/img/rectangle-3.png"
                    : screenWidth >= 1310
                    ? "/img/rectangle-2.png"
                    : undefined
                }
              />
              <img
                className="vector-2"
                style={{
                  height:
                    screenWidth >= 1200 && screenWidth < 1310 ? "311px" : screenWidth >= 1310 ? "24px" : undefined,
                  left: screenWidth >= 1200 && screenWidth < 1310 ? "24px" : screenWidth >= 1310 ? "0" : undefined,
                  objectFit: screenWidth >= 1200 && screenWidth < 1310 ? "cover" : undefined,
                  top: screenWidth >= 1200 && screenWidth < 1310 ? "30px" : screenWidth >= 1310 ? "341px" : undefined,
                  width:
                    screenWidth >= 1200 && screenWidth < 1310 ? "208px" : screenWidth >= 1310 ? "254px" : undefined,
                }}
                alt="Vector"
                src={
                  screenWidth >= 1200 && screenWidth < 1310
                    ? "/img/vector-2.png"
                    : screenWidth >= 1310
                    ? "/img/rectangle-3.png"
                    : undefined
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
