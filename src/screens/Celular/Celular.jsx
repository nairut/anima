import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import { Star22 } from "../../icons/Star22";
import "./style.css";

export const Celular = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="celular">
      <div
        className="div-2"
        style={{
          border:
            screenWidth < 744
              ? "1px none"
              : screenWidth >= 744 && screenWidth < 1000
              ? "0.61px none"
              : screenWidth >= 1000 && screenWidth < 1201
              ? "0.83px none"
              : (screenWidth >= 1201 && screenWidth < 1300) ||
                (screenWidth >= 1300 && screenWidth < 1400) ||
                (screenWidth >= 1400 && screenWidth < 1500) ||
                screenWidth >= 1500
              ? "0.99px none"
              : undefined,
          height:
            screenWidth < 744
              ? "912px"
              : screenWidth >= 744 && screenWidth < 1000
              ? "2250.58px"
              : screenWidth >= 1000 && screenWidth < 1201
              ? "3024.98px"
              : (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
              ? "3796px"
              : (screenWidth >= 1400 && screenWidth < 1500) || screenWidth >= 1500
              ? "3751px"
              : undefined,
          width:
            screenWidth < 744
              ? "430px"
              : screenWidth >= 744 && screenWidth < 1000
              ? "744px"
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
        {screenWidth < 744 && (
          <>
            <h1 className="text-wrapper-6">Professional Translation Services</h1>
            <p className="element-languages-that">
              120 languages that fits in your budget
              <br />
              High Quality Human Translation
              <br />
              Linguists with Master&#39;s Degrees
            </p>
            <Link className="click-to-discover-wrapper" to="/cell-form">
              <div className="click-to-discover">CLICK TO DISCOVER</div>
            </Link>
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1201) ||
          (screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500 ||
          (screenWidth >= 744 && screenWidth < 1000)) && (
          <>
            <Lady
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-2"
              } ${screenWidth >= 1201 && screenWidth < 1300 && "class-3"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-4"
              } ${screenWidth >= 1500 && "class-5"} ${screenWidth >= 1400 && screenWidth < 1500 && "class-6"}`}
            />
            <p
              className="p"
              style={{
                fontSize:
                  (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500
                    ? "37.7px"
                    : screenWidth >= 744 && screenWidth < 1000
                    ? "23.4px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "31.4px"
                    : undefined,
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "347px"
                    : screenWidth >= 744 && screenWidth < 1000
                    ? "154px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "206px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "248px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "297px"
                    : screenWidth >= 1500
                    ? "397px"
                    : undefined,
                letterSpacing:
                  (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500
                    ? "1.51px"
                    : screenWidth >= 744 && screenWidth < 1000
                    ? "0.93px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1.26px"
                    : undefined,
                top:
                  (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500
                    ? "736px"
                    : screenWidth >= 744 && screenWidth < 1000
                    ? "456px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "613px"
                    : undefined,
                width:
                  (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500
                    ? "706px"
                    : screenWidth >= 744 && screenWidth < 1000
                    ? "437px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "588px"
                    : undefined,
              }}
            >
              Trusted by Elite Businesses Worldwide
            </p>
            <p
              className="text-wrapper-7"
              style={{
                fontSize:
                  (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500
                    ? "37px"
                    : screenWidth >= 744 && screenWidth < 1000
                    ? "22.9px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "30.8px"
                    : undefined,
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "287px"
                    : screenWidth >= 744 && screenWidth < 1000
                    ? "116px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "157px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "188px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "237px"
                    : screenWidth >= 1500
                    ? "337px"
                    : undefined,
                letterSpacing:
                  (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500
                    ? "1.48px"
                    : screenWidth >= 744 && screenWidth < 1000
                    ? "0.92px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1.23px"
                    : undefined,
                top:
                  (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500
                    ? "1215px"
                    : screenWidth >= 744 && screenWidth < 1000
                    ? "753px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1012px"
                    : undefined,
                width:
                  (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500
                    ? "853px"
                    : screenWidth >= 744 && screenWidth < 1000
                    ? "528px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "710px"
                    : undefined,
              }}
            >
              Costumized to Fit your Specific Industry Needs
            </p>
          </>
        )}

        <img
          className="zapier-png"
          style={{
            height:
              (screenWidth >= 1201 && screenWidth < 1300) ||
              (screenWidth >= 1300 && screenWidth < 1400) ||
              (screenWidth >= 1400 && screenWidth < 1500) ||
              screenWidth >= 1500
                ? "70px"
                : screenWidth < 744
                ? "54px"
                : screenWidth >= 744 && screenWidth < 1000
                ? "115px"
                : screenWidth >= 1000 && screenWidth < 1201
                ? "155px"
                : undefined,
            left:
              screenWidth >= 1201 && screenWidth < 1300
                ? "102px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : screenWidth >= 1500
                ? "251px"
                : screenWidth < 744
                ? "118px"
                : screenWidth >= 744 && screenWidth < 1000
                ? "63px"
                : screenWidth >= 1000 && screenWidth < 1201
                ? "85px"
                : screenWidth >= 1400 && screenWidth < 1500
                ? "201px"
                : undefined,
            top:
              (screenWidth >= 1201 && screenWidth < 1300) ||
              (screenWidth >= 1300 && screenWidth < 1400) ||
              (screenWidth >= 1400 && screenWidth < 1500) ||
              screenWidth >= 1500
                ? "837px"
                : screenWidth < 744
                ? "34px"
                : screenWidth >= 744 && screenWidth < 1000
                ? "519px"
                : screenWidth >= 1000 && screenWidth < 1201
                ? "697px"
                : undefined,
            width:
              (screenWidth >= 1201 && screenWidth < 1300) ||
              (screenWidth >= 1300 && screenWidth < 1400) ||
              (screenWidth >= 1400 && screenWidth < 1500) ||
              screenWidth >= 1500
                ? "101px"
                : screenWidth < 744
                ? "194px"
                : screenWidth >= 744 && screenWidth < 1000
                ? "618px"
                : screenWidth >= 1000 && screenWidth < 1201
                ? "830px"
                : undefined,
          }}
          alt="Zapier png"
          src={
            (screenWidth >= 1201 && screenWidth < 1300) ||
            (screenWidth >= 1300 && screenWidth < 1400) ||
            (screenWidth >= 1400 && screenWidth < 1500) ||
            screenWidth >= 1500
              ? "/img/zapier-png-0.png"
              : screenWidth < 744
              ? "/img/magma-translation-png-1.png"
              : screenWidth >= 744 && screenWidth < 1000
              ? "/img/group-8.png"
              : screenWidth >= 1000 && screenWidth < 1201
              ? "/img/group-8-1.png"
              : undefined
          }
        />
        {((screenWidth >= 1000 && screenWidth < 1201) || (screenWidth >= 744 && screenWidth < 1000)) && (
          <>
            <div
              className="overlap-6"
              style={{
                backgroundImage:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "url(/img/rectangle-19.svg)"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "url(/img/rectangle-19-1.svg)"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "40px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "53px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "816px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-8"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "32px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "42px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "61px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : undefined,
                }}
              >
                Legal
              </div>
              <img
                className="law"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "35px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "19px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "26px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Law"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/law.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/law-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-7"
              style={{
                backgroundImage:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "url(/img/rectangle-36.svg)"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "url(/img/rectangle-36-1.svg)"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "40px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "53px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "944px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="media-films"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "5px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "7px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "59px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "79px"
                      : undefined,
                }}
              >
                Media &amp; Films
              </div>
              <img
                className="next"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "35px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "17px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Next"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/next.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/next-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-8"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "154px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "206px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "816px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-9"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "23px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "31px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "61px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : undefined,
                }}
              >
                Medical
              </div>
              <img
                className="medical-bag"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "35px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "17px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Medical bag"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/medical-bag.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/medical-bag-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-9"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "154px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "206px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "944px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-10"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "15px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "20px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "61px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : undefined,
                }}
              >
                E-Learning
              </div>
              <img
                className="MBA"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "35px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "17px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Mba"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/mba.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/mba-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-10"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "268px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "360px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "816px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-11"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "2px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "3px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "61px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : undefined,
                }}
              >
                Manufacturing
              </div>
              <img
                className="manufacturing"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "35px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "17px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Manufacturing"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/manufacturing.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/manufacturing-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-11"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "268px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "360px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "944px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-12"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "61px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : undefined,
                }}
              >
                Automotive
              </div>
              <img
                className="tesla-model-x"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "35px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "17px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Tesla model x"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/tesla-model-x.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/tesla-model-x-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-12"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "382px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "513px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "816px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-13"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "20px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "27px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "61px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : undefined,
                }}
              >
                Financial
              </div>
              <img
                className="money-bag-pounds"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "30px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "17px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Money bag pounds"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/money-bag-pounds.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/money-bag-pounds-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-13"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "382px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "513px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "944px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-14"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "16px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "22px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "63px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "85px"
                      : undefined,
                }}
              >
                Marketing
              </div>
              <img
                className="commercial"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "35px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "17px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Commercial"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/commercial.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/commercial-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-14"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "496px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "666px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "816px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="IT-software"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "2px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "3px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "61px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : undefined,
                }}
              >
                IT &amp; Software
              </div>
              <img
                className="programming-flag"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "35px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "17px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Programming flag"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/programming-flag.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/programming-flag-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-15"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "496px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "666px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "944px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-15"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "7px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "10px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "61px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : undefined,
                }}
              >
                Life Science
              </div>
              <img
                className="biotech"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "35px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "17px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Biotech"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/biotech.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/biotech-2.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-16"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "610px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "819px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "816px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1097px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-16"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "20px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "27px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "61px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : undefined,
                }}
              >
                Tourism
              </div>
              <img
                className="plane"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "35px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "17px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Plane"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/plane.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/plane-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-17"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "86px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "116px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "610px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "819px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "944px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1269px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "94px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-17"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12.4px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "16.7px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "10px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "13px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.50px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.67px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "61px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : undefined,
                }}
              >
                E-commerce
              </div>
              <img
                className="buy"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "35px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "47px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "17px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Buy"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/buy.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/buy-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="text-wrapper-18"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "23.4px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "31.4px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "226px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "304px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.93px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1.26px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1605px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "2157px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "290px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "390px"
                    : undefined,
              }}
            >
              What can you translate?
            </div>
            <p
              className="text-wrapper-19"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "12.4px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "16.7px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "80px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "107px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.50px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.67px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "16.7px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "22.5px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1695px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "2278px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "582px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "782px"
                    : undefined,
              }}
            >
              Our proficient translators have the capability to translate any kind of document, supporting the
              undermentioned file types
            </p>
            <div
              className="overlap-18"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "127px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "40px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "53px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1766px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "85px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : undefined,
              }}
            >
              <div
                className="document-translation"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "10.5px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "19px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "26px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.42px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "63px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "84px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "66px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "88px"
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
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "30px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Pdf"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/pdf.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/pdf-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-19"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "127px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "156px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "210px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1766px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "85px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : undefined,
              }}
            >
              <div
                className="marketing-material"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "10.5px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "13px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "18px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.42px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "63px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "84px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "58px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "77px"
                      : undefined,
                }}
              >
                Marketing Material &amp; Ads
              </div>
              <img
                className="goal"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "30px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Goal"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/goal.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/goal-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-group-3"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "127px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "273px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "366px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1766px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "85px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : undefined,
              }}
            >
              <div
                className="website-apps"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "10.5px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "22px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "29px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.42px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "63px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "84px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "48px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "64px"
                      : undefined,
                }}
              >
                Website &amp; Apps
              </div>
              <img
                className="website"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "30px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Website"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/website.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/website-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-20"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "127px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "389px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "523px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1766px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "85px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-20"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "10.5px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "18px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "24px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.42px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "63px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "84px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "60px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "81px"
                      : undefined,
                }}
              >
                Video Subtitling
              </div>
              <img
                className="video-camera"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "30px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Video camera"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/video-camera.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/video-camera-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-21"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "127px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "505px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "679px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1766px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "85px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-21"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "10.5px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "11px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "15px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.42px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "63px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "84px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "72px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "97px"
                      : undefined,
                }}
              >
                Product Descriptions
              </div>
              <img
                className="e-commerce"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "30px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "41px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="E commerce"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/e-commerce.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/e-commerce-1.png"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap-22"
              style={{
                border:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.62px solid"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.83px solid"
                    : undefined,
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "127px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "171px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "619px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "832px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1766px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "2374px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "85px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "115px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-22"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "10.5px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "14.2px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "12px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "17px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.42px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.57px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "61px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "82px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "72px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "97px"
                      : undefined,
                }}
              >
                Articles, certificates, and more
              </div>
              <img
                className="img"
                style={{
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  left:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "25px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "34px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "24px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "32px"
                      : undefined,
                }}
                alt="Biotech"
                src={
                  screenWidth >= 744 && screenWidth < 1000
                    ? "/img/biotech-1.png"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "/img/biotech-3.png"
                    : undefined
                }
              />
            </div>
            <div
              className="group-5"
              style={{
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "250px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "336px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "40px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "53px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "116px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "156px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "431px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "578px"
                    : undefined,
              }}
            >
              <h1
                className="text-wrapper-23"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "37.1px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "49.8px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "1.48px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "1.99px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "371px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "499px"
                      : undefined,
                }}
              >
                Professional Translation Services
              </h1>
              <p
                className="element-languages-that-2"
                style={{
                  fontSize:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "13.3px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "17.9px"
                      : undefined,
                  height:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "81px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "108px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "0.40px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "0.54px"
                      : undefined,
                  lineHeight:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "26.7px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "35.9px"
                      : undefined,
                  top:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "112px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "151px"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "427px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "574px"
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
                className={`${screenWidth >= 744 && screenWidth < 1000 && "class-9"} ${
                  screenWidth >= 1000 && screenWidth < 1201 && "class-10"
                }`}
                property1="default"
                talkToAnExpertClassName={`${screenWidth >= 744 && screenWidth < 1000 && "class-7"} ${
                  screenWidth >= 1000 && screenWidth < 1201 && "class-8"
                }`}
                to="/desktop-form"
              />
            </div>
            <Group
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-11"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-12"
              }`}
              property1="default"
              talkToAnExpertClassName={`${screenWidth >= 744 && screenWidth < 1000 && "class-7"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-8"
              }`}
              to="/desktop-form"
            />
            <Group
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-13"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-14"
              }`}
              property1="default"
              talkToAnExpertClassName={`${screenWidth >= 744 && screenWidth < 1000 && "class-7"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-8"
              }`}
              to="/desktop-form"
            />
            <p
              className="our-growth-would-not"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "9.9px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "13.3px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "72px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "97px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.40px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.53px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "16.4px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "22.0px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1431px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1923px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "177px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "237px"
                    : undefined,
              }}
            >
              Our Growth would not have been possible without Magma Translation. <br />
              Our internationalization occurred through the expertise of their team.
            </p>
            <p
              className="text-wrapper-24"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "9.9px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "13.3px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "282px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "379px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.40px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.53px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "16.3px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "21.8px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1430px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1923px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "177px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "237px"
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
                  screenWidth >= 744 && screenWidth < 1000
                    ? "9.9px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "13.3px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "490px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "659px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.40px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.53px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "9.9px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "13.3px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1430px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1923px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "177px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "237px"
                    : undefined,
              }}
            >
              <span
                className="text_wrapper"
                style={{
                  lineHeight:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "13.2px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "17.8px"
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
                    screenWidth >= 744 && screenWidth < 1000
                      ? "16.3px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "21.8px"
                      : undefined,
                }}
              >
                essential
              </span>
              <span
                className="text_wrapper"
                style={{
                  lineHeight:
                    screenWidth >= 744 && screenWidth < 1000
                      ? "13.2px"
                      : screenWidth >= 1000 && screenWidth < 1201
                      ? "17.8px"
                      : undefined,
                }}
              >
                . Magma Translation is a trusted company.
              </span>
            </p>
            <div
              className="text-wrapper-25"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "22.9px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "30.8px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "204px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "275px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.92px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1.23px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1187px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1595px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "333px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "447px"
                    : undefined,
              }}
            >
              Highest Quality Guaranteed
            </div>
            <p
              className="every-translation"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "12.4px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "16.7px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "125px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "167px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.50px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.67px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "16.7px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "22.5px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1235px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1660px"
                    : undefined,
              }}
            >
              Every translation undergoes thorough proofreading and validation by <br />
              both our team of professional external editors and our internal language specialists.
            </p>
            <div
              className="text-wrapper-26"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "11.2px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "124px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "167px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.45px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "18.4px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1388px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1865px"
                    : undefined,
              }}
            >
              Shopee.com
            </div>
            <div
              className="text-wrapper-27"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "11.2px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "348px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "468px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.45px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "18.4px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1388px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1865px"
                    : undefined,
              }}
            >
              Hotmart
            </div>
            <div
              className="text-wrapper-28"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "11.2px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "540px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "726px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.45px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "18.4px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1388px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1865px"
                    : undefined,
              }}
            >
              ZF Friedrichshafen
            </div>
            <div
              className="text-wrapper-29"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "11.2px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "117px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "157px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.45px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "18.4px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1364px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1833px"
                    : undefined,
              }}
            >
              Milton Santana
            </div>
            <div
              className="text-wrapper-30"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "11.2px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "339px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "456px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.45px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "18.4px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1364px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1833px"
                    : undefined,
              }}
            >
              Bruno Vidal
            </div>
            <div
              className="text-wrapper-31"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "11.2px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "15px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "525px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "706px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.45px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.60px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "18.4px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "24.7px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1364px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1833px"
                    : undefined,
              }}
            >
              Danielle Schmitt Capote
            </div>
            <img
              className="ellipse"
              style={{
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "52px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "131px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "176px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1296px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1742px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "52px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : undefined,
              }}
              alt="Ellipse"
              src={
                screenWidth >= 744 && screenWidth < 1000
                  ? "/img/ellipse-1.png"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/ellipse-1-1.png"
                  : undefined
              }
            />
            <img
              className="ellipse-2"
              style={{
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "52px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "344px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "462px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1295px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1740px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "52px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : undefined,
              }}
              alt="Ellipse"
              src={
                screenWidth >= 744 && screenWidth < 1000
                  ? "/img/ellipse-2.png"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/ellipse-2-1.png"
                  : undefined
              }
            />
            <img
              className="ellipse-3"
              style={{
                height:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "52px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "570px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "766px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "1296px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "1742px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "52px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "70px"
                    : undefined,
              }}
              alt="Ellipse"
              src={
                screenWidth >= 744 && screenWidth < 1000
                  ? "/img/ellipse-3.png"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/ellipse-3-1.png"
                  : undefined
              }
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-15"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-16"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-17"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-18"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-19"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-20"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-21"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-22"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-23"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-24"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-25"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-26"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-27"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-28"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-29"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-30"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-31"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-32"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-33"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-34"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-35"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-36"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-37"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-38"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-39"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-40"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-41"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-42"
              }`}
            />
            <Star22
              className={`${screenWidth >= 744 && screenWidth < 1000 && "class-43"} ${
                screenWidth >= 1000 && screenWidth < 1201 && "class-44"
              }`}
            />
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1201) ||
          (screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500 ||
          (screenWidth >= 744 && screenWidth < 1000)) && (
          <img
            className="magma-translation-2"
            style={{
              height:
                screenWidth >= 744 && screenWidth < 1000
                  ? "33px"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "45px"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "70px"
                  : undefined,
              left:
                screenWidth >= 744 && screenWidth < 1000
                  ? "40px"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "53px"
                  : screenWidth >= 1201 && screenWidth < 1300
                  ? "102px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "151px"
                  : screenWidth >= 1500
                  ? "251px"
                  : screenWidth >= 1400 && screenWidth < 1500
                  ? "201px"
                  : undefined,
              top:
                screenWidth >= 744 && screenWidth < 1000
                  ? "25px"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "33px"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "953px"
                  : undefined,
              width:
                screenWidth >= 744 && screenWidth < 1000
                  ? "120px"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "162px"
                  : (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1300 && screenWidth < 1400) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                  ? "101px"
                  : undefined,
            }}
            alt="Magma translation"
            src={
              screenWidth >= 744 && screenWidth < 1000
                ? "/img/magma-translation-png-3.png"
                : screenWidth >= 1000 && screenWidth < 1201
                ? "/img/magma-translation-png-5.png"
                : (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500) ||
                  screenWidth >= 1500
                ? "/img/abbott-png-0.png"
                : undefined
            }
          />
        )}

        {((screenWidth >= 1000 && screenWidth < 1201) || (screenWidth >= 744 && screenWidth < 1000)) && (
          <>
            <p
              className="text-wrapper-32"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "12.6px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "16.3px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "87px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "127px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.50px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.65px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "20.8px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "26.8px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "2118px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "2849px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "572px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "737px"
                    : undefined,
              }}
            >
              MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
              diverse markets around the world.
            </p>
            <p
              className="text-wrapper-33"
              style={{
                fontSize:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "12.6px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "16.3px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "219px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "297px"
                    : undefined,
                letterSpacing:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "0.50px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "0.65px"
                    : undefined,
                lineHeight:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "20.8px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "26.8px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "2198px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "2952px"
                    : undefined,
                width:
                  screenWidth >= 744 && screenWidth < 1000
                    ? "311px"
                    : screenWidth >= 1000 && screenWidth < 1201
                    ? "401px"
                    : undefined,
              }}
            >
              Magma Translation | All rights reserved. ©Magma™
            </p>
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1201) ||
          (screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500 ||
          (screenWidth >= 744 && screenWidth < 1000)) && (
          <img
            className="zf-png"
            style={{
              height:
                (screenWidth >= 1201 && screenWidth < 1300) ||
                (screenWidth >= 1300 && screenWidth < 1400) ||
                (screenWidth >= 1400 && screenWidth < 1500) ||
                screenWidth >= 1500
                  ? "70px"
                  : screenWidth >= 744 && screenWidth < 1000
                  ? "38px"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "49px"
                  : undefined,
              left:
                screenWidth >= 1201 && screenWidth < 1300
                  ? "230px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "279px"
                  : screenWidth >= 1500
                  ? "379px"
                  : screenWidth >= 744 && screenWidth < 1000
                  ? "305px"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "408px"
                  : screenWidth >= 1400 && screenWidth < 1500
                  ? "329px"
                  : undefined,
              top:
                (screenWidth >= 1201 && screenWidth < 1300) ||
                (screenWidth >= 1300 && screenWidth < 1400) ||
                (screenWidth >= 1400 && screenWidth < 1500) ||
                screenWidth >= 1500
                  ? "837px"
                  : screenWidth >= 744 && screenWidth < 1000
                  ? "2031px"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "2737px"
                  : undefined,
              width:
                (screenWidth >= 1201 && screenWidth < 1300) ||
                (screenWidth >= 1300 && screenWidth < 1400) ||
                (screenWidth >= 1400 && screenWidth < 1500) ||
                screenWidth >= 1500
                  ? "101px"
                  : screenWidth >= 744 && screenWidth < 1000
                  ? "136px"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "175px"
                  : undefined,
            }}
            alt="Zf png"
            src={
              (screenWidth >= 1201 && screenWidth < 1300) ||
              (screenWidth >= 1300 && screenWidth < 1400) ||
              (screenWidth >= 1400 && screenWidth < 1500) ||
              screenWidth >= 1500
                ? "/img/zf-png-0.png"
                : screenWidth >= 744 && screenWidth < 1000
                ? "/img/magma-translation-png-4.png"
                : screenWidth >= 1000 && screenWidth < 1201
                ? "/img/magma-translation-png-6.png"
                : undefined
            }
          />
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <img
            className="anton-paar-png"
            style={{
              left:
                screenWidth >= 1201 && screenWidth < 1300
                  ? "230px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "279px"
                  : screenWidth >= 1500
                  ? "379px"
                  : screenWidth >= 1400 && screenWidth < 1500
                  ? "329px"
                  : undefined,
            }}
            alt="Anton paar png"
            src="/img/anton-paar-png-0.png"
          />
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <img
              className="crowdin-png"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "457px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "358px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "407px"
                    : screenWidth >= 1500
                    ? "507px"
                    : undefined,
              }}
              alt="Crowdin png"
              src="/img/crowdin-png-0.png"
            />
            <img
              className="rectangle-5"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "457px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "358px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "407px"
                    : screenWidth >= 1500
                    ? "507px"
                    : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-13.png"
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <img
              className="cloudwords-png"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "486px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "535px"
                    : screenWidth >= 1500
                    ? "635px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "585px"
                    : undefined,
              }}
              alt="Cloudwords png"
              src="/img/cloudwords-png-0.png"
            />
            <img
              className="rectangle-7"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "486px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "535px"
                    : screenWidth >= 1500
                    ? "635px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "585px"
                    : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-14.png"
            />
            <img
              className="rectangle-8"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "614px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "663px"
                    : screenWidth >= 1500
                    ? "763px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "713px"
                    : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-7.png"
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <img
              className="rectangle-9"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "713px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "614px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "663px"
                    : screenWidth >= 1500
                    ? "763px"
                    : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-15.png"
            />
            <img
              className="rectangle-10"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "841px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "742px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "791px"
                    : screenWidth >= 1500
                    ? "891px"
                    : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-8.png"
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <img
              className="evoltz-png"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "742px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "791px"
                    : screenWidth >= 1500
                    ? "891px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "841px"
                    : undefined,
              }}
              alt="Evoltz png"
              src="/img/evoltz-png-0.png"
            />
            <img
              className="rectangle-11"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "864px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "913px"
                    : screenWidth >= 1500
                    ? "1013px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "963px"
                    : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-9.png"
            />
            <img
              className="jungheinrich-png"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "870px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "919px"
                    : screenWidth >= 1500
                    ? "1019px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "969px"
                    : undefined,
              }}
              alt="Jungheinrich png"
              src="/img/jungheinrich-png-0.png"
            />
            <img
              className="rectangle-12"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "984px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1033px"
                    : screenWidth >= 1500
                    ? "1133px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1083px"
                    : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-10.png"
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <img
              className="shopee-png"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "1097px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "998px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1047px"
                    : screenWidth >= 1500
                    ? "1147px"
                    : undefined,
              }}
              alt="Shopee png"
              src="/img/shopee-png-0.png"
            />
            <div
              className="overlap-23"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "163px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "64px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "113px"
                    : screenWidth >= 1500
                    ? "213px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-34">Legal</div>
              <img className="law-2" alt="Law" src="/img/law-2.png" />
            </div>
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <div
              className="overlap-24"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "64px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "113px"
                    : screenWidth >= 1500
                    ? "213px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "163px"
                    : undefined,
              }}
            >
              <div className="media-films-2">Media &amp; Films</div>
              <img className="next-2" alt="Next" src="/img/next-2.png" />
            </div>
            <div
              className="overlap-25"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "248px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "297px"
                    : screenWidth >= 1500
                    ? "397px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "347px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-35">Medical</div>
              <img className="img-2" alt="Medical bag" src="/img/medical-bag-2.png" />
            </div>
            <div
              className="overlap-26"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "248px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "297px"
                    : screenWidth >= 1500
                    ? "397px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "347px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-36">E-Learning</div>
              <img className="img-2" alt="Mba" src="/img/mba-2.png" />
            </div>
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <div
              className="overlap-27"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "531px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "432px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "481px"
                    : screenWidth >= 1500
                    ? "581px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-37">Manufacturing</div>
              <img className="img-2" alt="Manufacturing" src="/img/manufacturing-2.png" />
            </div>
            <div
              className="overlap-28"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "531px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "432px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "481px"
                    : screenWidth >= 1500
                    ? "581px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-38">Automotive</div>
              <img className="img-2" alt="Tesla model x" src="/img/tesla-model-x-2.png" />
            </div>
            <div
              className="overlap-29"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "715px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "616px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "665px"
                    : screenWidth >= 1500
                    ? "765px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-39">Financial</div>
              <img className="money-bag-pounds-2" alt="Money bag pounds" src="/img/money-bag-pounds-2.png" />
            </div>
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <div
              className="overlap-30"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "616px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "665px"
                    : screenWidth >= 1500
                    ? "765px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "715px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-40">Marketing</div>
              <img className="img-2" alt="Commercial" src="/img/commercial-2.png" />
            </div>
            <div
              className="overlap-31"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "800px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "849px"
                    : screenWidth >= 1500
                    ? "949px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "899px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-37">IT &amp; Software</div>
              <img className="img-2" alt="Programming flag" src="/img/programming-flag-2.png" />
            </div>
            <div
              className="overlap-32"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "800px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "849px"
                    : screenWidth >= 1500
                    ? "949px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "899px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-41">Life Science</div>
              <img className="img-2" alt="Biotech" src="/img/biotech-4.png" />
            </div>
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <div
              className="overlap-33"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "1083px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "984px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1033px"
                    : screenWidth >= 1500
                    ? "1133px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-39">Tourism</div>
              <img className="img-2" alt="Plane" src="/img/plane-2.png" />
            </div>
            <div
              className="overlap-34"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "1083px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "984px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1033px"
                    : screenWidth >= 1500
                    ? "1133px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-42">E-commerce</div>
              <img className="img-2" alt="Buy" src="/img/buy-2.png" />
            </div>
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <div
              className="text-wrapper-43"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "365px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "414px"
                    : screenWidth >= 1500
                    ? "514px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "464px"
                    : undefined,
              }}
            >
              What can you translate?
            </div>
            <p
              className="text-wrapper-44"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "129px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "178px"
                    : screenWidth >= 1500
                    ? "278px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "228px"
                    : undefined,
              }}
            >
              Our proficient translators have the capability to translate any kind of document, supporting the
              undermentioned file types
            </p>
            <div
              className="overlap-35"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "64px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "113px"
                    : screenWidth >= 1500
                    ? "213px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "163px"
                    : undefined,
              }}
            >
              <div className="document-translation-2">
                Document
                <br />
                Translation
              </div>
              <img className="img-3" alt="Pdf" src="/img/pdf-2.png" />
            </div>
            <div
              className="overlap-36"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "252px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "301px"
                    : screenWidth >= 1500
                    ? "401px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "351px"
                    : undefined,
              }}
            >
              <div className="marketing-material-2">Marketing Material &amp; Ads</div>
              <img className="img-3" alt="Goal" src="/img/goal-2.png" />
            </div>
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <div
              className="overlap-37"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "539px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "440px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "489px"
                    : screenWidth >= 1500
                    ? "589px"
                    : undefined,
              }}
            >
              <div className="website-apps-2">Website &amp; Apps</div>
              <img className="img-3" alt="Website" src="/img/website-2.png" />
            </div>
            <div
              className="overlap-38"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "727px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "628px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "677px"
                    : screenWidth >= 1500
                    ? "777px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-45">Video Subtitling</div>
              <img className="img-3" alt="Video camera" src="/img/video-camera-2.png" />
            </div>
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <div
              className="overlap-group-4"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "816px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "865px"
                    : screenWidth >= 1500
                    ? "965px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "915px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-46">Product Descriptions</div>
              <img className="img-3" alt="E commerce" src="/img/e-commerce-2.png" />
            </div>
            <div
              className="overlap-39"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "999px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1048px"
                    : screenWidth >= 1500
                    ? "1148px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1098px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-47">Articles, certificates, and more</div>
              <img className="biotech-2" alt="Biotech" src="/img/biotech-4.png" />
            </div>
            <div
              className="group-6"
              style={{
                left:
                  (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                    ? "64px"
                    : screenWidth >= 1500
                    ? "180px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "172px"
                    : undefined,
                top:
                  (screenWidth >= 1201 && screenWidth < 1300) ||
                  (screenWidth >= 1300 && screenWidth < 1400) ||
                  (screenWidth >= 1400 && screenWidth < 1500)
                    ? "187px"
                    : screenWidth >= 1500
                    ? "205px"
                    : undefined,
              }}
            >
              <h1 className="text-wrapper-48">Professional Translation Services</h1>
              <p className="element-languages-that-3">
                120 languages that fits in your budget
                <br />
                Human Translation done with the highest quality in the market
                <br />
                Linguists with Master&#39;s Degrees
              </p>
              <Group
                className="group-2-instance"
                property1="default"
                talkToAnExpertClassName="group-instance"
                to="/desktop-form"
              />
            </div>
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <Group
              className={`${screenWidth >= 1400 && screenWidth < 1500 && "class-45"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-46"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-47"} ${screenWidth >= 1500 && "class-48"}`}
              property1="default"
              talkToAnExpertClassName="group-instance"
              to="/desktop-form"
            />
            <Group
              className={`${screenWidth >= 1400 && screenWidth < 1500 && "class-49"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-50"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-51"} ${screenWidth >= 1500 && "class-52"}`}
              property1="default"
              talkToAnExpertClassName="group-instance"
              to="/desktop-form"
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <p
              className="our-growth-would-not-2"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "117px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "166px"
                    : screenWidth >= 1500
                    ? "266px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "216px"
                    : undefined,
              }}
            >
              Our Growth would not have been possible without Magma Translation. <br />
              Our internationalization occurred through the expertise of their team.
            </p>
            <p
              className="text-wrapper-49"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "455px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "504px"
                    : screenWidth >= 1500
                    ? "604px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "554px"
                    : undefined,
              }}
            >
              What we were looking for in Magma was the cultural localization, their deep understanding of how people
              think in other countries, specially of the US, UK and Germany for our projects
            </p>
            <p
              className="we-are-a-german-2"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "791px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "840px"
                    : screenWidth >= 1500
                    ? "940px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "890px"
                    : undefined,
              }}
            >
              <span className="span">
                We are a German company, the largest auto parts manufacturer in the world. For us, trust in data
                security is{" "}
              </span>
              <span className="text-wrapper-50">essential</span>
              <span className="span">. Magma Translation is a trusted company.</span>
            </p>
            <div
              className="text-wrapper-51"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "330px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "379px"
                    : screenWidth >= 1500
                    ? "479px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "429px"
                    : undefined,
              }}
            >
              Highest Quality Guaranteed
            </div>
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <p
              className="every-translation-2"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "300px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "201px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "250px"
                    : screenWidth >= 1500
                    ? "350px"
                    : undefined,
              }}
            >
              Every translation undergoes thorough proofreading and validation by <br />
              both our team of professional external editors and our internal language specialists.
            </p>
            <div
              className="text-wrapper-52"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "299px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "200px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "249px"
                    : screenWidth >= 1500
                    ? "349px"
                    : undefined,
              }}
            >
              Shopee.com
            </div>
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <div
              className="text-wrapper-53"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "562px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "611px"
                    : screenWidth >= 1500
                    ? "711px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "661px"
                    : undefined,
              }}
            >
              Hotmart
            </div>
            <div
              className="text-wrapper-54"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "872px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "921px"
                    : screenWidth >= 1500
                    ? "1021px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "971px"
                    : undefined,
              }}
            >
              ZF Friedrichshafen
            </div>
            <div
              className="text-wrapper-55"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "189px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "238px"
                    : screenWidth >= 1500
                    ? "338px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "288px"
                    : undefined,
              }}
            >
              Milton Santana
            </div>
            <div
              className="text-wrapper-56"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "548px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "597px"
                    : screenWidth >= 1500
                    ? "697px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "647px"
                    : undefined,
              }}
            >
              Bruno Vidal
            </div>
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <div
              className="text-wrapper-57"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "947px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "848px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "897px"
                    : screenWidth >= 1500
                    ? "997px"
                    : undefined,
              }}
            >
              Danielle Schmitt Capote
            </div>
            <img
              className="ellipse-4"
              style={{
                left:
                  screenWidth >= 1400 && screenWidth < 1500
                    ? "310px"
                    : screenWidth >= 1201 && screenWidth < 1300
                    ? "211px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "260px"
                    : screenWidth >= 1500
                    ? "360px"
                    : undefined,
              }}
              alt="Ellipse"
              src="/img/ellipse-1-2.png"
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <img
              className="ellipse-5"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "555px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "604px"
                    : screenWidth >= 1500
                    ? "704px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "654px"
                    : undefined,
              }}
              alt="Ellipse"
              src="/img/ellipse-2-2.png"
            />
            <img
              className="ellipse-6"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "920px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "969px"
                    : screenWidth >= 1500
                    ? "1069px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1019px"
                    : undefined,
              }}
              alt="Ellipse"
              src="/img/ellipse-3-2.png"
            />
            <Star22
              className={`${screenWidth >= 1201 && screenWidth < 1300 && "class-53"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-54"
              } ${screenWidth >= 1500 && "class-55"} ${screenWidth >= 1400 && screenWidth < 1500 && "class-56"}`}
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <Star22
              className={`${screenWidth >= 1400 && screenWidth < 1500 && "class-57"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-58"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-59"} ${screenWidth >= 1500 && "class-60"}`}
            />
            <Star22
              className={`${screenWidth >= 1400 && screenWidth < 1500 && "class-61"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-62"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-63"} ${screenWidth >= 1500 && "class-64"}`}
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <Star22
              className={`${screenWidth >= 1201 && screenWidth < 1300 && "class-65"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-66"
              } ${screenWidth >= 1500 && "class-67"} ${screenWidth >= 1400 && screenWidth < 1500 && "class-68"}`}
            />
            <Star22
              className={`${screenWidth >= 1201 && screenWidth < 1300 && "class-69"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-70"
              } ${screenWidth >= 1500 && "class-71"} ${screenWidth >= 1400 && screenWidth < 1500 && "class-72"}`}
            />
            <Star22
              className={`${screenWidth >= 1201 && screenWidth < 1300 && "class-73"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-74"
              } ${screenWidth >= 1500 && "class-75"} ${screenWidth >= 1400 && screenWidth < 1500 && "class-76"}`}
            />
            <Star22
              className={`${screenWidth >= 1201 && screenWidth < 1300 && "class-77"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-78"
              } ${screenWidth >= 1500 && "class-79"} ${screenWidth >= 1400 && screenWidth < 1500 && "class-80"}`}
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <Star22
              className={`${screenWidth >= 1400 && screenWidth < 1500 && "class-81"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-82"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-83"} ${screenWidth >= 1500 && "class-84"}`}
            />
            <Star22
              className={`${screenWidth >= 1400 && screenWidth < 1500 && "class-85"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-86"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-87"} ${screenWidth >= 1500 && "class-88"}`}
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <Star22
              className={`${screenWidth >= 1201 && screenWidth < 1300 && "class-89"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-90"
              } ${screenWidth >= 1500 && "class-91"} ${screenWidth >= 1400 && screenWidth < 1500 && "class-92"}`}
            />
            <Star22
              className={`${screenWidth >= 1201 && screenWidth < 1300 && "class-93"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-94"
              } ${screenWidth >= 1500 && "class-95"} ${screenWidth >= 1400 && screenWidth < 1500 && "class-96"}`}
            />
            <Star22
              className={`${screenWidth >= 1201 && screenWidth < 1300 && "class-97"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-98"
              } ${screenWidth >= 1500 && "class-99"} ${screenWidth >= 1400 && screenWidth < 1500 && "class-100"}`}
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <Star22
              className={`${screenWidth >= 1400 && screenWidth < 1500 && "class-101"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-102"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-103"} ${screenWidth >= 1500 && "class-104"}`}
            />
            <Star22
              className={`${screenWidth >= 1400 && screenWidth < 1500 && "class-105"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-106"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-107"} ${screenWidth >= 1500 && "class-108"}`}
            />
            <Star22
              className={`${screenWidth >= 1400 && screenWidth < 1500 && "class-109"} ${
                screenWidth >= 1201 && screenWidth < 1300 && "class-110"
              } ${screenWidth >= 1300 && screenWidth < 1400 && "class-111"} ${screenWidth >= 1500 && "class-112"}`}
            />
          </>
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <img
            className="magma-translation-3"
            style={{
              left:
                (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                  ? "64px"
                  : screenWidth >= 1500
                  ? "185px"
                  : screenWidth >= 1400 && screenWidth < 1500
                  ? "167px"
                  : undefined,
              top:
                (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                  ? "40px"
                  : (screenWidth >= 1400 && screenWidth < 1500) || screenWidth >= 1500
                  ? "55px"
                  : undefined,
            }}
            alt="Magma translation"
            src="/img/magma-translation-png-1.png"
          />
        )}

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          screenWidth >= 1500) && (
          <>
            <p
              className="text-wrapper-58"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "189px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "240px"
                    : screenWidth >= 1500
                    ? "351px"
                    : undefined,
                top:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "3503px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "3436px"
                    : screenWidth >= 1500
                    ? "3467px"
                    : undefined,
              }}
            >
              MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
              diverse markets around the world.
            </p>
            <p
              className="text-wrapper-59"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "377px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "428px"
                    : screenWidth >= 1500
                    ? "538px"
                    : undefined,
                top:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "3617px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "3550px"
                    : screenWidth >= 1500
                    ? "3581px"
                    : undefined,
                width:
                  (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                    ? "444px"
                    : screenWidth >= 1500
                    ? "529px"
                    : undefined,
              }}
            >
              Magma Translation | All rights reserved. ©Magma™
            </p>
            <img
              className="magma-translation-4"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "500px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "551px"
                    : screenWidth >= 1500
                    ? "644px"
                    : undefined,
                top:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "3379px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "3312px"
                    : screenWidth >= 1500
                    ? "3343px"
                    : undefined,
              }}
              alt="Magma translation"
              src="/img/magma-translation-png-1.png"
            />
          </>
        )}
      </div>
    </div>
  );
};
