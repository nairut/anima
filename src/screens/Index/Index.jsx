import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import { MagmaTranslation } from "../../components/MagmaTranslation";
import { Star105 } from "../../icons/Star105";
import { Star106 } from "../../icons/Star106";
import { Star107 } from "../../icons/Star107";
import { Star116 } from "../../icons/Star116";
import { Star117 } from "../../icons/Star117";
import { Star118 } from "../../icons/Star118";
import { Star126 } from "../../icons/Star126";
import { Star127 } from "../../icons/Star127";
import { Star128 } from "../../icons/Star128";
import { Star136 } from "../../icons/Star136";
import { Star137 } from "../../icons/Star137";
import { Star138 } from "../../icons/Star138";
import { Star146 } from "../../icons/Star146";
import { Star147 } from "../../icons/Star147";
import { Star148 } from "../../icons/Star148";
import { Star156 } from "../../icons/Star156";
import { Star157 } from "../../icons/Star157";
import { Star158 } from "../../icons/Star158";
import { Star16 } from "../../icons/Star16";
import { Star17 } from "../../icons/Star17";
import { Star18 } from "../../icons/Star18";
import { Star26 } from "../../icons/Star26";
import { Star27 } from "../../icons/Star27";
import { Star28 } from "../../icons/Star28";
import { Star36 } from "../../icons/Star36";
import { Star37 } from "../../icons/Star37";
import { Star38 } from "../../icons/Star38";
import { Star46 } from "../../icons/Star46";
import { Star47 } from "../../icons/Star47";
import { Star48 } from "../../icons/Star48";
import { Star56 } from "../../icons/Star56";
import { Star57 } from "../../icons/Star57";
import { Star58 } from "../../icons/Star58";
import { Star65 } from "../../icons/Star65";
import { Star66 } from "../../icons/Star66";
import { Star67 } from "../../icons/Star67";
import { Star75 } from "../../icons/Star75";
import { Star76 } from "../../icons/Star76";
import { Star77 } from "../../icons/Star77";
import { Star85 } from "../../icons/Star85";
import { Star86 } from "../../icons/Star86";
import { Star87 } from "../../icons/Star87";
import { Star95 } from "../../icons/Star95";
import { Star96 } from "../../icons/Star96";
import { Star97 } from "../../icons/Star97";
import "./style.css";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
      <div
        className="div"
        style={{
          border:
            screenWidth < 1300
              ? "0.99px none"
              : screenWidth >= 1300 && screenWidth < 1400
              ? "1.08px none"
              : screenWidth >= 1400
              ? "1.16px none"
              : undefined,
          height:
            screenWidth < 1300
              ? "3881px"
              : screenWidth >= 1300 && screenWidth < 1400
              ? "4210.61px"
              : screenWidth >= 1400
              ? "4526px"
              : undefined,
          overflow: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth >= 1400 ? "hidden" : undefined,
          width:
            screenWidth < 1300
              ? "1201px"
              : screenWidth >= 1300 && screenWidth < 1400
              ? "1300px"
              : screenWidth >= 1400
              ? "1400.6px"
              : undefined,
        }}
      >
        <div
          className="group-2"
          style={{
            height:
              screenWidth >= 1300 && screenWidth < 1400
                ? "438px"
                : screenWidth >= 1400
                ? "471px"
                : screenWidth < 1300
                ? "404px"
                : undefined,
            left:
              screenWidth >= 1300 && screenWidth < 1400
                ? "69px"
                : screenWidth >= 1400
                ? "75px"
                : screenWidth < 1300
                ? "64px"
                : undefined,
            top:
              screenWidth >= 1300 && screenWidth < 1400
                ? "203px"
                : screenWidth >= 1400
                ? "218px"
                : screenWidth < 1300
                ? "187px"
                : undefined,
            width:
              screenWidth >= 1300 && screenWidth < 1400
                ? "752px"
                : screenWidth >= 1400
                ? "808px"
                : screenWidth < 1300
                ? "693px"
                : undefined,
          }}
        >
          <h1
            className="text-wrapper"
            style={{
              fontSize:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "64.9px"
                  : screenWidth >= 1400
                  ? "69.8px"
                  : screenWidth < 1300
                  ? "59.8px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "2.60px"
                  : screenWidth >= 1400
                  ? "2.79px"
                  : screenWidth < 1300
                  ? "2.39px"
                  : undefined,
              width:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "650px"
                  : screenWidth >= 1400
                  ? "699px"
                  : screenWidth < 1300
                  ? "599px"
                  : undefined,
            }}
          >
            Professional Translation Services
          </h1>
          <p
            className="element-languages-that"
            style={{
              fontSize:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "23.4px"
                  : screenWidth >= 1400
                  ? "25.1px"
                  : screenWidth < 1300
                  ? "21.5px"
                  : undefined,
              height:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "141px"
                  : screenWidth >= 1400
                  ? "151px"
                  : screenWidth < 1300
                  ? "130px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "0.70px"
                  : screenWidth >= 1400
                  ? "0.75px"
                  : screenWidth < 1300
                  ? "0.65px"
                  : undefined,
              lineHeight:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "46.7px"
                  : screenWidth >= 1400
                  ? "50.2px"
                  : screenWidth < 1300
                  ? "43.1px"
                  : undefined,
              top:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "196px"
                  : screenWidth >= 1400
                  ? "211px"
                  : screenWidth < 1300
                  ? "181px"
                  : undefined,
              width:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "748px"
                  : screenWidth >= 1400
                  ? "804px"
                  : screenWidth < 1300
                  ? "689px"
                  : undefined,
            }}
          >
            120 languages that fits in your budget
            <br />
            Human Translation done with the highest quality in the market
            <br /> Linguists with Master&#39;s Degrees
          </p>
          <Group
            className={`${screenWidth >= 1300 && screenWidth < 1400 && "class-4"} ${screenWidth >= 1400 && "class-5"} ${
              screenWidth < 1300 && "class-6"
            }`}
            property1="default"
            talkToAnExpertClassName={`${screenWidth >= 1300 && screenWidth < 1400 && "class"} ${
              screenWidth >= 1400 && "class-2"
            } ${screenWidth < 1300 && "class-3"}`}
          />
        </div>
        <div
          className="overlap-group-wrapper"
          style={{
            height:
              screenWidth < 1300
                ? "56px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "61px"
                : screenWidth >= 1400
                ? "65px"
                : undefined,
            left:
              screenWidth < 1300
                ? "415px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "449px"
                : screenWidth >= 1400
                ? "484px"
                : undefined,
            top:
              screenWidth < 1300
                ? "1770px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1920px"
                : screenWidth >= 1400
                ? "2064px"
                : undefined,
            width:
              screenWidth < 1300
                ? "366px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "397px"
                : screenWidth >= 1400
                ? "427px"
                : undefined,
          }}
        >
          <div
            className="overlap-group"
            style={{
              borderRadius:
                screenWidth < 1300
                  ? "28.16px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "30.55px"
                  : screenWidth >= 1400
                  ? "32.84px"
                  : undefined,
              height:
                screenWidth < 1300
                  ? "56px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "61px"
                  : screenWidth >= 1400
                  ? "65px"
                  : undefined,
            }}
          >
            <div
              className="rectangle"
              style={{
                borderRadius:
                  screenWidth < 1300
                    ? "28.16px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "30.55px"
                    : screenWidth >= 1400
                    ? "32.84px"
                    : undefined,
                height:
                  screenWidth < 1300
                    ? "56px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "61px"
                    : screenWidth >= 1400
                    ? "65px"
                    : undefined,
                width:
                  screenWidth < 1300
                    ? "366px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "397px"
                    : screenWidth >= 1400
                    ? "427px"
                    : undefined,
              }}
            />
            <div
              className="talk-to-an-expert-2"
              style={{
                fontSize:
                  screenWidth < 1300
                    ? "20.5px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "22.3px"
                    : screenWidth >= 1400
                    ? "23.9px"
                    : undefined,
                height:
                  screenWidth < 1300
                    ? "9px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "10px"
                    : screenWidth >= 1400
                    ? "11px"
                    : undefined,
                left:
                  screenWidth < 1300
                    ? "69px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "75px"
                    : screenWidth >= 1400
                    ? "80px"
                    : undefined,
                letterSpacing:
                  screenWidth < 1300
                    ? "1.03px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1.11px"
                    : screenWidth >= 1400
                    ? "1.20px"
                    : undefined,
                lineHeight:
                  screenWidth < 1300
                    ? "13.3px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "14.5px"
                    : screenWidth >= 1400
                    ? "15.5px"
                    : undefined,
                top:
                  screenWidth < 1300
                    ? "22px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "24px"
                    : screenWidth >= 1400
                    ? "26px"
                    : undefined,
                width:
                  screenWidth < 1300
                    ? "228px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "248px"
                    : screenWidth >= 1400
                    ? "266px"
                    : undefined,
              }}
            >
              TALK TO AN EXPERT
            </div>
          </div>
        </div>
        <div
          className="overlap-wrapper"
          style={{
            height:
              screenWidth < 1300
                ? "56px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "61px"
                : screenWidth >= 1400
                ? "65px"
                : undefined,
            left:
              screenWidth < 1300
                ? "407px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "441px"
                : screenWidth >= 1400
                ? "475px"
                : undefined,
            top:
              screenWidth < 1300
                ? "3379px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "3666px"
                : screenWidth >= 1400
                ? "3941px"
                : undefined,
            width:
              screenWidth < 1300
                ? "366px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "397px"
                : screenWidth >= 1400
                ? "427px"
                : undefined,
          }}
        >
          <div
            className="overlap"
            style={{
              borderRadius:
                screenWidth < 1300
                  ? "28.16px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "30.55px"
                  : screenWidth >= 1400
                  ? "32.84px"
                  : undefined,
              height:
                screenWidth < 1300
                  ? "56px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "61px"
                  : screenWidth >= 1400
                  ? "65px"
                  : undefined,
            }}
          >
            <div
              className="rectangle-2"
              style={{
                borderRadius:
                  screenWidth < 1300
                    ? "28.16px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "30.55px"
                    : screenWidth >= 1400
                    ? "32.84px"
                    : undefined,
                height:
                  screenWidth < 1300
                    ? "56px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "61px"
                    : screenWidth >= 1400
                    ? "65px"
                    : undefined,
                width:
                  screenWidth < 1300
                    ? "366px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "397px"
                    : screenWidth >= 1400
                    ? "427px"
                    : undefined,
              }}
            />
            <div
              className="talk-to-an-expert-3"
              style={{
                fontSize:
                  screenWidth < 1300
                    ? "20.5px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "22.3px"
                    : screenWidth >= 1400
                    ? "23.9px"
                    : undefined,
                height:
                  screenWidth < 1300
                    ? "9px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "10px"
                    : screenWidth >= 1400
                    ? "11px"
                    : undefined,
                left:
                  screenWidth < 1300
                    ? "69px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "75px"
                    : screenWidth >= 1400
                    ? "80px"
                    : undefined,
                letterSpacing:
                  screenWidth < 1300
                    ? "1.03px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1.11px"
                    : screenWidth >= 1400
                    ? "1.20px"
                    : undefined,
                lineHeight:
                  screenWidth < 1300
                    ? "13.3px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "14.5px"
                    : screenWidth >= 1400
                    ? "15.5px"
                    : undefined,
                top:
                  screenWidth < 1300
                    ? "22px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "24px"
                    : screenWidth >= 1400
                    ? "26px"
                    : undefined,
                width:
                  screenWidth < 1300
                    ? "228px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "248px"
                    : screenWidth >= 1400
                    ? "266px"
                    : undefined,
              }}
            >
              TALK TO AN EXPERT
            </div>
          </div>
        </div>
        <Lady
          className={`${screenWidth >= 1400 && "class-7"} ${screenWidth < 1300 && "class-8"} ${
            screenWidth >= 1300 && screenWidth < 1400 && "class-9"
          }`}
        />
        <MagmaTranslation
          className={`${screenWidth >= 1400 && "class-10"} ${screenWidth < 1300 && "class-11"} ${
            screenWidth >= 1300 && screenWidth < 1400 && "class-12"
          }`}
        />
        <p
          className="p"
          style={{
            fontSize:
              screenWidth >= 1400
                ? "44px"
                : screenWidth < 1300
                ? "37.7px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "40.9px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "289px"
                : screenWidth < 1300
                ? "248px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "269px"
                : undefined,
            letterSpacing:
              screenWidth >= 1400
                ? "1.76px"
                : screenWidth < 1300
                ? "1.51px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.64px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "858px"
                : screenWidth < 1300
                ? "736px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "799px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "823px"
                : screenWidth < 1300
                ? "706px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "763px"
                : undefined,
          }}
        >
          Trusted by Elite Businesses Worldwide
        </p>
        <p
          className="text-wrapper-2"
          style={{
            fontSize:
              screenWidth >= 1300 && screenWidth < 1400
                ? "40.1px"
                : screenWidth >= 1400
                ? "43.1px"
                : screenWidth < 1300
                ? "37px"
                : undefined,
            left:
              screenWidth >= 1300 && screenWidth < 1400
                ? "203px"
                : screenWidth >= 1400
                ? "219px"
                : screenWidth < 1300
                ? "188px"
                : undefined,
            letterSpacing:
              screenWidth >= 1300 && screenWidth < 1400
                ? "1.61px"
                : screenWidth >= 1400
                ? "1.73px"
                : screenWidth < 1300
                ? "1.48px"
                : undefined,
            top:
              screenWidth >= 1300 && screenWidth < 1400
                ? "1318px"
                : screenWidth >= 1400
                ? "1417px"
                : screenWidth < 1300
                ? "1215px"
                : undefined,
            width:
              screenWidth >= 1300 && screenWidth < 1400
                ? "925px"
                : screenWidth >= 1400
                ? "995px"
                : screenWidth < 1300
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
              screenWidth < 1300
                ? "186px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "202px"
                : screenWidth >= 1400
                ? "217px"
                : undefined,
            left:
              screenWidth < 1300
                ? "102px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "111px"
                : screenWidth >= 1400
                ? "119px"
                : undefined,
            top:
              screenWidth < 1300
                ? "851px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "923px"
                : screenWidth >= 1400
                ? "992px"
                : undefined,
            width:
              screenWidth < 1300
                ? "997px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1079px"
                : screenWidth >= 1400
                ? "1163px"
                : undefined,
          }}
          alt="Group"
          src={
            screenWidth < 1300
              ? "/img/group-6.png"
              : screenWidth >= 1300 && screenWidth < 1400
              ? "/img/group-6-6.png"
              : screenWidth >= 1400
              ? "/img/group-6-4.png"
              : undefined
          }
        />
        <div
          className="overlap-2"
          style={{
            backgroundImage:
              screenWidth < 1300
                ? "url(/img/rectangle-19.svg)"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "url(/img/rectangle-19-5.svg)"
                : screenWidth >= 1400
                ? "url(/img/rectangle-19-3.svg)"
                : undefined,
            height:
              screenWidth < 1300
                ? "139px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : screenWidth >= 1400
                ? "162px"
                : undefined,
            left:
              screenWidth < 1300
                ? "64px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "69px"
                : screenWidth >= 1400
                ? "75px"
                : undefined,
            top:
              screenWidth < 1300
                ? "1362px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1478px"
                : screenWidth >= 1400
                ? "1588px"
                : undefined,
            width:
              screenWidth < 1300
                ? "152px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : screenWidth >= 1400
                ? "178px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-3"
            style={{
              fontSize:
                screenWidth < 1300
                  ? "20px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : screenWidth >= 1400
                  ? "23.3px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "51px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "55px"
                  : screenWidth >= 1400
                  ? "59px"
                  : undefined,
              letterSpacing:
                screenWidth < 1300
                  ? "0.80px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : screenWidth >= 1400
                  ? "0.93px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "99px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "107px"
                  : screenWidth >= 1400
                  ? "115px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            Legal
          </div>
          <img
            className="law"
            style={{
              height:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "57px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "62px"
                  : screenWidth >= 1400
                  ? "66px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "31px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "34px"
                  : screenWidth >= 1400
                  ? "36px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
            }}
            alt="Law"
            src={
              screenWidth < 1300
                ? "/img/law.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/law-5.png"
                : screenWidth >= 1400
                ? "/img/law-3.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-3"
          style={{
            backgroundImage:
              screenWidth >= 1400
                ? "url(/img/rectangle-36-3.svg)"
                : screenWidth < 1300
                ? "url(/img/rectangle-19.svg)"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "url(/img/rectangle-36-5.svg)"
                : undefined,
            height:
              screenWidth >= 1400
                ? "162px"
                : screenWidth < 1300
                ? "139px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "75px"
                : screenWidth < 1300
                ? "64px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "69px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "1830px"
                : screenWidth < 1300
                ? "1569px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1702px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "178px"
                : screenWidth < 1300
                ? "152px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : undefined,
          }}
        >
          <div
            className="media-films"
            style={{
              fontSize:
                screenWidth >= 1400
                  ? "23.3px"
                  : screenWidth < 1300
                  ? "20px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : undefined,
              left:
                (screenWidth >= 1300 && screenWidth < 1400) || screenWidth >= 1400
                  ? "9px"
                  : screenWidth < 1300
                  ? "8px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1400
                  ? "0.93px"
                  : screenWidth < 1300
                  ? "0.80px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "111px"
                  : screenWidth < 1300
                  ? "95px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "103px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            Media &amp; Films
          </div>
          <img
            className="next"
            style={{
              height:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "66px"
                  : screenWidth < 1300
                  ? "57px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "62px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "33px"
                  : screenWidth < 1300
                  ? "28px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "30px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
            }}
            alt="Next"
            src={
              screenWidth >= 1400
                ? "/img/next-3.png"
                : screenWidth < 1300
                ? "/img/next.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/next-5.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-4"
          style={{
            border:
              screenWidth >= 1400
                ? "1.17px solid"
                : screenWidth < 1300
                ? "1px solid"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.08px solid"
                : undefined,
            height:
              screenWidth >= 1400
                ? "162px"
                : screenWidth < 1300
                ? "139px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "289px"
                : screenWidth < 1300
                ? "248px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "269px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "1588px"
                : screenWidth < 1300
                ? "1362px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1478px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "178px"
                : screenWidth < 1300
                ? "152px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-4"
            style={{
              fontSize:
                screenWidth >= 1400
                  ? "23.3px"
                  : screenWidth < 1300
                  ? "20px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "43px"
                  : screenWidth < 1300
                  ? "37px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "40px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1400
                  ? "0.93px"
                  : screenWidth < 1300
                  ? "0.80px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "114px"
                  : screenWidth < 1300
                  ? "98px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "106px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            Medical
          </div>
          <img
            className="medical-bag"
            style={{
              height:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "65px"
                  : screenWidth < 1300
                  ? "56px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "61px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "31px"
                  : screenWidth < 1300
                  ? "27px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "29px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
            }}
            alt="Medical bag"
            src={
              screenWidth >= 1400
                ? "/img/medical-bag-3.png"
                : screenWidth < 1300
                ? "/img/medical-bag.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/medical-bag-5.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-5"
          style={{
            border:
              screenWidth >= 1300 && screenWidth < 1400
                ? "1.08px solid"
                : screenWidth >= 1400
                ? "1.17px solid"
                : screenWidth < 1300
                ? "1px solid"
                : undefined,
            height:
              screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : screenWidth >= 1400
                ? "162px"
                : screenWidth < 1300
                ? "139px"
                : undefined,
            left:
              screenWidth >= 1300 && screenWidth < 1400
                ? "269px"
                : screenWidth >= 1400
                ? "289px"
                : screenWidth < 1300
                ? "248px"
                : undefined,
            top:
              screenWidth >= 1300 && screenWidth < 1400
                ? "1702px"
                : screenWidth >= 1400
                ? "1830px"
                : screenWidth < 1300
                ? "1569px"
                : undefined,
            width:
              screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : screenWidth >= 1400
                ? "178px"
                : screenWidth < 1300
                ? "152px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-5"
            style={{
              fontSize:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : screenWidth >= 1400
                  ? "23.3px"
                  : screenWidth < 1300
                  ? "20px"
                  : undefined,
              left:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "26px"
                  : screenWidth >= 1400
                  ? "28px"
                  : screenWidth < 1300
                  ? "24px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : screenWidth >= 1400
                  ? "0.93px"
                  : screenWidth < 1300
                  ? "0.80px"
                  : undefined,
              top:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "106px"
                  : screenWidth >= 1400
                  ? "114px"
                  : screenWidth < 1300
                  ? "98px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            E-Learning
          </div>
          <img
            className="MBA"
            style={{
              height:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : undefined,
              left:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "61px"
                  : screenWidth >= 1400
                  ? "65px"
                  : screenWidth < 1300
                  ? "56px"
                  : undefined,
              top:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "29px"
                  : screenWidth >= 1400
                  ? "31px"
                  : screenWidth < 1300
                  ? "27px"
                  : undefined,
              width:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : undefined,
            }}
            alt="Mba"
            src={
              screenWidth >= 1300 && screenWidth < 1400
                ? "/img/mba-5.png"
                : screenWidth >= 1400
                ? "/img/mba-3.png"
                : screenWidth < 1300
                ? "/img/mba.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-6"
          style={{
            border:
              screenWidth < 1300
                ? "1px solid"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.08px solid"
                : screenWidth >= 1400
                ? "1.17px solid"
                : undefined,
            height:
              screenWidth < 1300
                ? "139px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : screenWidth >= 1400
                ? "162px"
                : undefined,
            left:
              screenWidth < 1300
                ? "432px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "468px"
                : screenWidth >= 1400
                ? "504px"
                : undefined,
            top:
              screenWidth < 1300
                ? "1362px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1478px"
                : screenWidth >= 1400
                ? "1588px"
                : undefined,
            width:
              screenWidth < 1300
                ? "152px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : screenWidth >= 1400
                ? "178px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-6"
            style={{
              fontSize:
                screenWidth < 1300
                  ? "20px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : screenWidth >= 1400
                  ? "23.3px"
                  : undefined,
              left:
                (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300
                  ? "4px"
                  : screenWidth >= 1400
                  ? "5px"
                  : undefined,
              letterSpacing:
                screenWidth < 1300
                  ? "0.80px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : screenWidth >= 1400
                  ? "0.93px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "98px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "106px"
                  : screenWidth >= 1400
                  ? "114px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            Manufacturing
          </div>
          <img
            className="manufacturing"
            style={{
              height:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "56px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "61px"
                  : screenWidth >= 1400
                  ? "65px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "27px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "29px"
                  : screenWidth >= 1400
                  ? "31px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
            }}
            alt="Manufacturing"
            src={
              screenWidth < 1300
                ? "/img/manufacturing.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/manufacturing-5.png"
                : screenWidth >= 1400
                ? "/img/manufacturing-3.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-7"
          style={{
            border:
              screenWidth < 1300
                ? "1px solid"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.08px solid"
                : screenWidth >= 1400
                ? "1.17px solid"
                : undefined,
            height:
              screenWidth < 1300
                ? "139px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : screenWidth >= 1400
                ? "162px"
                : undefined,
            left:
              screenWidth < 1300
                ? "432px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "468px"
                : screenWidth >= 1400
                ? "504px"
                : undefined,
            top:
              screenWidth < 1300
                ? "1569px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1702px"
                : screenWidth >= 1400
                ? "1830px"
                : undefined,
            width:
              screenWidth < 1300
                ? "152px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : screenWidth >= 1400
                ? "178px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-7"
            style={{
              fontSize:
                screenWidth < 1300
                  ? "20px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : screenWidth >= 1400
                  ? "23.3px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "19px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "21px"
                  : screenWidth >= 1400
                  ? "22px"
                  : undefined,
              letterSpacing:
                screenWidth < 1300
                  ? "0.80px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : screenWidth >= 1400
                  ? "0.93px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "98px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "106px"
                  : screenWidth >= 1400
                  ? "114px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            Automotive
          </div>
          <img
            className="tesla-model-x"
            style={{
              height:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "56px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "61px"
                  : screenWidth >= 1400
                  ? "65px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "27px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "29px"
                  : screenWidth >= 1400
                  ? "31px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
            }}
            alt="Tesla model x"
            src={
              screenWidth < 1300
                ? "/img/tesla-model-x.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/tesla-model-x-5.png"
                : screenWidth >= 1400
                ? "/img/tesla-model-x-3.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-8"
          style={{
            border:
              screenWidth >= 1400
                ? "1.17px solid"
                : screenWidth < 1300
                ? "1px solid"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.08px solid"
                : undefined,
            height:
              screenWidth >= 1400
                ? "162px"
                : screenWidth < 1300
                ? "139px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "718px"
                : screenWidth < 1300
                ? "616px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "666px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "1588px"
                : screenWidth < 1300
                ? "1362px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1478px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "178px"
                : screenWidth < 1300
                ? "152px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-8"
            style={{
              fontSize:
                screenWidth >= 1400
                  ? "23.3px"
                  : screenWidth < 1300
                  ? "20px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "37px"
                  : screenWidth < 1300
                  ? "32px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "35px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1400
                  ? "0.93px"
                  : screenWidth < 1300
                  ? "0.80px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "114px"
                  : screenWidth < 1300
                  ? "98px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "106px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            Financial
          </div>
          <img
            className="money-bag-pounds"
            style={{
              height:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "57px"
                  : screenWidth < 1300
                  ? "49px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "53px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "31px"
                  : screenWidth < 1300
                  ? "27px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "29px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
            }}
            alt="Money bag pounds"
            src={
              screenWidth >= 1400
                ? "/img/money-bag-pounds-3.png"
                : screenWidth < 1300
                ? "/img/money-bag-pounds.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/money-bag-pounds-5.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-9"
          style={{
            border:
              screenWidth >= 1400
                ? "1.17px solid"
                : screenWidth < 1300
                ? "1px solid"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.08px solid"
                : undefined,
            height:
              screenWidth >= 1400
                ? "162px"
                : screenWidth < 1300
                ? "139px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "718px"
                : screenWidth < 1300
                ? "616px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "666px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "1830px"
                : screenWidth < 1300
                ? "1569px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1702px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "178px"
                : screenWidth < 1300
                ? "152px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-9"
            style={{
              fontSize:
                screenWidth >= 1400
                  ? "23.3px"
                  : screenWidth < 1300
                  ? "20px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "30px"
                  : screenWidth < 1300
                  ? "26px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "28px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1400
                  ? "0.93px"
                  : screenWidth < 1300
                  ? "0.80px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "119px"
                  : screenWidth < 1300
                  ? "102px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "111px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            Marketing
          </div>
          <img
            className="commercial"
            style={{
              height:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "65px"
                  : screenWidth < 1300
                  ? "56px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "61px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "31px"
                  : screenWidth < 1300
                  ? "27px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "29px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
            }}
            alt="Commercial"
            src={
              screenWidth >= 1400
                ? "/img/commercial-3.png"
                : screenWidth < 1300
                ? "/img/commercial.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/commercial-5.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-10"
          style={{
            border:
              screenWidth >= 1400
                ? "1.17px solid"
                : screenWidth < 1300
                ? "1px solid"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.08px solid"
                : undefined,
            height:
              screenWidth >= 1400
                ? "162px"
                : screenWidth < 1300
                ? "139px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "933px"
                : screenWidth < 1300
                ? "800px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "866px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "1588px"
                : screenWidth < 1300
                ? "1362px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1478px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "178px"
                : screenWidth < 1300
                ? "152px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : undefined,
          }}
        >
          <div
            className="IT-software"
            style={{
              fontSize:
                screenWidth >= 1400
                  ? "23.3px"
                  : screenWidth < 1300
                  ? "20px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "5px"
                  : (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300
                  ? "4px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1400
                  ? "0.93px"
                  : screenWidth < 1300
                  ? "0.80px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "114px"
                  : screenWidth < 1300
                  ? "98px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "106px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            IT &amp; Software
          </div>
          <img
            className="programming-flag"
            style={{
              height:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "65px"
                  : screenWidth < 1300
                  ? "56px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "61px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "31px"
                  : screenWidth < 1300
                  ? "27px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "29px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
            }}
            alt="Programming flag"
            src={
              screenWidth >= 1400
                ? "/img/programming-flag-3.png"
                : screenWidth < 1300
                ? "/img/programming-flag.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/programming-flag-5.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-11"
          style={{
            border:
              screenWidth >= 1300 && screenWidth < 1400
                ? "1.08px solid"
                : screenWidth >= 1400
                ? "1.17px solid"
                : screenWidth < 1300
                ? "1px solid"
                : undefined,
            height:
              screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : screenWidth >= 1400
                ? "162px"
                : screenWidth < 1300
                ? "139px"
                : undefined,
            left:
              screenWidth >= 1300 && screenWidth < 1400
                ? "866px"
                : screenWidth >= 1400
                ? "933px"
                : screenWidth < 1300
                ? "800px"
                : undefined,
            top:
              screenWidth >= 1300 && screenWidth < 1400
                ? "1702px"
                : screenWidth >= 1400
                ? "1830px"
                : screenWidth < 1300
                ? "1569px"
                : undefined,
            width:
              screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : screenWidth >= 1400
                ? "178px"
                : screenWidth < 1300
                ? "152px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-10"
            style={{
              fontSize:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : screenWidth >= 1400
                  ? "23.3px"
                  : screenWidth < 1300
                  ? "20px"
                  : undefined,
              left:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "13px"
                  : screenWidth >= 1400
                  ? "14px"
                  : screenWidth < 1300
                  ? "12px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : screenWidth >= 1400
                  ? "0.93px"
                  : screenWidth < 1300
                  ? "0.80px"
                  : undefined,
              top:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "106px"
                  : screenWidth >= 1400
                  ? "114px"
                  : screenWidth < 1300
                  ? "98px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            Life Science
          </div>
          <img
            className="biotech"
            style={{
              height:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : undefined,
              left:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "61px"
                  : screenWidth >= 1400
                  ? "65px"
                  : screenWidth < 1300
                  ? "56px"
                  : undefined,
              top:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "29px"
                  : screenWidth >= 1400
                  ? "31px"
                  : screenWidth < 1300
                  ? "27px"
                  : undefined,
              width:
                screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : undefined,
            }}
            alt="Biotech"
            src={
              screenWidth >= 1300 && screenWidth < 1400
                ? "/img/biotech-12.png"
                : screenWidth >= 1400
                ? "/img/biotech-8.png"
                : screenWidth < 1300
                ? "/img/biotech.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-12"
          style={{
            border:
              screenWidth < 1300
                ? "1px solid"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.08px solid"
                : screenWidth >= 1400
                ? "1.17px solid"
                : undefined,
            height:
              screenWidth < 1300
                ? "139px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : screenWidth >= 1400
                ? "162px"
                : undefined,
            left:
              screenWidth < 1300
                ? "984px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1065px"
                : screenWidth >= 1400
                ? "1148px"
                : undefined,
            top:
              screenWidth < 1300
                ? "1362px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1478px"
                : screenWidth >= 1400
                ? "1588px"
                : undefined,
            width:
              screenWidth < 1300
                ? "152px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : screenWidth >= 1400
                ? "178px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-11"
            style={{
              fontSize:
                screenWidth < 1300
                  ? "20px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : screenWidth >= 1400
                  ? "23.3px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "32px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "35px"
                  : screenWidth >= 1400
                  ? "37px"
                  : undefined,
              letterSpacing:
                screenWidth < 1300
                  ? "0.80px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : screenWidth >= 1400
                  ? "0.93px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "98px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "106px"
                  : screenWidth >= 1400
                  ? "114px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            Tourism
          </div>
          <img
            className="plane"
            style={{
              height:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "56px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "61px"
                  : screenWidth >= 1400
                  ? "65px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "27px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "29px"
                  : screenWidth >= 1400
                  ? "31px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
            }}
            alt="Plane"
            src={
              screenWidth < 1300
                ? "/img/plane.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/plane-5.png"
                : screenWidth >= 1400
                ? "/img/plane-3.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-13"
          style={{
            border:
              screenWidth < 1300
                ? "1px solid"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.08px solid"
                : screenWidth >= 1400
                ? "1.17px solid"
                : undefined,
            height:
              screenWidth < 1300
                ? "139px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "151px"
                : screenWidth >= 1400
                ? "162px"
                : undefined,
            left:
              screenWidth < 1300
                ? "984px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1065px"
                : screenWidth >= 1400
                ? "1148px"
                : undefined,
            top:
              screenWidth < 1300
                ? "1569px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1702px"
                : screenWidth >= 1400
                ? "1830px"
                : undefined,
            width:
              screenWidth < 1300
                ? "152px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "165px"
                : screenWidth >= 1400
                ? "178px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-12"
            style={{
              fontSize:
                screenWidth < 1300
                  ? "20px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "21.7px"
                  : screenWidth >= 1400
                  ? "23.3px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "16px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "17px"
                  : screenWidth >= 1400
                  ? "19px"
                  : undefined,
              letterSpacing:
                screenWidth < 1300
                  ? "0.80px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.87px"
                  : screenWidth >= 1400
                  ? "0.93px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "98px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "106px"
                  : screenWidth >= 1400
                  ? "114px"
                  : undefined,
              whiteSpace: (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300 ? "nowrap" : undefined,
            }}
          >
            E-commerce
          </div>
          <img
            className="buy"
            style={{
              height:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "56px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "61px"
                  : screenWidth >= 1400
                  ? "65px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "27px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "29px"
                  : screenWidth >= 1400
                  ? "31px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
            }}
            alt="Buy"
            src={
              screenWidth < 1300
                ? "/img/buy.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/buy-5.png"
                : screenWidth >= 1400
                ? "/img/buy-3.png"
                : undefined
            }
          />
        </div>
        <div
          className="text-wrapper-13"
          style={{
            fontSize:
              screenWidth >= 1400
                ? "44px"
                : screenWidth < 1300
                ? "37.7px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "40.9px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "426px"
                : screenWidth < 1300
                ? "365px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "395px"
                : undefined,
            letterSpacing:
              screenWidth >= 1400
                ? "1.76px"
                : screenWidth < 1300
                ? "1.51px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.64px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "3354px"
                : screenWidth < 1300
                ? "2876px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "3120px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "546px"
                : screenWidth < 1300
                ? "468px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "508px"
                : undefined,
          }}
        >
          What can you translate?
        </div>
        <p
          className="text-wrapper-14"
          style={{
            fontSize:
              screenWidth >= 1400
                ? "23.3px"
                : screenWidth < 1300
                ? "20px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "21.7px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "150px"
                : screenWidth < 1300
                ? "129px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "140px"
                : undefined,
            letterSpacing:
              screenWidth >= 1400
                ? "0.93px"
                : screenWidth < 1300
                ? "0.80px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "0.87px"
                : undefined,
            lineHeight:
              screenWidth >= 1400
                ? "31.5px"
                : screenWidth < 1300
                ? "27.0px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "29.3px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "3523px"
                : screenWidth < 1300
                ? "3021px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "3278px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "1095px"
                : screenWidth < 1300
                ? "939px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1019px"
                : undefined,
          }}
        >
          Our proficient translators have the capability to translate any kind of document, supporting the
          undermentioned file types
        </p>
        <div
          className="overlap-14"
          style={{
            height:
              screenWidth >= 1400
                ? "203px"
                : screenWidth < 1300
                ? "174px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "189px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "72px"
                : screenWidth < 1300
                ? "62px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "67px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "3630px"
                : screenWidth < 1300
                ? "3113px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "3377px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "140px"
                : screenWidth < 1300
                ? "120px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "130px"
                : undefined,
          }}
        >
          <div
            className="rectangle-3"
            style={{
              border:
                screenWidth >= 1400
                  ? "1.17px solid"
                  : screenWidth < 1300
                  ? "1px solid"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "1.08px solid"
                  : undefined,
              height:
                screenWidth >= 1400
                  ? "203px"
                  : screenWidth < 1300
                  ? "174px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "189px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "136px"
                  : screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : undefined,
            }}
          />
          <div
            className="rectangle-4"
            style={{
              border:
                screenWidth >= 1400
                  ? "1.17px solid"
                  : screenWidth < 1300
                  ? "1px solid"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "1.08px solid"
                  : undefined,
              height:
                screenWidth >= 1400
                  ? "203px"
                  : screenWidth < 1300
                  ? "174px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "189px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "136px"
                  : screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : undefined,
            }}
          />
          <div
            className="document-translation"
            style={{
              fontSize:
                screenWidth >= 1400
                  ? "21px"
                  : screenWidth < 1300
                  ? "18px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "19.5px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "16px"
                  : screenWidth < 1300
                  ? "14px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "15px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1400
                  ? "0.84px"
                  : screenWidth < 1300
                  ? "0.72px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.78px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "100px"
                  : screenWidth < 1300
                  ? "86px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "93px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "124px"
                  : screenWidth < 1300
                  ? "106px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "115px"
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
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "45px"
                  : screenWidth < 1300
                  ? "39px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "42px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "24px"
                  : screenWidth < 1300
                  ? "21px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "23px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
            }}
            alt="Pdf"
            src={
              screenWidth >= 1400
                ? "/img/pdf-5.png"
                : screenWidth < 1300
                ? "/img/pdf.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/pdf-7.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-15"
          style={{
            border:
              screenWidth < 1300
                ? "1px solid"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.08px solid"
                : screenWidth >= 1400
                ? "1.17px solid"
                : undefined,
            height:
              screenWidth < 1300
                ? "174px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "189px"
                : screenWidth >= 1400
                ? "203px"
                : undefined,
            left:
              screenWidth < 1300
                ? "233px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "253px"
                : screenWidth >= 1400
                ? "272px"
                : undefined,
            top:
              screenWidth < 1300
                ? "3113px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "3377px"
                : screenWidth >= 1400
                ? "3630px"
                : undefined,
            width:
              screenWidth < 1300
                ? "117px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "127px"
                : screenWidth >= 1400
                ? "136px"
                : undefined,
          }}
        >
          <div
            className="marketing-material"
            style={{
              fontSize:
                screenWidth < 1300
                  ? "18px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "19.5px"
                  : screenWidth >= 1400
                  ? "21px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "11px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "12px"
                  : screenWidth >= 1400
                  ? "13px"
                  : undefined,
              letterSpacing:
                screenWidth < 1300
                  ? "0.72px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.78px"
                  : screenWidth >= 1400
                  ? "0.84px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "87px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "94px"
                  : screenWidth >= 1400
                  ? "101px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "93px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "101px"
                  : screenWidth >= 1400
                  ? "108px"
                  : undefined,
            }}
          >
            Marketing Material &amp; Ads
          </div>
          <img
            className="goal"
            style={{
              height:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "20px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "22px"
                  : screenWidth >= 1400
                  ? "23px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
            }}
            alt="Goal"
            src={
              screenWidth < 1300
                ? "/img/goal.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/goal-7.png"
                : screenWidth >= 1400
                ? "/img/goal-5.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-16"
          style={{
            height:
              screenWidth < 1300
                ? "174px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "189px"
                : screenWidth >= 1400
                ? "203px"
                : undefined,
            left:
              screenWidth < 1300
                ? "432px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "468px"
                : screenWidth >= 1400
                ? "504px"
                : undefined,
            top:
              screenWidth < 1300
                ? "3113px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "3377px"
                : screenWidth >= 1400
                ? "3630px"
                : undefined,
            width:
              screenWidth < 1300
                ? "118px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "128px"
                : screenWidth >= 1400
                ? "138px"
                : undefined,
          }}
        >
          <div
            className="rectangle-5"
            style={{
              border:
                screenWidth < 1300
                  ? "1px solid"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "1.08px solid"
                  : screenWidth >= 1400
                  ? "1.17px solid"
                  : undefined,
              height:
                screenWidth < 1300
                  ? "174px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "189px"
                  : screenWidth >= 1400
                  ? "203px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : screenWidth >= 1400
                  ? "136px"
                  : undefined,
            }}
          />
          <div
            className="rectangle-6"
            style={{
              border:
                screenWidth < 1300
                  ? "1px solid"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "1.08px solid"
                  : screenWidth >= 1400
                  ? "1.17px solid"
                  : undefined,
              height:
                screenWidth < 1300
                  ? "174px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "189px"
                  : screenWidth >= 1400
                  ? "203px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : screenWidth >= 1400
                  ? "136px"
                  : undefined,
            }}
          />
          <div
            className="website-apps"
            style={{
              fontSize:
                screenWidth < 1300
                  ? "18px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "19.5px"
                  : screenWidth >= 1400
                  ? "21px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "21px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "23px"
                  : screenWidth >= 1400
                  ? "24px"
                  : undefined,
              letterSpacing:
                screenWidth < 1300
                  ? "0.72px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.78px"
                  : screenWidth >= 1400
                  ? "0.84px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "97px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "105px"
                  : screenWidth >= 1400
                  ? "113px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "77px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "84px"
                  : screenWidth >= 1400
                  ? "90px"
                  : undefined,
            }}
          >
            Website &amp; Apps
          </div>
          <img
            className="website"
            style={{
              height:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "40px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "43px"
                  : screenWidth >= 1400
                  ? "47px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "21px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "23px"
                  : screenWidth >= 1400
                  ? "24px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
            }}
            alt="Website"
            src={
              screenWidth < 1300
                ? "/img/website.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/website-7.png"
                : screenWidth >= 1400
                ? "/img/website-5.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-17"
          style={{
            height:
              screenWidth < 1300
                ? "174px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "189px"
                : screenWidth >= 1400
                ? "203px"
                : undefined,
            left:
              screenWidth < 1300
                ? "629px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "680px"
                : screenWidth >= 1400
                ? "734px"
                : undefined,
            top:
              screenWidth < 1300
                ? "3113px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "3377px"
                : screenWidth >= 1400
                ? "3630px"
                : undefined,
            width:
              screenWidth < 1300
                ? "118px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "128px"
                : screenWidth >= 1400
                ? "138px"
                : undefined,
          }}
        >
          <div
            className="rectangle-7"
            style={{
              border:
                screenWidth < 1300
                  ? "1px solid"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "1.08px solid"
                  : screenWidth >= 1400
                  ? "1.17px solid"
                  : undefined,
              height:
                screenWidth < 1300
                  ? "174px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "189px"
                  : screenWidth >= 1400
                  ? "203px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : screenWidth >= 1400
                  ? "136px"
                  : undefined,
            }}
          />
          <div
            className="rectangle-8"
            style={{
              border:
                screenWidth < 1300
                  ? "1px solid"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "1.08px solid"
                  : screenWidth >= 1400
                  ? "1.17px solid"
                  : undefined,
              height:
                screenWidth < 1300
                  ? "174px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "189px"
                  : screenWidth >= 1400
                  ? "203px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : screenWidth >= 1400
                  ? "136px"
                  : undefined,
            }}
          />
          <div
            className="text-wrapper-15"
            style={{
              fontSize:
                screenWidth < 1300
                  ? "18px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "19.5px"
                  : screenWidth >= 1400
                  ? "21px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "21px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "23px"
                  : screenWidth >= 1400
                  ? "24px"
                  : undefined,
              letterSpacing:
                screenWidth < 1300
                  ? "0.72px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.78px"
                  : screenWidth >= 1400
                  ? "0.84px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "97px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "105px"
                  : screenWidth >= 1400
                  ? "113px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "97px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "105px"
                  : screenWidth >= 1400
                  ? "113px"
                  : undefined,
            }}
          >
            Video Subtitling
          </div>
          <img
            className="video-camera"
            style={{
              height:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
              left:
                screenWidth < 1300
                  ? "39px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "42px"
                  : screenWidth >= 1400
                  ? "45px"
                  : undefined,
              top:
                screenWidth < 1300
                  ? "21px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "23px"
                  : screenWidth >= 1400
                  ? "24px"
                  : undefined,
              width:
                screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : screenWidth >= 1400
                  ? "44px"
                  : undefined,
            }}
            alt="Video camera"
            src={
              screenWidth < 1300
                ? "/img/video-camera.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/video-camera-7.png"
                : screenWidth >= 1400
                ? "/img/video-camera-5.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-18"
          style={{
            height:
              screenWidth >= 1400
                ? "203px"
                : screenWidth < 1300
                ? "174px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "189px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "970px"
                : screenWidth < 1300
                ? "832px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "901px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "3630px"
                : screenWidth < 1300
                ? "3113px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "3377px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "141px"
                : screenWidth < 1300
                ? "121px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "131px"
                : undefined,
          }}
        >
          <div
            className="rectangle-9"
            style={{
              border:
                screenWidth >= 1400
                  ? "1.17px solid"
                  : screenWidth < 1300
                  ? "1px solid"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "1.08px solid"
                  : undefined,
              height:
                screenWidth >= 1400
                  ? "203px"
                  : screenWidth < 1300
                  ? "174px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "189px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "136px"
                  : screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : undefined,
            }}
          />
          <div
            className="rectangle-10"
            style={{
              border:
                screenWidth >= 1400
                  ? "1.17px solid"
                  : screenWidth < 1300
                  ? "1px solid"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "1.08px solid"
                  : undefined,
              height:
                screenWidth >= 1400
                  ? "203px"
                  : screenWidth < 1300
                  ? "174px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "189px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "136px"
                  : screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : undefined,
            }}
          />
          <div
            className="text-wrapper-16"
            style={{
              fontSize:
                screenWidth >= 1400
                  ? "21px"
                  : screenWidth < 1300
                  ? "18px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "19.5px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "5px"
                  : (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300
                  ? "4px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1400
                  ? "0.84px"
                  : screenWidth < 1300
                  ? "0.72px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.78px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "113px"
                  : screenWidth < 1300
                  ? "97px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "105px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "136px"
                  : screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : undefined,
            }}
          >
            Product Descriptions
          </div>
          <img
            className="e-commerce"
            style={{
              height:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "50px"
                  : screenWidth < 1300
                  ? "43px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "47px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "24px"
                  : screenWidth < 1300
                  ? "21px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "23px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
            }}
            alt="E commerce"
            src={
              screenWidth >= 1400
                ? "/img/e-commerce-5.png"
                : screenWidth < 1300
                ? "/img/e-commerce.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/e-commerce-7.png"
                : undefined
            }
          />
        </div>
        <div
          className="overlap-19"
          style={{
            height:
              screenWidth >= 1400
                ? "203px"
                : screenWidth < 1300
                ? "174px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "189px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "1188px"
                : screenWidth < 1300
                ? "1019px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1103px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "3630px"
                : screenWidth < 1300
                ? "3113px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "3377px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "141px"
                : screenWidth < 1300
                ? "121px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "131px"
                : undefined,
          }}
        >
          <div
            className="rectangle-11"
            style={{
              border:
                screenWidth >= 1400
                  ? "1.17px solid"
                  : screenWidth < 1300
                  ? "1px solid"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "1.08px solid"
                  : undefined,
              height:
                screenWidth >= 1400
                  ? "203px"
                  : screenWidth < 1300
                  ? "174px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "189px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "136px"
                  : screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : undefined,
            }}
          />
          <div
            className="rectangle-12"
            style={{
              border:
                screenWidth >= 1400
                  ? "1.17px solid"
                  : screenWidth < 1300
                  ? "1px solid"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "1.08px solid"
                  : undefined,
              height:
                screenWidth >= 1400
                  ? "203px"
                  : screenWidth < 1300
                  ? "174px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "189px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "136px"
                  : screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : undefined,
            }}
          />
          <div
            className="rectangle-13"
            style={{
              border:
                screenWidth >= 1400
                  ? "1.17px solid"
                  : screenWidth < 1300
                  ? "1px solid"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "1.08px solid"
                  : undefined,
              height:
                screenWidth >= 1400
                  ? "203px"
                  : screenWidth < 1300
                  ? "174px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "189px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "136px"
                  : screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : undefined,
            }}
          />
          <div
            className="text-wrapper-17"
            style={{
              fontSize:
                screenWidth >= 1400
                  ? "21px"
                  : screenWidth < 1300
                  ? "18px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "19.5px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "5px"
                  : (screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300
                  ? "4px"
                  : undefined,
              letterSpacing:
                screenWidth >= 1400
                  ? "0.84px"
                  : screenWidth < 1300
                  ? "0.72px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "0.78px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "113px"
                  : screenWidth < 1300
                  ? "97px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "105px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "136px"
                  : screenWidth < 1300
                  ? "117px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "127px"
                  : undefined,
            }}
          >
            Articles, certificates, and more
          </div>
          <img
            className="biotech-2"
            style={{
              height:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
              left:
                screenWidth >= 1400
                  ? "43px"
                  : screenWidth < 1300
                  ? "37px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
              top:
                screenWidth >= 1400
                  ? "17px"
                  : screenWidth < 1300
                  ? "15px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "16px"
                  : undefined,
              width:
                screenWidth >= 1400
                  ? "44px"
                  : screenWidth < 1300
                  ? "38px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "41px"
                  : undefined,
            }}
            alt="Biotech"
            src={
              screenWidth >= 1400
                ? "/img/biotech-9.png"
                : screenWidth < 1300
                ? "/img/biotech.png"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "/img/biotech-13.png"
                : undefined
            }
          />
        </div>
        <p
          className="our-growth-would-not"
          style={{
            fontSize:
              screenWidth >= 1300 && screenWidth < 1400
                ? "17.4px"
                : screenWidth >= 1400
                ? "18.7px"
                : screenWidth < 1300
                ? "16px"
                : undefined,
            left:
              screenWidth >= 1300 && screenWidth < 1400
                ? "128px"
                : screenWidth >= 1400
                ? "138px"
                : screenWidth < 1300
                ? "118px"
                : undefined,
            letterSpacing:
              screenWidth >= 1300 && screenWidth < 1400
                ? "0.69px"
                : screenWidth >= 1400
                ? "0.75px"
                : screenWidth < 1300
                ? "0.64px"
                : undefined,
            lineHeight:
              screenWidth >= 1300 && screenWidth < 1400
                ? "28.6px"
                : screenWidth >= 1400
                ? "30.8px"
                : screenWidth < 1300
                ? "26.4px"
                : undefined,
            top:
              screenWidth >= 1300 && screenWidth < 1400
                ? "2626px"
                : screenWidth >= 1400
                ? "2822px"
                : screenWidth < 1300
                ? "2420px"
                : undefined,
            width:
              screenWidth >= 1300 && screenWidth < 1400
                ? "309px"
                : screenWidth >= 1400
                ? "332px"
                : screenWidth < 1300
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
              screenWidth < 1300
                ? "16px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "17.4px"
                : screenWidth >= 1400
                ? "18.7px"
                : undefined,
            left:
              screenWidth < 1300
                ? "456px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "493px"
                : screenWidth >= 1400
                ? "532px"
                : undefined,
            letterSpacing:
              screenWidth < 1300
                ? "0.64px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "0.69px"
                : screenWidth >= 1400
                ? "0.75px"
                : undefined,
            lineHeight:
              screenWidth < 1300
                ? "26.2px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "28.5px"
                : screenWidth >= 1400
                ? "30.6px"
                : undefined,
            top:
              screenWidth < 1300
                ? "2424px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "2630px"
                : screenWidth >= 1400
                ? "2827px"
                : undefined,
            width:
              screenWidth < 1300
                ? "285px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "309px"
                : screenWidth >= 1400
                ? "332px"
                : undefined,
          }}
        >
          What we were looking for in Magma was the cultural localization, their deep understanding of how people think
          in other countries, specially of the US, UK and Germany for our projects
        </p>
        <p
          className="we-are-a-german"
          style={{
            fontSize:
              screenWidth < 1300
                ? "16px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "17.4px"
                : screenWidth >= 1400
                ? "18.7px"
                : undefined,
            left:
              screenWidth < 1300
                ? "792px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "856px"
                : screenWidth >= 1400
                ? "924px"
                : undefined,
            letterSpacing:
              screenWidth < 1300
                ? "0.64px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "0.69px"
                : screenWidth >= 1400
                ? "0.75px"
                : undefined,
            lineHeight:
              screenWidth < 1300
                ? "16px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "17.4px"
                : screenWidth >= 1400
                ? "18.7px"
                : undefined,
            top:
              screenWidth < 1300
                ? "2424px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "2630px"
                : screenWidth >= 1400
                ? "2827px"
                : undefined,
            width:
              screenWidth < 1300
                ? "285px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "309px"
                : screenWidth >= 1400
                ? "332px"
                : undefined,
          }}
        >
          <span
            className="text_wrapper"
            style={{
              lineHeight:
                screenWidth < 1300
                  ? "21.4px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "23.2px"
                  : screenWidth >= 1400
                  ? "24.9px"
                  : undefined,
            }}
          >
            We are a German company, the largest auto parts manufacturer in the world. For us, trust in data security is{" "}
          </span>
          <span
            className="text_wrapper"
            style={{
              lineHeight:
                screenWidth < 1300
                  ? "26.2px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "28.5px"
                  : screenWidth >= 1400
                  ? "30.6px"
                  : undefined,
            }}
          >
            essential
          </span>
          <span
            className="text_wrapper"
            style={{
              lineHeight:
                screenWidth < 1300
                  ? "21.4px"
                  : screenWidth >= 1300 && screenWidth < 1400
                  ? "23.2px"
                  : screenWidth >= 1400
                  ? "24.9px"
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
              screenWidth >= 1400
                ? "43.1px"
                : screenWidth < 1300
                ? "37px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "40.1px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "385px"
                : screenWidth < 1300
                ? "330px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "357px"
                : undefined,
            letterSpacing:
              screenWidth >= 1400
                ? "1.73px"
                : screenWidth < 1300
                ? "1.48px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1.61px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "2329px"
                : screenWidth < 1300
                ? "1997px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "2167px"
                : undefined,
            width:
              screenWidth >= 1400
                ? "626px"
                : screenWidth < 1300
                ? "537px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "583px"
                : undefined,
          }}
        >
          Highest Quality Guaranteed
        </div>
        <p
          className="every-translation"
          style={{
            fontSize:
              screenWidth >= 1400
                ? "23.3px"
                : screenWidth < 1300
                ? "20px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "21.7px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "234px"
                : screenWidth < 1300
                ? "201px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "217px"
                : undefined,
            letterSpacing:
              screenWidth >= 1400
                ? "0.93px"
                : screenWidth < 1300
                ? "0.80px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "0.87px"
                : undefined,
            lineHeight:
              screenWidth >= 1400
                ? "31.5px"
                : screenWidth < 1300
                ? "27.0px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "29.3px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "2420px"
                : screenWidth < 1300
                ? "2075px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "2251px"
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
              screenWidth >= 1400
                ? "21px"
                : screenWidth < 1300
                ? "18px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "19.5px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "233px"
                : screenWidth < 1300
                ? "200px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "216px"
                : undefined,
            letterSpacing:
              screenWidth >= 1400
                ? "0.84px"
                : screenWidth < 1300
                ? "0.72px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "0.78px"
                : undefined,
            lineHeight:
              screenWidth >= 1400
                ? "34.6px"
                : screenWidth < 1300
                ? "29.7px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "32.2px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "2734px"
                : screenWidth < 1300
                ? "2344px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "2543px"
                : undefined,
          }}
        >
          Shopee.com
        </div>
        <div
          className="text-wrapper-21"
          style={{
            fontSize:
              screenWidth >= 1300 && screenWidth < 1400
                ? "19.5px"
                : screenWidth >= 1400
                ? "21px"
                : screenWidth < 1300
                ? "18px"
                : undefined,
            left:
              screenWidth >= 1300 && screenWidth < 1400
                ? "609px"
                : screenWidth >= 1400
                ? "655px"
                : screenWidth < 1300
                ? "562px"
                : undefined,
            letterSpacing:
              screenWidth >= 1300 && screenWidth < 1400
                ? "0.78px"
                : screenWidth >= 1400
                ? "0.84px"
                : screenWidth < 1300
                ? "0.72px"
                : undefined,
            lineHeight:
              screenWidth >= 1300 && screenWidth < 1400
                ? "32.2px"
                : screenWidth >= 1400
                ? "34.6px"
                : screenWidth < 1300
                ? "29.7px"
                : undefined,
            top:
              screenWidth >= 1300 && screenWidth < 1400
                ? "2543px"
                : screenWidth >= 1400
                ? "2734px"
                : screenWidth < 1300
                ? "2344px"
                : undefined,
          }}
        >
          Hotmart
        </div>
        <div
          className="text-wrapper-22"
          style={{
            fontSize:
              screenWidth < 1300
                ? "18px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "19.5px"
                : screenWidth >= 1400
                ? "21px"
                : undefined,
            left:
              screenWidth < 1300
                ? "872px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "944px"
                : screenWidth >= 1400
                ? "1017px"
                : undefined,
            letterSpacing:
              screenWidth < 1300
                ? "0.72px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "0.78px"
                : screenWidth >= 1400
                ? "0.84px"
                : undefined,
            lineHeight:
              screenWidth < 1300
                ? "29.7px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "32.2px"
                : screenWidth >= 1400
                ? "34.6px"
                : undefined,
            top:
              screenWidth < 1300
                ? "2344px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "2543px"
                : screenWidth >= 1400
                ? "2734px"
                : undefined,
          }}
        >
          ZF Friedrichshafen
        </div>
        <div
          className="text-wrapper-23"
          style={{
            fontSize:
              screenWidth < 1300
                ? "18px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "19.5px"
                : screenWidth >= 1400
                ? "21px"
                : undefined,
            left:
              screenWidth < 1300
                ? "189px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "204px"
                : screenWidth >= 1400
                ? "220px"
                : undefined,
            letterSpacing:
              screenWidth < 1300
                ? "0.72px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "0.78px"
                : screenWidth >= 1400
                ? "0.84px"
                : undefined,
            lineHeight:
              screenWidth < 1300
                ? "29.7px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "32.2px"
                : screenWidth >= 1400
                ? "34.6px"
                : undefined,
            top:
              screenWidth < 1300
                ? "2306px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "2502px"
                : screenWidth >= 1400
                ? "2689px"
                : undefined,
          }}
        >
          Milton Santana
        </div>
        <div
          className="text-wrapper-24"
          style={{
            fontSize:
              screenWidth >= 1400
                ? "21px"
                : screenWidth < 1300
                ? "18px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "19.5px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "639px"
                : screenWidth < 1300
                ? "548px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "594px"
                : undefined,
            letterSpacing:
              screenWidth >= 1400
                ? "0.84px"
                : screenWidth < 1300
                ? "0.72px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "0.78px"
                : undefined,
            lineHeight:
              screenWidth >= 1400
                ? "34.6px"
                : screenWidth < 1300
                ? "29.7px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "32.2px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "2689px"
                : screenWidth < 1300
                ? "2306px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "2502px"
                : undefined,
          }}
        >
          Bruno Vidal
        </div>
        <div
          className="text-wrapper-25"
          style={{
            fontSize:
              screenWidth >= 1400
                ? "21px"
                : screenWidth < 1300
                ? "18px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "19.5px"
                : undefined,
            left:
              screenWidth >= 1400
                ? "989px"
                : screenWidth < 1300
                ? "848px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "918px"
                : undefined,
            letterSpacing:
              screenWidth >= 1400
                ? "0.84px"
                : screenWidth < 1300
                ? "0.72px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "0.78px"
                : undefined,
            lineHeight:
              screenWidth >= 1400
                ? "34.6px"
                : screenWidth < 1300
                ? "29.7px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "32.2px"
                : undefined,
            top:
              screenWidth >= 1400
                ? "2689px"
                : screenWidth < 1300
                ? "2306px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "2502px"
                : undefined,
          }}
        >
          Danielle Schmitt Capote
        </div>
        <img
          className="ellipse"
          style={{
            height:
              screenWidth >= 1300 && screenWidth < 1400
                ? "91px"
                : screenWidth >= 1400
                ? "98px"
                : screenWidth < 1300
                ? "84px"
                : undefined,
            left:
              screenWidth >= 1300 && screenWidth < 1400
                ? "228px"
                : screenWidth >= 1400
                ? "246px"
                : screenWidth < 1300
                ? "211px"
                : undefined,
            top:
              screenWidth >= 1300 && screenWidth < 1400
                ? "2383px"
                : screenWidth >= 1400
                ? "2561px"
                : screenWidth < 1300
                ? "2196px"
                : undefined,
            width:
              screenWidth >= 1300 && screenWidth < 1400
                ? "91px"
                : screenWidth >= 1400
                ? "98px"
                : screenWidth < 1300
                ? "84px"
                : undefined,
          }}
          alt="Ellipse"
          src={
            screenWidth >= 1300 && screenWidth < 1400
              ? "/img/ellipse-1-8.png"
              : screenWidth >= 1400
              ? "/img/ellipse-1-6.png"
              : screenWidth < 1300
              ? "/img/ellipse-1.png"
              : undefined
          }
        />
        <img
          className="ellipse-2"
          style={{
            height:
              screenWidth < 1300
                ? "84px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "91px"
                : screenWidth >= 1400
                ? "98px"
                : undefined,
            left:
              screenWidth < 1300
                ? "555px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "601px"
                : screenWidth >= 1400
                ? "647px"
                : undefined,
            top:
              screenWidth < 1300
                ? "2194px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "2380px"
                : screenWidth >= 1400
                ? "2559px"
                : undefined,
            width:
              screenWidth < 1300
                ? "84px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "91px"
                : screenWidth >= 1400
                ? "98px"
                : undefined,
          }}
          alt="Ellipse"
          src={
            screenWidth < 1300
              ? "/img/ellipse-2.png"
              : screenWidth >= 1300 && screenWidth < 1400
              ? "/img/ellipse-2-8.png"
              : screenWidth >= 1400
              ? "/img/ellipse-2-6.png"
              : undefined
          }
        />
        <img
          className="ellipse-3"
          style={{
            height:
              screenWidth < 1300
                ? "84px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "91px"
                : screenWidth >= 1400
                ? "98px"
                : undefined,
            left:
              screenWidth < 1300
                ? "920px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "996px"
                : screenWidth >= 1400
                ? "1073px"
                : undefined,
            top:
              screenWidth < 1300
                ? "2196px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "2383px"
                : screenWidth >= 1400
                ? "2561px"
                : undefined,
            width:
              screenWidth < 1300
                ? "84px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "91px"
                : screenWidth >= 1400
                ? "98px"
                : undefined,
          }}
          alt="Ellipse"
          src={
            screenWidth < 1300
              ? "/img/ellipse-3.png"
              : screenWidth >= 1300 && screenWidth < 1400
              ? "/img/ellipse-3-8.png"
              : screenWidth >= 1400
              ? "/img/ellipse-3-6.png"
              : undefined
          }
        />
        {screenWidth < 1300 && (
          <>
            <Star17 className="star" />
            <Star66 className="star-6-6" />
            <Star117 className="star-11-7" />
            <Star27 className="star-2-7" />
            <Star76 className="star-7-6" />
            <Star127 className="star-12-7" />
            <Star37 className="star-3-7" />
            <Star86 className="star-8-6" />
            <Star137 className="star-13-7" />
            <Star47 className="star-4-7" />
            <Star96 className="star-9-6" />
            <Star147 className="star-14-7" />
            <Star57 className="star-5-7" />
            <Star106 className="star-10-6" />
            <Star157 className="star-15-7" />
          </>
        )}

        {screenWidth >= 1300 && screenWidth < 1400 && (
          <>
            <Star18 className="star-1-8" />
            <Star67 className="star-6-7" />
            <Star118 className="star-11-8" />
            <Star28 className="star-2-8" />
            <Star77 className="star-7-7" />
            <Star128 className="star-12-8" />
            <Star38 className="star-3-8" />
            <Star87 className="star-8-7" />
            <Star138 className="star-13-8" />
            <Star48 className="star-4-8" />
            <Star97 className="star-9-7" />
            <Star148 className="star-14-8" />
            <Star58 className="star-5-8" />
            <Star107 className="star-10-7" />
            <Star158 className="star-15-8" />
          </>
        )}

        {((screenWidth >= 1300 && screenWidth < 1400) || screenWidth < 1300) && (
          <div
            className="frame"
            style={{
              height: screenWidth < 1300 ? "407px" : screenWidth >= 1300 && screenWidth < 1400 ? "442px" : undefined,
              top: screenWidth < 1300 ? "3474px" : screenWidth >= 1300 && screenWidth < 1400 ? "3769px" : undefined,
              width: screenWidth < 1300 ? "1201px" : screenWidth >= 1300 && screenWidth < 1400 ? "1300px" : undefined,
            }}
          >
            <p
              className="text-wrapper-26"
              style={{
                fontSize:
                  screenWidth < 1300 ? "18px" : screenWidth >= 1300 && screenWidth < 1400 ? "19.5px" : undefined,
                left: screenWidth < 1300 ? "192px" : screenWidth >= 1300 && screenWidth < 1400 ? "206px" : undefined,
                letterSpacing:
                  screenWidth < 1300 ? "0.72px" : screenWidth >= 1300 && screenWidth < 1400 ? "0.78px" : undefined,
                lineHeight:
                  screenWidth < 1300 ? "29.7px" : screenWidth >= 1300 && screenWidth < 1400 ? "32.2px" : undefined,
                top: screenWidth < 1300 ? "117px" : screenWidth >= 1300 && screenWidth < 1400 ? "127px" : undefined,
                width: screenWidth < 1300 ? "816px" : screenWidth >= 1300 && screenWidth < 1400 ? "885px" : undefined,
              }}
            >
              MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
              diverse markets around the world.
            </p>
            <p
              className="text-wrapper-27"
              style={{
                fontSize:
                  screenWidth < 1300 ? "18px" : screenWidth >= 1300 && screenWidth < 1400 ? "19.5px" : undefined,
                left: screenWidth < 1300 ? "192px" : screenWidth >= 1300 && screenWidth < 1400 ? "206px" : undefined,
                letterSpacing:
                  screenWidth < 1300 ? "0.72px" : screenWidth >= 1300 && screenWidth < 1400 ? "0.78px" : undefined,
                lineHeight:
                  screenWidth < 1300 ? "29.7px" : screenWidth >= 1300 && screenWidth < 1400 ? "32.2px" : undefined,
                top: screenWidth < 1300 ? "249px" : screenWidth >= 1300 && screenWidth < 1400 ? "270px" : undefined,
                width: screenWidth < 1300 ? "529px" : screenWidth >= 1300 && screenWidth < 1400 ? "574px" : undefined,
              }}
            >
              Magma Translation | All rights reserved. ©Magma™
            </p>
          </div>
        )}

        {screenWidth >= 1400 && (
          <>
            <Star16 className="star-1-6" />
            <Star65 className="star-6-5" />
            <Star116 className="star-11-6" />
            <Star26 className="star-2-6" />
            <Star75 className="star-7-5" />
            <Star126 className="star-12-6" />
            <Star36 className="star-3-6" />
            <Star85 className="star-8-5" />
            <Star136 className="star-13-6" />
            <Star46 className="star-4-6" />
            <Star95 className="star-9-5" />
            <Star146 className="star-14-6" />
            <Star56 className="star-5-6" />
            <Star105 className="star-10-5" />
            <Star156 className="star-15-6" />
            <div className="frame-2">
              <p className="text-wrapper-28">
                MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
                diverse markets around the world.
              </p>
              <p className="text-wrapper-29">Magma Translation | All rights reserved. ©Magma™</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
