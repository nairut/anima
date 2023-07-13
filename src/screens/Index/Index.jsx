import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import { MagmaTranslation } from "../../components/MagmaTranslation";
import "./style.css";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
      <div
        className="div"
        style={{
          border:
            screenWidth < 1201
              ? "0.87px none"
              : screenWidth >= 1201 && screenWidth < 1286
              ? "0.99px none"
              : screenWidth >= 1286 && screenWidth < 1423
              ? "1.06px none"
              : screenWidth >= 1423
              ? "1.17px none"
              : undefined,
          height:
            screenWidth < 1201
              ? "1710.95px"
              : screenWidth >= 1201 && screenWidth < 1286
              ? "1957px"
              : screenWidth >= 1286 && screenWidth < 1423
              ? "2095.51px"
              : screenWidth >= 1423
              ? "2318.74px"
              : undefined,
          width:
            screenWidth < 1201
              ? "1050px"
              : screenWidth >= 1201 && screenWidth < 1286
              ? "1201px"
              : screenWidth >= 1286 && screenWidth < 1423
              ? "1286px"
              : screenWidth >= 1423
              ? "1423px"
              : undefined,
        }}
      >
        <div
          className="group-2"
          style={{
            height:
              screenWidth < 1201
                ? "353px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "404px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "433px"
                : screenWidth >= 1423
                ? "479px"
                : undefined,
            left:
              screenWidth < 1201
                ? "56px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "64px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "69px"
                : screenWidth >= 1423
                ? "76px"
                : undefined,
            top:
              screenWidth < 1201
                ? "163px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "187px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "200px"
                : screenWidth >= 1423
                ? "222px"
                : undefined,
            width:
              screenWidth < 1201
                ? "606px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "693px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "742px"
                : screenWidth >= 1423
                ? "820px"
                : undefined,
          }}
        >
          <h1
            className="text-wrapper"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "52.3px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "59.8px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "64.1px"
                  : screenWidth >= 1423
                  ? "70.9px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "2.09px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "2.39px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "2.56px"
                  : screenWidth >= 1423
                  ? "2.84px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "524px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "599px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "642px"
                  : screenWidth >= 1423
                  ? "710px"
                  : undefined,
            }}
          >
            Professional Translation Services
          </h1>
          <p
            className="element-languages-that"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "18.8px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "21.5px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "23.1px"
                  : screenWidth >= 1423
                  ? "25.5px"
                  : undefined,
              height:
                screenWidth < 1201
                  ? "113px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "130px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "139px"
                  : screenWidth >= 1423
                  ? "154px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.56px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.65px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.69px"
                  : screenWidth >= 1423
                  ? "0.77px"
                  : undefined,
              lineHeight:
                screenWidth < 1201
                  ? "37.7px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "43.1px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "46.1px"
                  : screenWidth >= 1423
                  ? "51.0px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "158px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "181px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "194px"
                  : screenWidth >= 1423
                  ? "214px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "602px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "689px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "738px"
                  : screenWidth >= 1423
                  ? "816px"
                  : undefined,
            }}
          >
            120 languages that fits in your budget
            <br />
            Human Translation done with the highest quality in the market
            <br /> Linguists with Master&#39;s Degrees
          </p>
          <Group
            className={`${screenWidth < 1201 && "class-5"} ${screenWidth >= 1201 && screenWidth < 1286 && "class-6"} ${
              screenWidth >= 1286 && screenWidth < 1423 && "class-7"
            } ${screenWidth >= 1423 && "class-8"}`}
            talkToAnExpertClassName={`${screenWidth < 1201 && "class"} ${
              screenWidth >= 1201 && screenWidth < 1286 && "class-2"
            } ${screenWidth >= 1286 && screenWidth < 1423 && "class-3"} ${screenWidth >= 1423 && "class-4"}`}
          />
        </div>
        <Lady
          className={`${screenWidth < 1201 && "class-9"} ${screenWidth >= 1201 && screenWidth < 1286 && "class-10"} ${
            screenWidth >= 1286 && screenWidth < 1423 && "class-11"
          } ${screenWidth >= 1423 && "class-12"}`}
        />
        <MagmaTranslation
          className={`${screenWidth < 1201 && "class-13"} ${screenWidth >= 1201 && screenWidth < 1286 && "class-14"} ${
            screenWidth >= 1286 && screenWidth < 1423 && "class-15"
          } ${screenWidth >= 1423 && "class-16"}`}
        />
        <p
          className="p"
          style={{
            fontSize:
              screenWidth < 1201
                ? "33px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "37.7px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "40.4px"
                : screenWidth >= 1423
                ? "44.7px"
                : undefined,
            left:
              screenWidth < 1201
                ? "217px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "248px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "266px"
                : screenWidth >= 1423
                ? "294px"
                : undefined,
            letterSpacing:
              screenWidth < 1201
                ? "1.32px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1.51px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.62px"
                : screenWidth >= 1423
                ? "1.79px"
                : undefined,
            top:
              screenWidth < 1201
                ? "643px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "736px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "788px"
                : screenWidth >= 1423
                ? "872px"
                : undefined,
            width:
              screenWidth < 1201
                ? "617px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "706px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "756px"
                : screenWidth >= 1423
                ? "837px"
                : undefined,
          }}
        >
          Trusted by Elite Businesses Worldwide
        </p>
        <p
          className="text-wrapper-2"
          style={{
            fontSize:
              screenWidth < 1201
                ? "32.3px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "37px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "39.6px"
                : screenWidth >= 1423
                ? "43.8px"
                : undefined,
            left:
              screenWidth < 1201
                ? "164px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "188px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "201px"
                : screenWidth >= 1423
                ? "223px"
                : undefined,
            letterSpacing:
              screenWidth < 1201
                ? "1.29px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1.48px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.58px"
                : screenWidth >= 1423
                ? "1.75px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1062px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1215px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1301px"
                : screenWidth >= 1423
                ? "1440px"
                : undefined,
            width:
              screenWidth < 1201
                ? "746px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "853px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "913px"
                : screenWidth >= 1423
                ? "1011px"
                : undefined,
          }}
        >
          Costumized to Fit your Specific Industry Needs
        </p>
        <img
          className="img"
          style={{
            height:
              screenWidth < 1201
                ? "163px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "186px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "199px"
                : screenWidth >= 1423
                ? "220px"
                : undefined,
            left:
              screenWidth < 1201
                ? "89px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "102px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "109px"
                : screenWidth >= 1423
                ? "121px"
                : undefined,
            top:
              screenWidth < 1201
                ? "744px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "851px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "911px"
                : screenWidth >= 1423
                ? "1008px"
                : undefined,
            width:
              screenWidth < 1201
                ? "872px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "997px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1068px"
                : screenWidth >= 1423
                ? "1181px"
                : undefined,
          }}
          alt="Group"
          src={
            screenWidth < 1201
              ? "/img/group-6-2.png"
              : screenWidth >= 1201 && screenWidth < 1286
              ? "/img/group-6.png"
              : screenWidth >= 1286 && screenWidth < 1423
              ? "/img/group-6-4.png"
              : screenWidth >= 1423
              ? "/img/group-6-1.png"
              : undefined
          }
        />
        <div
          className="overlap"
          style={{
            backgroundImage:
              screenWidth < 1201
                ? "url(/img/rectangle-19-2.svg)"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "url(/img/rectangle-19.svg)"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "url(/img/rectangle-19-3.svg)"
                : screenWidth >= 1423
                ? "url(/img/rectangle-19-1.svg)"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "56px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "64px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "69px"
                : screenWidth >= 1423
                ? "76px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1191px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1362px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1458px"
                : screenWidth >= 1423
                ? "1614px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-3"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "45px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "51px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "55px"
                  : screenWidth >= 1423
                  ? "60px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "87px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "99px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "106px"
                  : screenWidth >= 1423
                  ? "117px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            Legal
          </div>
          <img
            className="law"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "50px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "57px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "61px"
                  : screenWidth >= 1423
                  ? "68px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "27px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "31px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "33px"
                  : screenWidth >= 1423
                  ? "37px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Law"
            src={
              screenWidth < 1201
                ? "/img/law-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/law.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/law-3.png"
                : screenWidth >= 1423
                ? "/img/law-1.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-group"
          style={{
            backgroundImage:
              screenWidth < 1201
                ? "url(/img/rectangle-36-2.svg)"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "url(/img/rectangle-19.svg)"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "url(/img/rectangle-36-3.svg)"
                : screenWidth >= 1423
                ? "url(/img/rectangle-36-1.svg)"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "56px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "64px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "69px"
                : screenWidth >= 1423
                ? "76px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1372px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1569px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1680px"
                : screenWidth >= 1423
                ? "1859px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="media-films"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "7px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "8px"
                  : (screenWidth >= 1286 && screenWidth < 1423) || screenWidth >= 1423
                  ? "9px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "83px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "95px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "102px"
                  : screenWidth >= 1423
                  ? "113px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            Media &amp; Films
          </div>
          <img
            className="next"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "50px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "57px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "61px"
                  : screenWidth >= 1423
                  ? "68px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "24px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "28px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "30px"
                  : screenWidth >= 1423
                  ? "33px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Next"
            src={
              screenWidth < 1201
                ? "/img/next-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/next.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/next-3.png"
                : screenWidth >= 1423
                ? "/img/next-1.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-2"
          style={{
            border:
              screenWidth < 1201
                ? "0.87px solid"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1px solid"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.07px solid"
                : screenWidth >= 1423
                ? "1.18px solid"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "217px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "248px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "266px"
                : screenWidth >= 1423
                ? "294px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1191px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1362px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1458px"
                : screenWidth >= 1423
                ? "1614px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-4"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "32px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "37px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "40px"
                  : screenWidth >= 1423
                  ? "44px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "86px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "98px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "105px"
                  : screenWidth >= 1423
                  ? "116px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            Medical
          </div>
          <img
            className="medical-bag"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "49px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "56px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "60px"
                  : screenWidth >= 1423
                  ? "66px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "24px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "27px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "29px"
                  : screenWidth >= 1423
                  ? "32px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Medical bag"
            src={
              screenWidth < 1201
                ? "/img/medical-bag-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/medical-bag.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/medical-bag-3.png"
                : screenWidth >= 1423
                ? "/img/medical-bag-1.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-3"
          style={{
            border:
              screenWidth < 1201
                ? "0.87px solid"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1px solid"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.07px solid"
                : screenWidth >= 1423
                ? "1.18px solid"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "217px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "248px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "266px"
                : screenWidth >= 1423
                ? "294px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1372px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1569px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1680px"
                : screenWidth >= 1423
                ? "1859px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-5"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "21px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "24px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "26px"
                  : screenWidth >= 1423
                  ? "28px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "86px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "98px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "105px"
                  : screenWidth >= 1423
                  ? "116px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            E-Learning
          </div>
          <img
            className="MBA"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "49px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "56px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "60px"
                  : screenWidth >= 1423
                  ? "66px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "24px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "27px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "29px"
                  : screenWidth >= 1423
                  ? "32px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Mba"
            src={
              screenWidth < 1201
                ? "/img/mba-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/mba.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/mba-3.png"
                : screenWidth >= 1423
                ? "/img/mba-1.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-4"
          style={{
            border:
              screenWidth < 1201
                ? "0.87px solid"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1px solid"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.07px solid"
                : screenWidth >= 1423
                ? "1.18px solid"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "378px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "432px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "463px"
                : screenWidth >= 1423
                ? "512px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1191px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1362px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1458px"
                : screenWidth >= 1423
                ? "1614px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-6"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "3px"
                  : (screenWidth >= 1201 && screenWidth < 1286) || (screenWidth >= 1286 && screenWidth < 1423)
                  ? "4px"
                  : screenWidth >= 1423
                  ? "5px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "86px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "98px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "105px"
                  : screenWidth >= 1423
                  ? "116px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            Manufacturing
          </div>
          <img
            className="manufacturing"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "49px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "56px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "60px"
                  : screenWidth >= 1423
                  ? "66px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "24px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "27px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "29px"
                  : screenWidth >= 1423
                  ? "32px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Manufacturing"
            src={
              screenWidth < 1201
                ? "/img/manufacturing-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/manufacturing.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/manufacturing-3.png"
                : screenWidth >= 1423
                ? "/img/manufacturing-1.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-5"
          style={{
            border:
              screenWidth < 1201
                ? "0.87px solid"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1px solid"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.07px solid"
                : screenWidth >= 1423
                ? "1.18px solid"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "378px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "432px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "463px"
                : screenWidth >= 1423
                ? "512px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1372px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1569px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1680px"
                : screenWidth >= 1423
                ? "1859px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-7"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "17px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "19px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "20px"
                  : screenWidth >= 1423
                  ? "22px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "86px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "98px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "105px"
                  : screenWidth >= 1423
                  ? "116px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            Automotive
          </div>
          <img
            className="tesla-model-x"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "49px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "56px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "60px"
                  : screenWidth >= 1423
                  ? "66px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "24px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "27px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "29px"
                  : screenWidth >= 1423
                  ? "32px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Tesla model x"
            src={
              screenWidth < 1201
                ? "/img/tesla-model-x-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/tesla-model-x.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/tesla-model-x-3.png"
                : screenWidth >= 1423
                ? "/img/tesla-model-x-1.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-6"
          style={{
            border:
              screenWidth < 1201
                ? "0.87px solid"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1px solid"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.07px solid"
                : screenWidth >= 1423
                ? "1.18px solid"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "539px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "616px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "660px"
                : screenWidth >= 1423
                ? "730px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1191px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1362px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1458px"
                : screenWidth >= 1423
                ? "1614px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-8"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "28px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "32px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "34px"
                  : screenWidth >= 1423
                  ? "38px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "86px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "98px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "105px"
                  : screenWidth >= 1423
                  ? "116px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            Financial
          </div>
          <img
            className="money-bag-pounds"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "43px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "49px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "52px"
                  : screenWidth >= 1423
                  ? "58px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "24px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "27px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "29px"
                  : screenWidth >= 1423
                  ? "32px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Money bag pounds"
            src={
              screenWidth < 1201
                ? "/img/money-bag-pounds-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/money-bag-pounds.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/money-bag-pounds-3.png"
                : screenWidth >= 1423
                ? "/img/money-bag-pounds-1.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-7"
          style={{
            border:
              screenWidth < 1201
                ? "0.87px solid"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1px solid"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.07px solid"
                : screenWidth >= 1423
                ? "1.18px solid"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "539px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "616px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "660px"
                : screenWidth >= 1423
                ? "730px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1372px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1569px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1680px"
                : screenWidth >= 1423
                ? "1859px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-9"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "23px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "26px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "28px"
                  : screenWidth >= 1423
                  ? "31px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "89px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "102px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "109px"
                  : screenWidth >= 1423
                  ? "121px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            Marketing
          </div>
          <img
            className="commercial"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "49px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "56px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "60px"
                  : screenWidth >= 1423
                  ? "66px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "24px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "27px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "29px"
                  : screenWidth >= 1423
                  ? "32px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Commercial"
            src={
              screenWidth < 1201
                ? "/img/commercial-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/commercial.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/commercial-3.png"
                : screenWidth >= 1423
                ? "/img/commercial-1.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-8"
          style={{
            border:
              screenWidth < 1201
                ? "0.87px solid"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1px solid"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.07px solid"
                : screenWidth >= 1423
                ? "1.18px solid"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "699px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "800px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "857px"
                : screenWidth >= 1423
                ? "948px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1191px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1362px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1458px"
                : screenWidth >= 1423
                ? "1614px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="IT-software"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "3px"
                  : (screenWidth >= 1201 && screenWidth < 1286) || (screenWidth >= 1286 && screenWidth < 1423)
                  ? "4px"
                  : screenWidth >= 1423
                  ? "5px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "86px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "98px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "105px"
                  : screenWidth >= 1423
                  ? "116px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            IT &amp; Software
          </div>
          <img
            className="programming-flag"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "49px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "56px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "60px"
                  : screenWidth >= 1423
                  ? "66px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "24px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "27px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "29px"
                  : screenWidth >= 1423
                  ? "32px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Programming flag"
            src={
              screenWidth < 1201
                ? "/img/programming-flag-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/programming-flag.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/programming-flag-3.png"
                : screenWidth >= 1423
                ? "/img/programming-flag-1.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-9"
          style={{
            border:
              screenWidth < 1201
                ? "0.87px solid"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1px solid"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.07px solid"
                : screenWidth >= 1423
                ? "1.18px solid"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "699px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "800px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "857px"
                : screenWidth >= 1423
                ? "948px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1372px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1569px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1680px"
                : screenWidth >= 1423
                ? "1859px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-10"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "10px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "12px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "13px"
                  : screenWidth >= 1423
                  ? "14px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "86px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "98px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "105px"
                  : screenWidth >= 1423
                  ? "116px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            Life Science
          </div>
          <img
            className="biotech"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "49px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "56px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "60px"
                  : screenWidth >= 1423
                  ? "66px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "24px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "27px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "29px"
                  : screenWidth >= 1423
                  ? "32px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Biotech"
            src={
              screenWidth < 1201
                ? "/img/biotech-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/biotech.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/biotech-3.png"
                : screenWidth >= 1423
                ? "/img/biotech-1.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-10"
          style={{
            border:
              screenWidth < 1201
                ? "0.87px solid"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1px solid"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.07px solid"
                : screenWidth >= 1423
                ? "1.18px solid"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "860px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "984px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1054px"
                : screenWidth >= 1423
                ? "1166px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1191px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1362px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1458px"
                : screenWidth >= 1423
                ? "1614px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-11"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "28px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "32px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "34px"
                  : screenWidth >= 1423
                  ? "38px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "86px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "98px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "105px"
                  : screenWidth >= 1423
                  ? "116px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            Tourism
          </div>
          <img
            className="plane"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "49px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "56px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "60px"
                  : screenWidth >= 1423
                  ? "66px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "24px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "27px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "29px"
                  : screenWidth >= 1423
                  ? "32px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Plane"
            src={
              screenWidth < 1201
                ? "/img/plane-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/plane.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/plane-3.png"
                : screenWidth >= 1423
                ? "/img/plane-1.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-group-2"
          style={{
            border:
              screenWidth < 1201
                ? "0.87px solid"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1px solid"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1.07px solid"
                : screenWidth >= 1423
                ? "1.18px solid"
                : undefined,
            height:
              screenWidth < 1201
                ? "121px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "139px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "149px"
                : screenWidth >= 1423
                ? "164px"
                : undefined,
            left:
              screenWidth < 1201
                ? "860px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "984px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1054px"
                : screenWidth >= 1423
                ? "1166px"
                : undefined,
            top:
              screenWidth < 1201
                ? "1372px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "1569px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "1680px"
                : screenWidth >= 1423
                ? "1859px"
                : undefined,
            width:
              screenWidth < 1201
                ? "133px"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "152px"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "163px"
                : screenWidth >= 1423
                ? "180px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-12"
            style={{
              fontSize:
                screenWidth < 1201
                  ? "17.5px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "20px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "21.4px"
                  : screenWidth >= 1423
                  ? "23.7px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "14px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "16px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "17px"
                  : screenWidth >= 1423
                  ? "19px"
                  : undefined,
              letterSpacing:
                screenWidth < 1201
                  ? "0.70px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "0.80px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "0.86px"
                  : screenWidth >= 1423
                  ? "0.95px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "86px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "98px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "105px"
                  : screenWidth >= 1423
                  ? "116px"
                  : undefined,
              whiteSpace: (screenWidth >= 1201 && screenWidth < 1286) || screenWidth >= 1423 ? "nowrap" : undefined,
            }}
          >
            E-commerce
          </div>
          <img
            className="buy"
            style={{
              height:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
              left:
                screenWidth < 1201
                  ? "49px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "56px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "60px"
                  : screenWidth >= 1423
                  ? "66px"
                  : undefined,
              top:
                screenWidth < 1201
                  ? "24px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "27px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "29px"
                  : screenWidth >= 1423
                  ? "32px"
                  : undefined,
              width:
                screenWidth < 1201
                  ? "33px"
                  : screenWidth >= 1201 && screenWidth < 1286
                  ? "38px"
                  : screenWidth >= 1286 && screenWidth < 1423
                  ? "41px"
                  : screenWidth >= 1423
                  ? "45px"
                  : undefined,
            }}
            alt="Buy"
            src={
              screenWidth < 1201
                ? "/img/buy-2.png"
                : screenWidth >= 1201 && screenWidth < 1286
                ? "/img/buy.png"
                : screenWidth >= 1286 && screenWidth < 1423
                ? "/img/buy-3.png"
                : screenWidth >= 1423
                ? "/img/buy-1.png"
                : undefined
            }
          />
        </div>
      </div>
    </div>
  );
};
