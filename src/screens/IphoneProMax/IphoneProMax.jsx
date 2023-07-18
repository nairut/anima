import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import "./style.css";

export const IphoneProMax = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="iphone-pro-max">
      <div
        className="div-2"
        style={{
          border:
            screenWidth < 1000
              ? "1px none"
              : screenWidth >= 1000 && screenWidth < 1201
              ? "0.83px none"
              : (screenWidth >= 1201 && screenWidth < 1300) ||
                (screenWidth >= 1300 && screenWidth < 1400) ||
                (screenWidth >= 1400 && screenWidth < 1500) ||
                screenWidth >= 1500
              ? "0.99px none"
              : undefined,
          height:
            screenWidth < 1000
              ? "912px"
              : screenWidth >= 1000 && screenWidth < 1201
              ? "3024.98px"
              : (screenWidth >= 1201 && screenWidth < 1300) ||
                (screenWidth >= 1300 && screenWidth < 1400) ||
                (screenWidth >= 1400 && screenWidth < 1500) ||
                screenWidth >= 1500
              ? "3633px"
              : undefined,
          width:
            screenWidth < 1000
              ? "430px"
              : screenWidth >= 1000 && screenWidth < 1201
              ? "1000px"
              : screenWidth >= 1201 && screenWidth < 1300
              ? "1201px"
              : screenWidth >= 1300 && screenWidth < 1400
              ? "1300px"
              : screenWidth >= 1400 && screenWidth < 1500
              ? "1400px"
              : screenWidth >= 1500
              ? "1500px"
              : undefined,
        }}
      >
        {screenWidth < 1000 && (
          <>
            <h1 className="text-wrapper">Professional Translation Services</h1>
            <p className="element-languages-that">
              120 languages that fits in your budget
              <br />
              High Quality Human Translation
              <br />
              Linguists with Master&#39;s Degrees
            </p>
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1201) ||
          (screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <Lady
              className={`${screenWidth >= 1000 && screenWidth < 1201 && "class"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-2"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-3"} ${
                screenWidth >= 1400 && screenWidth < 1500 && "class-4"
              } ${screenWidth >= 1500 && "class-5"}`}
            />
            <p
              className="p"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "31.4px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "37.7px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "206px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "248px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "297px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "347px"
                    : screenWidth >= 1500
                    ? "397px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1.26px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1.51px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "613px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "736px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "588px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "706px"
                    : undefined,
              }}
            >
              Trusted by Elite Businesses Worldwide
            </p>
            <p
              className="text-wrapper-2"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "30.8px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "37px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "157px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "188px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "237px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "287px"
                    : screenWidth >= 1500
                    ? "337px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1.23px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1.48px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1012px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1215px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "710px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "853px"
                    : undefined,
              }}
            >
              Costumized to Fit your Specific Industry Needs
            </p>
            <img
              className="img"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "155px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "186px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "85px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "102px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "151px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "201px"
                    : screenWidth >= 1500
                    ? "251px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "697px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "837px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "830px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "997px"
                    : undefined,
              }}
              alt="Group"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/group-8-8.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/group-8.png"
                  : undefined
              }
            />
            <div
              className="overlap"
              style={{
                backgroundImage:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "url(/img/rectangle-19-4.png)"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "url(/img/rectangle-19.png)"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "53px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "64px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "113px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "163px"
                    : screenWidth >= 1500
                    ? "213px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1317px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-3"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "42px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "51px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "99px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                Legal
              </div>
              <img
                className="law"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "57px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "26px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "31px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Law"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/law-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/law.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-2"
              style={{
                backgroundImage:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "url(/img/rectangle-36-4.png)"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "url(/img/rectangle-19.png)"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "53px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "64px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "113px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "163px"
                    : screenWidth >= 1500
                    ? "213px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1524px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="media-films"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "8px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "79px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "95px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                Media &amp; Films
              </div>
              <img
                className="next"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "57px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "28px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Next"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/next-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/next.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-3"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "206px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "248px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "297px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "347px"
                    : screenWidth >= 1500
                    ? "397px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1317px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-4"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "31px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "37px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "98px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                Medical
              </div>
              <img
                className="medical-bag"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "56px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "27px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Medical bag"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/medical-bag-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/medical-bag.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-4"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "206px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "248px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "297px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "347px"
                    : screenWidth >= 1500
                    ? "397px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1524px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-5"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "20px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "24px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "98px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                E-Learning
              </div>
              <img
                className="MBA"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "56px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "27px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Mba"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/mba-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/mba.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-5"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "360px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "432px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "481px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "531px"
                    : screenWidth >= 1500
                    ? "581px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1317px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-6"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "3px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "4px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "98px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                Manufacturing
              </div>
              <img
                className="manufacturing"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "56px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "27px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Manufacturing"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/manufacturing-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/manufacturing.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-6"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "360px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "432px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "481px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "531px"
                    : screenWidth >= 1500
                    ? "581px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1524px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-7"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "19px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "98px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                Automotive
              </div>
              <img
                className="tesla-model-x"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "56px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "27px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Tesla model x"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/tesla-model-x-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/tesla-model-x.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-7"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "513px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "616px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "665px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "715px"
                    : screenWidth >= 1500
                    ? "765px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1317px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-8"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "27px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "32px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "98px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                Financial
              </div>
              <img
                className="money-bag-pounds"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "49px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "27px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Money bag pounds"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/money-bag-pounds-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/money-bag-pounds.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-8"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "513px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "616px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "665px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "715px"
                    : screenWidth >= 1500
                    ? "765px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1524px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-9"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "22px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "26px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "85px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "102px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                Marketing
              </div>
              <img
                className="commercial"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "56px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "27px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Commercial"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/commercial-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/commercial.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-9"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "666px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "800px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "849px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "899px"
                    : screenWidth >= 1500
                    ? "949px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1317px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="IT-software"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "3px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "4px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "98px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                IT &amp; Software
              </div>
              <img
                className="programming-flag"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "56px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "27px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Programming flag"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/programming-flag-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/programming-flag.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-group-2"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "666px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "800px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "849px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "899px"
                    : screenWidth >= 1500
                    ? "949px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1524px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-10"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "10px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "12px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "98px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                Life Science
              </div>
              <img
                className="biotech"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "56px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "27px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Biotech"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/biotech-8.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/biotech.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-10"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "819px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "984px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1033px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1083px"
                    : screenWidth >= 1500
                    ? "1133px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1317px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-11"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "27px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "32px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "98px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                Tourism
              </div>
              <img
                className="plane"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "56px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "27px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Plane"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/plane-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/plane.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-11"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "139px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "819px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "984px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1033px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1083px"
                    : screenWidth >= 1500
                    ? "1133px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1524px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "152px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-12"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "13px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "16px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.80px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "98px"
                      : undefined,
                  whiteSpace:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "nowrap"
                      : undefined,
                }}
              >
                E-commerce
              </div>
              <img
                className="buy"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "56px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "27px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Buy"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/buy-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/buy.png"
                    : undefined
                }
              />
            </div>
            <div
              className="text-wrapper-13"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "31.4px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "37.7px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "304px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "365px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "414px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "464px"
                    : screenWidth >= 1500
                    ? "514px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1.26px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1.51px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2157px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2591px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "390px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "468px"
                    : undefined,
              }}
            >
              What can you translate?
            </div>
            <p
              className="text-wrapper-14"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16.7px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "20px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "107px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "129px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "178px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "228px"
                    : screenWidth >= 1500
                    ? "278px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.67px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "0.80px"
                    : undefined,
                lineHeight:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "22.5px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "27.0px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2278px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2736px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "782px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "939px"
                    : undefined,
              }}
            >
              Our proficient translators have the capability to translate any kind of document, supporting the
              undermentioned file types
            </p>
            <div
              className="overlap-12"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "205px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "53px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "64px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "113px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "163px"
                    : screenWidth >= 1500
                    ? "213px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2851px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "138px"
                    : undefined,
              }}
            >
              <div
                className="document-translation"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "17px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "26px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "31px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.68px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "84px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "101px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "88px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "106px"
                      : undefined,
                }}
              >
                Document
                <br />
                Translation
              </div>
              <img
                className="PDF"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "49px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Pdf"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/pdf-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/pdf.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-13"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "205px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "210px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "252px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "301px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "351px"
                    : screenWidth >= 1500
                    ? "401px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2851px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "138px"
                    : undefined,
              }}
            >
              <div
                className="marketing-material"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "17px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "18px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "21px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.68px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "84px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "101px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "77px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "93px"
                      : undefined,
                }}
              >
                Marketing Material &amp; Ads
              </div>
              <img
                className="goal"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "49px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Goal"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/goal-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/goal.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-14"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "205px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "366px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "440px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "489px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "539px"
                    : screenWidth >= 1500
                    ? "589px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2851px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "138px"
                    : undefined,
              }}
            >
              <div
                className="website-apps"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "17px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "29px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "35px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.68px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "84px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "101px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "64px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "77px"
                      : undefined,
                }}
              >
                Website &amp; Apps
              </div>
              <img
                className="website"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "49px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Website"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/website-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/website.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-15"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "205px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "523px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "628px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "677px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "727px"
                    : screenWidth >= 1500
                    ? "777px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2851px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "138px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-15"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "17px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "24px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "29px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.68px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "84px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "101px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "81px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "97px"
                      : undefined,
                }}
              >
                Video Subtitling
              </div>
              <img
                className="video-camera"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "49px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Video camera"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/video-camera-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/video-camera.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-16"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "205px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "679px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "816px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "865px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "915px"
                    : screenWidth >= 1500
                    ? "965px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2851px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "138px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-16"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "17px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "15px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "18px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.68px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "84px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "101px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "97px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "117px"
                      : undefined,
                }}
              >
                Product Descriptions
              </div>
              <img
                className="e-commerce"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "49px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="E commerce"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/e-commerce-4.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/e-commerce.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-17"
              style={{
                border:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1px solid"
                    : undefined,
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "205px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "832px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "999px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1048px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1098px"
                    : screenWidth >= 1500
                    ? "1148px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2851px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "138px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-17"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "17px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "17px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "20px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.68px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "99px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "97px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "117px"
                      : undefined,
                }}
              >
                Articles, certificates, and more
              </div>
              <img
                className="biotech-2"
                style={{
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "34px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "41px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "38px"
                      : undefined,
                }}
                alt="Biotech"
                src={
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/biotech-9.png"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "/img/biotech.png"
                    : undefined
                }
              />
            </div>
            <div
              className="group-2"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "336px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "404px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "53px"
                    : (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                    ? "64px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "172px"
                    : screenWidth >= 1500
                    ? "180px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "156px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500)
                    ? "187px"
                    : screenWidth >= 1500
                    ? "205px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "578px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "693px"
                    : undefined,
              }}
            >
              <h1
                className="h-1"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "49.8px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "59.8px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "1.99px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "2.39px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "499px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "599px"
                      : undefined,
                }}
              >
                Professional Translation Services
              </h1>
              <p
                className="element-languages-that-2"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "17.9px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "21.5px"
                      : undefined,
                  height:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "108px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "130px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.54px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.65px"
                      : undefined,
                  lineHeight:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "35.9px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "43.1px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "151px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "181px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "574px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "689px"
                      : undefined,
                }}
              >
                120 languages that fits in your budget
                <br />
                Human Translation done with the highest quality in the market
                <br />
                Linguists with Master&#39;s Degrees
              </p>
              <Group
                className={`${screenWidth >= 1000 && screenWidth < 1201 && "class-8"} ${
                  ((screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500) &&
                  "class-9"
                }`}
                property1="default"
                talkToAnExpertClassName={`${screenWidth >= 1000 && screenWidth < 1201 && "class-6"} ${
                  ((screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500) &&
                  "class-7"
                }`}
              />
            </div>
            <Group
              className={`${screenWidth >= 1000 && screenWidth < 1201 && "class-10"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-11"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-12"} ${
                screenWidth >= 1400 && screenWidth < 1500 && "class-13"
              } ${screenWidth >= 1500 && "class-14"}`}
              property1="default"
              talkToAnExpertClassName={`${screenWidth >= 1000 && screenWidth < 1201 && "class-6"} ${
                ((screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500) &&
                "class-7"
              }`}
            />
            <Group
              className={`${screenWidth >= 1000 && screenWidth < 1201 && "class-15"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-16"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-17"} ${
                screenWidth >= 1400 && screenWidth < 1500 && "class-18"
              } ${screenWidth >= 1500 && "class-19"}`}
              property1="default"
              talkToAnExpertClassName={`${screenWidth >= 1000 && screenWidth < 1201 && "class-6"} ${
                ((screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500) &&
                "class-7"
              }`}
            />
            <p
              className="our-growth-would-not"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "13.3px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "16px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "97px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "117px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "166px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "216px"
                    : screenWidth >= 1500
                    ? "266px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.53px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "0.64px"
                    : undefined,
                lineHeight:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "22.0px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "26.4px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1923px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2310px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "237px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "285px"
                    : undefined,
              }}
            >
              Our Growth would not have been possible without Magma Translation. <br />
              Our internationalization occurred through the expertise of their team.
            </p>
            <p
              className="text-wrapper-18"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "13.3px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "16px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "379px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "455px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "504px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "554px"
                    : screenWidth >= 1500
                    ? "604px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.53px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "0.64px"
                    : undefined,
                lineHeight:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "21.8px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "26.2px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1923px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2309px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "237px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "285px"
                    : undefined,
              }}
            >
              What we were looking for in Magma was the cultural localization, their deep understanding of how people
              think in other countries, specially of the US, UK and Germany for our projects
            </p>
            <p
              className="we-are-a-german"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "13.3px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "16px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "659px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "791px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "840px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "890px"
                    : screenWidth >= 1500
                    ? "940px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.53px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "0.64px"
                    : undefined,
                lineHeight:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "13.3px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "16px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1923px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2309px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "237px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "285px"
                    : undefined,
              }}
            >
              <span
                className="text_wrapper"
                style={{
                  lineHeight:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "17.8px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "21.4px"
                      : undefined,
                }}
              >
                We are a German company, the largest auto parts manufacturer in the world. For us, trust in data
                security is{" "}
              </span>
              <span
                className="text_wrapper"
                style={{
                  lineHeight:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "21.8px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "26.2px"
                      : undefined,
                }}
              >
                essential
              </span>
              <span
                className="text_wrapper"
                style={{
                  lineHeight:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "17.8px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "21.4px"
                      : undefined,
                }}
              >
                . Magma Translation is a trusted company.
              </span>
            </p>
            <div
              className="text-wrapper-19"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "30.8px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "37px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "275px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "330px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "379px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "429px"
                    : screenWidth >= 1500
                    ? "479px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1.23px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1.48px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1595px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1916px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "447px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "537px"
                    : undefined,
              }}
            >
              Highest Quality Guaranteed
            </div>
            <p
              className="every-translation"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16.7px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "20px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "167px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "201px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "250px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "300px"
                    : screenWidth >= 1500
                    ? "350px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.67px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "0.80px"
                    : undefined,
                lineHeight:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "22.5px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "27.0px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1660px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "1994px"
                    : undefined,
              }}
            >
              Every translation undergoes thorough proofreading and validation by <br />
              both our team of professional external editors and our internal language specialists.
            </p>
            <div
              className="text-wrapper-20"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "18px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "167px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "200px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "249px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "299px"
                    : screenWidth >= 1500
                    ? "349px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "0.72px"
                    : undefined,
                lineHeight:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "29.7px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1865px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2240px"
                    : undefined,
              }}
            >
              Shopee.com
            </div>
            <div
              className="text-wrapper-21"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "18px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "468px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "562px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "611px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "661px"
                    : screenWidth >= 1500
                    ? "711px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "0.72px"
                    : undefined,
                lineHeight:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "29.7px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1865px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2240px"
                    : undefined,
              }}
            >
              Hotmart
            </div>
            <div
              className="text-wrapper-22"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "18px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "726px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "872px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "921px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "971px"
                    : screenWidth >= 1500
                    ? "1021px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "0.72px"
                    : undefined,
                lineHeight:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "29.7px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1865px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2240px"
                    : undefined,
              }}
            >
              ZF Friedrichshafen
            </div>
            <div
              className="text-wrapper-23"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "18px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "157px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "189px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "238px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "288px"
                    : screenWidth >= 1500
                    ? "338px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "0.72px"
                    : undefined,
                lineHeight:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "29.7px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1833px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2202px"
                    : undefined,
              }}
            >
              Milton Santana
            </div>
            <div
              className="text-wrapper-24"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "18px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "456px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "548px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "597px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "647px"
                    : screenWidth >= 1500
                    ? "697px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "0.72px"
                    : undefined,
                lineHeight:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "29.7px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1833px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2202px"
                    : undefined,
              }}
            >
              Bruno Vidal
            </div>
            <div
              className="text-wrapper-25"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "18px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "706px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "848px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "897px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "947px"
                    : screenWidth >= 1500
                    ? "997px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "0.72px"
                    : undefined,
                lineHeight:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "29.7px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1833px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2202px"
                    : undefined,
              }}
            >
              Danielle Schmitt Capote
            </div>
            <img
              className="ellipse"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "84px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "176px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "211px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "260px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "310px"
                    : screenWidth >= 1500
                    ? "360px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1742px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2092px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "84px"
                    : undefined,
              }}
              alt="Ellipse"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/ellipse-1-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/ellipse-1.png"
                  : undefined
              }
            />
            <img
              className="ellipse-2"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "84px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "462px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "555px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "604px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "654px"
                    : screenWidth >= 1500
                    ? "704px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1740px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2090px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "84px"
                    : undefined,
              }}
              alt="Ellipse"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/ellipse-2-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/ellipse-2.png"
                  : undefined
              }
            />
            <img
              className="ellipse-3"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "84px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "766px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "920px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "969px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1019px"
                    : screenWidth >= 1500
                    ? "1069px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "1742px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2092px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "84px"
                    : undefined,
              }}
              alt="Ellipse"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/ellipse-3-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/ellipse-3.png"
                  : undefined
              }
            />
            <img
              className="star"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "157px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "188px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "237px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "287px"
                    : screenWidth >= 1500
                    ? "337px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-16-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-2"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "441px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "529px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "578px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "628px"
                    : screenWidth >= 1500
                    ? "678px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-21-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-3"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "720px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "864px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "913px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "963px"
                    : screenWidth >= 1500
                    ? "1013px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-26-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-4"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "182px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "218px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "267px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "317px"
                    : screenWidth >= 1500
                    ? "367px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-17-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-5"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "466px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "559px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "608px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "658px"
                    : screenWidth >= 1500
                    ? "708px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-22-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-6"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "745px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "894px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "943px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "993px"
                    : screenWidth >= 1500
                    ? "1043px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-27-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-7"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "207px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "248px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "297px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "347px"
                    : screenWidth >= 1500
                    ? "397px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-18-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-8"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "491px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "589px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "638px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "688px"
                    : screenWidth >= 1500
                    ? "738px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-23-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-9"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "770px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "924px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "973px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1023px"
                    : screenWidth >= 1500
                    ? "1073px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-28-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-10"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "232px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "278px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "327px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "377px"
                    : screenWidth >= 1500
                    ? "427px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-19-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-11"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "516px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "619px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "668px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "718px"
                    : screenWidth >= 1500
                    ? "768px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-24-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-12"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "795px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "954px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1003px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1053px"
                    : screenWidth >= 1500
                    ? "1103px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-29-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-13"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "257px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "308px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "357px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "407px"
                    : screenWidth >= 1500
                    ? "457px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-20-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-14"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "541px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "649px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "698px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "748px"
                    : screenWidth >= 1500
                    ? "798px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-25-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="star-15"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "16px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "19px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "820px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "984px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1033px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1083px"
                    : screenWidth >= 1500
                    ? "1133px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "2061px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "2476px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "19px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "23px"
                    : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-30-4.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/star-16.png"
                  : undefined
              }
            />
            <img
              className="magma-translation"
              style={{
                height:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "45px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "54px"
                    : undefined,
                left:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "53px"
                    : (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                    ? "64px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "167px"
                    : screenWidth >= 1500
                    ? "185px"
                    : undefined,
                top:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "33px"
                    : (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                    ? "40px"
                    : (screenWidth >= 1400 && screenWidth < 1500) || screenWidth >= 1500
                    ? "55px"
                    : undefined,
                width:
                  screenWidth >= 1000 && screenWidth < 1201
                    ? "162px"
                    : (screenWidth >= 1201 && screenWidth < 1300) ||
                      (screenWidth >= 1300 && screenWidth < 1400) ||
                      (screenWidth >= 1400 && screenWidth < 1500) ||
                      screenWidth >= 1500
                    ? "194px"
                    : undefined,
              }}
              alt="Magma translation"
              src={
                screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/magma-translation-png-6.png"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "/img/magma-translation-png.png"
                  : undefined
              }
            />
          </>
        )}

        <div
          className="frame"
          style={{
            backgroundColor:
              (screenWidth >= 1000 && screenWidth < 1201) ||
              (screenWidth >= 1201 && screenWidth < 1300) ||
              (screenWidth >= 1300 && screenWidth < 1400) ||
              (screenWidth >= 1400 && screenWidth < 1500) ||
              screenWidth >= 1500
                ? "#000000"
                : screenWidth < 1000
                ? "#0536a8"
                : undefined,
            height:
              screenWidth >= 1000 && screenWidth < 1201
                ? "325px"
                : (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500
                ? "390px"
                : screenWidth < 1000
                ? "158px"
                : undefined,
            left:
              (screenWidth >= 1000 && screenWidth < 1201) ||
              (screenWidth >= 1201 && screenWidth < 1300) ||
              (screenWidth >= 1300 && screenWidth < 1400) ||
              (screenWidth >= 1400 && screenWidth < 1500) ||
              screenWidth >= 1500
                ? "1px"
                : screenWidth < 1000
                ? "0"
                : undefined,
            top:
              screenWidth >= 1000 && screenWidth < 1201
                ? "2700px"
                : (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500
                ? "3243px"
                : screenWidth < 1000
                ? "665px"
                : undefined,
            width:
              screenWidth >= 1000 && screenWidth < 1201
                ? "999px"
                : screenWidth >= 1201 && screenWidth < 1300
                ? "1200px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1299px"
                : screenWidth >= 1400 && screenWidth < 1500
                ? "1399px"
                : screenWidth >= 1500
                ? "1499px"
                : screenWidth < 1000
                ? "430px"
                : undefined,
          }}
        >
          {((screenWidth >= 1000 && screenWidth < 1201) ||
            (screenWidth >= 1201 && screenWidth < 1300) ||
            (screenWidth >= 1300 && screenWidth < 1400) ||
            (screenWidth >= 1400 && screenWidth < 1500) ||
            screenWidth >= 1500) && (
            <>
              <p
                className="text-wrapper-26"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "15px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "18px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "160px"
                      : screenWidth >= 1201 && screenWidth < 1300
                      ? "192px"
                      : screenWidth >= 1300 && screenWidth < 1400
                      ? "255px"
                      : screenWidth >= 1400 && screenWidth < 1500
                      ? "304px"
                      : screenWidth >= 1500
                      ? "354px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.60px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.72px"
                      : undefined,
                  lineHeight:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "24.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "29.7px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "94px"
                      : (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                      ? "113px"
                      : screenWidth >= 1400 && screenWidth < 1500
                      ? "98px"
                      : screenWidth >= 1500
                      ? "119px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "679px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "816px"
                      : undefined,
                }}
              >
                MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
                diverse markets around the world.
              </p>
              <p
                className="text-wrapper-27"
                style={{
                  fontSize:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "15px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "18px"
                      : undefined,
                  left:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "160px"
                      : screenWidth >= 1201 && screenWidth < 1300
                      ? "192px"
                      : screenWidth >= 1300 && screenWidth < 1400
                      ? "255px"
                      : screenWidth >= 1400 && screenWidth < 1500
                      ? "304px"
                      : screenWidth >= 1500
                      ? "354px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "0.60px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "0.72px"
                      : undefined,
                  lineHeight:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "24.7px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "29.7px"
                      : undefined,
                  top:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "204px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "245px"
                      : screenWidth >= 1300 && screenWidth < 1400
                      ? "248px"
                      : undefined,
                  width:
                    screenWidth >= 1000 && screenWidth < 1201
                      ? "440px"
                      : (screenWidth >= 1201 && screenWidth < 1300) ||
                        (screenWidth >= 1300 && screenWidth < 1400) ||
                        (screenWidth >= 1400 && screenWidth < 1500) ||
                        screenWidth >= 1500
                      ? "529px"
                      : undefined,
                }}
              >
                Magma Translation | All rights reserved. ©Magma™
              </p>
            </>
          )}

          {screenWidth < 1000 && <div className="click-to-discover">CLICK TO DISCOVER</div>}
        </div>
        {screenWidth < 1000 && (
          <img className="magma-translation-2" alt="Magma translation" src="/img/magma-translation-png.png" />
        )}
      </div>
    </div>
  );
};
