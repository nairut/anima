import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import "./style.css";

export const Element = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="element">
      <div
        className="celular"
        style={{
          border:
            screenWidth < 1000
              ? "1px none"
              : screenWidth >= 1000 && screenWidth < 1300
              ? "0.83px none"
              : (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
              ? "0.99px none"
              : undefined,
          height:
            screenWidth < 1000
              ? "912px"
              : screenWidth >= 1000 && screenWidth < 1300
              ? "3024.98px"
              : screenWidth >= 1300 && screenWidth < 1500
              ? "3647px"
              : screenWidth >= 1500
              ? "3633px"
              : undefined,
          width:
            screenWidth < 1000
              ? "430px"
              : screenWidth >= 1000 && screenWidth < 1300
              ? "1000px"
              : screenWidth >= 1300 && screenWidth < 1500
              ? "1300px"
              : screenWidth >= 1500
              ? "1500px"
              : undefined,
        }}
      >
        {screenWidth < 1000 && (
          <>
            <h1 className="text-wrapper-6">Professional Translation Services</h1>
            <p className="element-languages-that">
              120 languages that fits in your budget
              <br />
              High Quality Human Translation
              <br />
              Linguists with Master&#39;s Degrees
            </p>
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <Lady
            className={`${screenWidth >= 1000 && screenWidth < 1300 && "class"} ${
              screenWidth >= 1300 && screenWidth < 1500 && "class-2"
            } ${screenWidth >= 1500 && "class-3"}`}
          />
        )}

        {((screenWidth >= 1000 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <p
              className="p"
              style={{
                fontSize:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "37.7px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "31.4px"
                    : undefined,
                left:
                  screenWidth >= 1500
                    ? "397px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "206px"
                    : screenWidth >= 1300 && screenWidth < 1500
                    ? "297px"
                    : undefined,
                letterSpacing:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "1.51px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "1.26px"
                    : undefined,
                top:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "736px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "613px"
                    : undefined,
                width:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "706px"
                    : screenWidth >= 1000 && screenWidth < 1300
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
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "37px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "30.8px"
                    : undefined,
                left:
                  screenWidth >= 1500
                    ? "337px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "157px"
                    : screenWidth >= 1300 && screenWidth < 1500
                    ? "237px"
                    : undefined,
                letterSpacing:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "1.48px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "1.23px"
                    : undefined,
                top:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "1215px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "1012px"
                    : undefined,
                width:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "853px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "710px"
                    : undefined,
              }}
            >
              Costumized to Fit your Specific Industry Needs
            </p>
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <img
            className="zapier-png"
            style={{
              height:
                (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "70px"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "155px"
                  : undefined,
              left:
                screenWidth >= 1300 && screenWidth < 1500
                  ? "151px"
                  : screenWidth >= 1500
                  ? "251px"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "85px"
                  : undefined,
              top:
                (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "837px"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "697px"
                  : undefined,
              width:
                (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "101px"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "830px"
                  : undefined,
            }}
            alt="Zapier png"
            src={
              (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                ? "/img/zapier-png-0.png"
                : screenWidth >= 1000 && screenWidth < 1300
                ? "/img/group-8.png"
                : undefined
            }
          />
        )}

        {screenWidth >= 1000 && screenWidth < 1300 && (
          <>
            <div className="overlap-6">
              <div className="text-wrapper-8">Legal</div>
              <img className="law" alt="Law" src="/img/law.png" />
            </div>
            <div className="overlap-7">
              <div className="media-films">Media &amp; Films</div>
              <img className="img-2" alt="Next" src="/img/next.png" />
            </div>
            <div className="overlap-8">
              <div className="text-wrapper-9">Medical</div>
              <img className="img-2" alt="Medical bag" src="/img/medical-bag.png" />
            </div>
            <div className="overlap-9">
              <div className="text-wrapper-10">E-Learning</div>
              <img className="img-2" alt="Mba" src="/img/mba.png" />
            </div>
            <div className="overlap-10">
              <div className="text-wrapper-11">Manufacturing</div>
              <img className="img-2" alt="Manufacturing" src="/img/manufacturing.png" />
            </div>
            <div className="overlap-11">
              <div className="text-wrapper-12">Automotive</div>
              <img className="img-2" alt="Tesla model x" src="/img/tesla-model-x.png" />
            </div>
            <div className="overlap-12">
              <div className="text-wrapper-13">Financial</div>
              <img className="money-bag-pounds" alt="Money bag pounds" src="/img/money-bag-pounds.png" />
            </div>
            <div className="overlap-group-3">
              <div className="text-wrapper-14">Marketing</div>
              <img className="img-2" alt="Commercial" src="/img/commercial.png" />
            </div>
            <div className="overlap-13">
              <div className="text-wrapper-11">IT &amp; Software</div>
              <img className="img-2" alt="Programming flag" src="/img/programming-flag.png" />
            </div>
            <div className="overlap-14">
              <div className="text-wrapper-15">Life Science</div>
              <img className="img-2" alt="Biotech" src="/img/biotech.png" />
            </div>
            <div className="overlap-15">
              <div className="text-wrapper-13">Tourism</div>
              <img className="img-2" alt="Plane" src="/img/plane.png" />
            </div>
            <div className="overlap-16">
              <div className="text-wrapper-16">E-commerce</div>
              <img className="img-2" alt="Buy" src="/img/buy.png" />
            </div>
            <div className="text-wrapper-17">What can you translate?</div>
            <p className="text-wrapper-18">
              Our proficient translators have the capability to translate any kind of document, supporting the
              undermentioned file types
            </p>
            <div className="overlap-17">
              <div className="document-translation">
                Document
                <br />
                Translation
              </div>
              <img className="img-3" alt="Pdf" src="/img/pdf.png" />
            </div>
            <div className="overlap-18">
              <div className="marketing-material">Marketing Material &amp; Ads</div>
              <img className="img-3" alt="Goal" src="/img/goal.png" />
            </div>
            <div className="overlap-19">
              <div className="website-apps">Website &amp; Apps</div>
              <img className="img-3" alt="Website" src="/img/website.png" />
            </div>
            <div className="overlap-20">
              <div className="text-wrapper-19">Video Subtitling</div>
              <img className="img-3" alt="Video camera" src="/img/video-camera.png" />
            </div>
            <div className="overlap-21">
              <div className="text-wrapper-20">Product Descriptions</div>
              <img className="img-3" alt="E commerce" src="/img/e-commerce.png" />
            </div>
            <div className="overlap-22">
              <div className="text-wrapper-21">Articles, certificates, and more</div>
              <img className="biotech" alt="Biotech" src="/img/biotech-1.png" />
            </div>
            <div className="group-5">
              <h1 className="text-wrapper-22">Professional Translation Services</h1>
              <p className="element-languages-that-2">
                120 languages that fits in your budget
                <br />
                Human Translation done with the highest quality in the market
                <br />
                Linguists with Master&#39;s Degrees
              </p>
              <Group
                className="group-instance"
                property1="default"
                talkToAnExpertClassName="group-2-instance"
                to="/desktop-form"
              />
            </div>
            <Group
              className="instance-node"
              property1="default"
              talkToAnExpertClassName="group-2-instance"
              to="/desktop-form"
            />
            <Group
              className="group-6"
              property1="default"
              talkToAnExpertClassName="group-2-instance"
              to="/desktop-form"
            />
            <p className="our-growth-would-not">
              Our Growth would not have been possible without Magma Translation. <br />
              Our internationalization occurred through the expertise of their team.
            </p>
            <p className="text-wrapper-23">
              What we were looking for in Magma was the cultural localization, their deep understanding of how people
              think in other countries, specially of the US, UK and Germany for our projects
            </p>
            <p className="we-are-a-german">
              <span className="span">
                We are a German company, the largest auto parts manufacturer in the world. For us, trust in data
                security is{" "}
              </span>
              <span className="text-wrapper-24">essential</span>
              <span className="span">. Magma Translation is a trusted company.</span>
            </p>
            <div className="text-wrapper-25">Highest Quality Guaranteed</div>
            <p className="every-translation">
              Every translation undergoes thorough proofreading and validation by <br />
              both our team of professional external editors and our internal language specialists.
            </p>
            <div className="text-wrapper-26">Shopee.com</div>
            <div className="text-wrapper-27">Hotmart</div>
            <div className="text-wrapper-28">ZF Friedrichshafen</div>
            <div className="text-wrapper-29">Milton Santana</div>
            <div className="text-wrapper-30">Bruno Vidal</div>
            <div className="text-wrapper-31">Danielle Schmitt Capote</div>
            <img className="ellipse" alt="Ellipse" src="/img/ellipse-1.png" />
            <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-2.png" />
            <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-3.png" />
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <img
            className="star"
            style={{
              height:
                screenWidth >= 1000 && screenWidth < 1300
                  ? "16px"
                  : (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "70px"
                  : undefined,
              left:
                screenWidth >= 1000 && screenWidth < 1300
                  ? "157px"
                  : screenWidth >= 1300 && screenWidth < 1500
                  ? "151px"
                  : screenWidth >= 1500
                  ? "251px"
                  : undefined,
              top:
                screenWidth >= 1000 && screenWidth < 1300
                  ? "2061px"
                  : (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "953px"
                  : undefined,
              width:
                screenWidth >= 1000 && screenWidth < 1300
                  ? "19px"
                  : (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "101px"
                  : undefined,
            }}
            alt="Star"
            src={
              screenWidth >= 1000 && screenWidth < 1300
                ? "/img/star-16.png"
                : (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                ? "/img/abbott-png-0.png"
                : undefined
            }
          />
        )}

        {((screenWidth >= 1000 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <img
              className="zf-png"
              style={{
                height:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "70px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "16px"
                    : undefined,
                left:
                  screenWidth >= 1300 && screenWidth < 1500
                    ? "279px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "441px"
                    : screenWidth >= 1500
                    ? "379px"
                    : undefined,
                top:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "837px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "2061px"
                    : undefined,
                width:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "101px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "19px"
                    : undefined,
              }}
              alt="Zf png"
              src={
                (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "/img/zf-png-0.png"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "/img/star-21.png"
                  : undefined
              }
            />
            <img
              className="anton-paar-png"
              style={{
                height:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "70px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "16px"
                    : undefined,
                left:
                  screenWidth >= 1300 && screenWidth < 1500
                    ? "279px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "720px"
                    : screenWidth >= 1500
                    ? "379px"
                    : undefined,
                top:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "953px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "2061px"
                    : undefined,
                width:
                  (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                    ? "101px"
                    : screenWidth >= 1000 && screenWidth < 1300
                    ? "19px"
                    : undefined,
              }}
              alt="Anton paar png"
              src={
                (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "/img/anton-paar-png-0.png"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "/img/star-26.png"
                  : undefined
              }
            />
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <img
            className="crowdin-png"
            style={{
              height:
                (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "70px"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "16px"
                  : undefined,
              left:
                screenWidth >= 1500
                  ? "507px"
                  : screenWidth >= 1300 && screenWidth < 1500
                  ? "407px"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "182px"
                  : undefined,
              top:
                (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "837px"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "2061px"
                  : undefined,
              width:
                (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "101px"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "19px"
                  : undefined,
            }}
            alt="Crowdin png"
            src={
              (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                ? "/img/crowdin-png-0.png"
                : screenWidth >= 1000 && screenWidth < 1300
                ? "/img/star-17.png"
                : undefined
            }
          />
        )}

        {screenWidth >= 1000 && screenWidth < 1300 && (
          <>
            <img className="star-2" alt="Star" src="/img/star-22.png" />
            <img className="star-3" alt="Star" src="/img/star-27.png" />
            <img className="star-4" alt="Star" src="/img/star-18.png" />
            <img className="star-5" alt="Star" src="/img/star-23.png" />
            <img className="star-6" alt="Star" src="/img/star-28.png" />
            <img className="star-7" alt="Star" src="/img/star-19.png" />
            <img className="star-8" alt="Star" src="/img/star-24.png" />
            <img className="star-9" alt="Star" src="/img/star-29.png" />
            <img className="star-10" alt="Star" src="/img/star-20.png" />
            <img className="star-11" alt="Star" src="/img/star-25.png" />
            <img className="star-12" alt="Star" src="/img/star-30.png" />
            <img className="magma-translation-2" alt="Magma translation" src="/img/magma-translation-png-1.png" />
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1300) || screenWidth < 1000) && (
          <div
            className="frame"
            style={{
              backgroundColor:
                screenWidth >= 1000 && screenWidth < 1300 ? "#000000" : screenWidth < 1000 ? "#0536a8" : undefined,
              height: screenWidth >= 1000 && screenWidth < 1300 ? "325px" : screenWidth < 1000 ? "266px" : undefined,
              left: screenWidth >= 1000 && screenWidth < 1300 ? "1px" : screenWidth < 1000 ? "0" : undefined,
              top: screenWidth >= 1000 && screenWidth < 1300 ? "2700px" : screenWidth < 1000 ? "646px" : undefined,
              width: screenWidth >= 1000 && screenWidth < 1300 ? "999px" : screenWidth < 1000 ? "430px" : undefined,
            }}
          >
            {screenWidth >= 1000 && screenWidth < 1300 && (
              <>
                <p className="text-wrapper-32">
                  MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence
                  in diverse markets around the world.
                </p>
                <p className="text-wrapper-33">Magma Translation | All rights reserved. ©Magma™</p>
              </>
            )}

            {screenWidth < 1000 && <div className="click-to-discover">CLICK TO DISCOVER</div>}
          </div>
        )}

        {((screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500) && (
          <img
            className="rectangle-4"
            style={{
              left: screenWidth >= 1500 ? "507px" : screenWidth >= 1300 && screenWidth < 1500 ? "407px" : undefined,
            }}
            alt="Rectangle"
            src="/img/rectangle-13.png"
          />
        )}

        {((screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500 || screenWidth < 1000) && (
          <img
            className="cloudwords-png"
            style={{
              height:
                (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "70px"
                  : screenWidth < 1000
                  ? "54px"
                  : undefined,
              left:
                screenWidth >= 1300 && screenWidth < 1500
                  ? "535px"
                  : screenWidth < 1000
                  ? "118px"
                  : screenWidth >= 1500
                  ? "635px"
                  : undefined,
              top:
                (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "837px"
                  : screenWidth < 1000
                  ? "34px"
                  : undefined,
              width:
                (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                  ? "101px"
                  : screenWidth < 1000
                  ? "194px"
                  : undefined,
            }}
            alt="Cloudwords png"
            src={
              (screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500
                ? "/img/cloudwords-png-0.png"
                : screenWidth < 1000
                ? "/img/magma-translation-png.png"
                : undefined
            }
          />
        )}

        {((screenWidth >= 1300 && screenWidth < 1500) || screenWidth >= 1500) && (
          <>
            <img
              className="rectangle-5"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "535px" : screenWidth >= 1500 ? "635px" : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-14.png"
            />
            <img
              className="rectangle-6"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "663px" : screenWidth >= 1500 ? "763px" : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-7.png"
            />
            <img
              className="rectangle-7"
              style={{
                left: screenWidth >= 1500 ? "763px" : screenWidth >= 1300 && screenWidth < 1500 ? "663px" : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-15.png"
            />
            <img
              className="rectangle-8"
              style={{
                left: screenWidth >= 1500 ? "891px" : screenWidth >= 1300 && screenWidth < 1500 ? "791px" : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-8.png"
            />
            <img
              className="evoltz-png"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "791px" : screenWidth >= 1500 ? "891px" : undefined,
              }}
              alt="Evoltz png"
              src="/img/evoltz-png-0.png"
            />
            <img
              className="rectangle-9"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "913px" : screenWidth >= 1500 ? "1013px" : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-9.png"
            />
            <img
              className="jungheinrich-png"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "919px" : screenWidth >= 1500 ? "1019px" : undefined,
              }}
              alt="Jungheinrich png"
              src="/img/jungheinrich-png-0.png"
            />
            <img
              className="rectangle-10"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "1033px" : screenWidth >= 1500 ? "1133px" : undefined,
              }}
              alt="Rectangle"
              src="/img/rectangle-10.png"
            />
            <img
              className="shopee-png"
              style={{
                left: screenWidth >= 1500 ? "1147px" : screenWidth >= 1300 && screenWidth < 1500 ? "1047px" : undefined,
              }}
              alt="Shopee png"
              src="/img/shopee-png-0.png"
            />
            <div
              className="overlap-23"
              style={{
                left: screenWidth >= 1500 ? "213px" : screenWidth >= 1300 && screenWidth < 1500 ? "113px" : undefined,
              }}
            >
              <div className="text-wrapper-34">Legal</div>
              <img className="law-2" alt="Law" src="/img/law-1.png" />
            </div>
            <div
              className="overlap-24"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "113px" : screenWidth >= 1500 ? "213px" : undefined,
              }}
            >
              <div className="media-films-2">Media &amp; Films</div>
              <img className="next" alt="Next" src="/img/next-1.png" />
            </div>
            <div
              className="overlap-25"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "297px" : screenWidth >= 1500 ? "397px" : undefined,
              }}
            >
              <div className="text-wrapper-35">Medical</div>
              <img className="img-4" alt="Medical bag" src="/img/medical-bag-1.png" />
            </div>
            <div
              className="overlap-26"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "297px" : screenWidth >= 1500 ? "397px" : undefined,
              }}
            >
              <div className="text-wrapper-36">E-Learning</div>
              <img className="img-4" alt="Mba" src="/img/mba-1.png" />
            </div>
            <div
              className="overlap-27"
              style={{
                left: screenWidth >= 1500 ? "581px" : screenWidth >= 1300 && screenWidth < 1500 ? "481px" : undefined,
              }}
            >
              <div className="text-wrapper-37">Manufacturing</div>
              <img className="img-4" alt="Manufacturing" src="/img/manufacturing-1.png" />
            </div>
            <div
              className="overlap-28"
              style={{
                left: screenWidth >= 1500 ? "581px" : screenWidth >= 1300 && screenWidth < 1500 ? "481px" : undefined,
              }}
            >
              <div className="text-wrapper-38">Automotive</div>
              <img className="img-4" alt="Tesla model x" src="/img/tesla-model-x-1.png" />
            </div>
            <div
              className="overlap-29"
              style={{
                left: screenWidth >= 1500 ? "765px" : screenWidth >= 1300 && screenWidth < 1500 ? "665px" : undefined,
              }}
            >
              <div className="text-wrapper-39">Financial</div>
              <img className="money-bag-pounds-2" alt="Money bag pounds" src="/img/money-bag-pounds-1.png" />
            </div>
            <div
              className="overlap-30"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "665px" : screenWidth >= 1500 ? "765px" : undefined,
              }}
            >
              <div className="text-wrapper-40">Marketing</div>
              <img className="img-4" alt="Commercial" src="/img/commercial-1.png" />
            </div>
            <div
              className="overlap-31"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "849px" : screenWidth >= 1500 ? "949px" : undefined,
              }}
            >
              <div className="text-wrapper-37">IT &amp; Software</div>
              <img className="img-4" alt="Programming flag" src="/img/programming-flag-1.png" />
            </div>
            <div
              className="overlap-32"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "849px" : screenWidth >= 1500 ? "949px" : undefined,
              }}
            >
              <div className="text-wrapper-41">Life Science</div>
              <img className="img-4" alt="Biotech" src="/img/biotech-2.png" />
            </div>
            <div
              className="overlap-33"
              style={{
                left: screenWidth >= 1500 ? "1133px" : screenWidth >= 1300 && screenWidth < 1500 ? "1033px" : undefined,
              }}
            >
              <div className="text-wrapper-39">Tourism</div>
              <img className="img-4" alt="Plane" src="/img/plane-1.png" />
            </div>
            <div
              className="overlap-34"
              style={{
                left: screenWidth >= 1500 ? "1133px" : screenWidth >= 1300 && screenWidth < 1500 ? "1033px" : undefined,
              }}
            >
              <div className="text-wrapper-42">E-commerce</div>
              <img className="img-4" alt="Buy" src="/img/buy-1.png" />
            </div>
            <div
              className="text-wrapper-43"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "414px" : screenWidth >= 1500 ? "514px" : undefined,
              }}
            >
              What can you translate?
            </div>
            <p
              className="text-wrapper-44"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "178px" : screenWidth >= 1500 ? "278px" : undefined,
              }}
            >
              Our proficient translators have the capability to translate any kind of document, supporting the
              undermentioned file types
            </p>
            <div
              className="overlap-35"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "113px" : screenWidth >= 1500 ? "213px" : undefined,
              }}
            >
              <div className="document-translation-2">
                Document
                <br />
                Translation
              </div>
              <img className="img-5" alt="Pdf" src="/img/pdf-1.png" />
            </div>
            <div
              className="overlap-36"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "301px" : screenWidth >= 1500 ? "401px" : undefined,
              }}
            >
              <div className="marketing-material-2">Marketing Material &amp; Ads</div>
              <img className="img-5" alt="Goal" src="/img/goal-1.png" />
            </div>
            <div
              className="overlap-37"
              style={{
                left: screenWidth >= 1500 ? "589px" : screenWidth >= 1300 && screenWidth < 1500 ? "489px" : undefined,
              }}
            >
              <div className="website-apps-2">Website &amp; Apps</div>
              <img className="img-5" alt="Website" src="/img/website-1.png" />
            </div>
            <div
              className="overlap-38"
              style={{
                left: screenWidth >= 1500 ? "777px" : screenWidth >= 1300 && screenWidth < 1500 ? "677px" : undefined,
              }}
            >
              <div className="text-wrapper-45">Video Subtitling</div>
              <img className="img-5" alt="Video camera" src="/img/video-camera-1.png" />
            </div>
            <div
              className="overlap-39"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "865px" : screenWidth >= 1500 ? "965px" : undefined,
              }}
            >
              <div className="text-wrapper-46">Product Descriptions</div>
              <img className="img-5" alt="E commerce" src="/img/e-commerce-1.png" />
            </div>
            <div
              className="overlap-40"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "1048px" : screenWidth >= 1500 ? "1148px" : undefined,
              }}
            >
              <div className="text-wrapper-47">Articles, certificates, and more</div>
              <img className="biotech-2" alt="Biotech" src="/img/biotech-2.png" />
            </div>
            <div
              className="group-7"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "64px" : screenWidth >= 1500 ? "180px" : undefined,
                top: screenWidth >= 1300 && screenWidth < 1500 ? "187px" : screenWidth >= 1500 ? "205px" : undefined,
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
              <Group className="group-8" property1="default" talkToAnExpertClassName="group-9" to="/desktop-form" />
            </div>
            <Group
              className={`${screenWidth >= 1500 && "class-4"} ${
                screenWidth >= 1300 && screenWidth < 1500 && "class-5"
              }`}
              property1="default"
              talkToAnExpertClassName="group-9"
              to="/desktop-form"
            />
            <Group
              className={`${screenWidth >= 1500 && "class-6"} ${
                screenWidth >= 1300 && screenWidth < 1500 && "class-7"
              }`}
              property1="default"
              talkToAnExpertClassName="group-9"
              to="/desktop-form"
            />
            <p
              className="our-growth-would-not-2"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "166px" : screenWidth >= 1500 ? "266px" : undefined,
              }}
            >
              Our Growth would not have been possible without Magma Translation. <br />
              Our internationalization occurred through the expertise of their team.
            </p>
            <p
              className="text-wrapper-49"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "504px" : screenWidth >= 1500 ? "604px" : undefined,
              }}
            >
              What we were looking for in Magma was the cultural localization, their deep understanding of how people
              think in other countries, specially of the US, UK and Germany for our projects
            </p>
            <p
              className="we-are-a-german-2"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "840px" : screenWidth >= 1500 ? "940px" : undefined,
              }}
            >
              <span className="text-wrapper-50">
                We are a German company, the largest auto parts manufacturer in the world. For us, trust in data
                security is{" "}
              </span>
              <span className="text-wrapper-51">essential</span>
              <span className="text-wrapper-50">. Magma Translation is a trusted company.</span>
            </p>
            <div
              className="text-wrapper-52"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "379px" : screenWidth >= 1500 ? "479px" : undefined,
              }}
            >
              Highest Quality Guaranteed
            </div>
            <p
              className="every-translation-2"
              style={{
                left: screenWidth >= 1500 ? "350px" : screenWidth >= 1300 && screenWidth < 1500 ? "250px" : undefined,
              }}
            >
              Every translation undergoes thorough proofreading and validation by <br />
              both our team of professional external editors and our internal language specialists.
            </p>
            <div
              className="text-wrapper-53"
              style={{
                left: screenWidth >= 1500 ? "349px" : screenWidth >= 1300 && screenWidth < 1500 ? "249px" : undefined,
              }}
            >
              Shopee.com
            </div>
            <div
              className="text-wrapper-54"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "611px" : screenWidth >= 1500 ? "711px" : undefined,
              }}
            >
              Hotmart
            </div>
            <div
              className="text-wrapper-55"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "921px" : screenWidth >= 1500 ? "1021px" : undefined,
              }}
            >
              ZF Friedrichshafen
            </div>
            <div
              className="text-wrapper-56"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "238px" : screenWidth >= 1500 ? "338px" : undefined,
              }}
            >
              Milton Santana
            </div>
            <div
              className="text-wrapper-57"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "597px" : screenWidth >= 1500 ? "697px" : undefined,
              }}
            >
              Bruno Vidal
            </div>
            <div
              className="text-wrapper-58"
              style={{
                left: screenWidth >= 1500 ? "997px" : screenWidth >= 1300 && screenWidth < 1500 ? "897px" : undefined,
              }}
            >
              Danielle Schmitt Capote
            </div>
            <img
              className="ellipse-4"
              style={{
                left: screenWidth >= 1500 ? "360px" : screenWidth >= 1300 && screenWidth < 1500 ? "260px" : undefined,
              }}
              alt="Ellipse"
              src="/img/ellipse-1-1.png"
            />
            <img
              className="ellipse-5"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "604px" : screenWidth >= 1500 ? "704px" : undefined,
              }}
              alt="Ellipse"
              src="/img/ellipse-2-1.png"
            />
            <img
              className="ellipse-6"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "969px" : screenWidth >= 1500 ? "1069px" : undefined,
              }}
              alt="Ellipse"
              src="/img/ellipse-3-1.png"
            />
            <img
              className="star-13"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "237px" : screenWidth >= 1500 ? "337px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-14"
              style={{
                left: screenWidth >= 1500 ? "678px" : screenWidth >= 1300 && screenWidth < 1500 ? "578px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-15"
              style={{
                left: screenWidth >= 1500 ? "1013px" : screenWidth >= 1300 && screenWidth < 1500 ? "913px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-16"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "267px" : screenWidth >= 1500 ? "367px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-17"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "608px" : screenWidth >= 1500 ? "708px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-18"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "943px" : screenWidth >= 1500 ? "1043px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-19"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "297px" : screenWidth >= 1500 ? "397px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-20"
              style={{
                left: screenWidth >= 1500 ? "738px" : screenWidth >= 1300 && screenWidth < 1500 ? "638px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-21"
              style={{
                left: screenWidth >= 1500 ? "1073px" : screenWidth >= 1300 && screenWidth < 1500 ? "973px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-22"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "327px" : screenWidth >= 1500 ? "427px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-23"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "668px" : screenWidth >= 1500 ? "768px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-24"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "1003px" : screenWidth >= 1500 ? "1103px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-25"
              style={{
                left: screenWidth >= 1500 ? "457px" : screenWidth >= 1300 && screenWidth < 1500 ? "357px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-26"
              style={{
                left: screenWidth >= 1500 ? "798px" : screenWidth >= 1300 && screenWidth < 1500 ? "698px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="star-27"
              style={{
                left: screenWidth >= 1500 ? "1133px" : screenWidth >= 1300 && screenWidth < 1500 ? "1033px" : undefined,
              }}
              alt="Star"
              src="/img/star-16-1.png"
            />
            <img
              className="magma-translation-3"
              style={{
                left: screenWidth >= 1300 && screenWidth < 1500 ? "64px" : screenWidth >= 1500 ? "185px" : undefined,
                top: screenWidth >= 1300 && screenWidth < 1500 ? "40px" : screenWidth >= 1500 ? "55px" : undefined,
              }}
              alt="Magma translation"
              src="/img/magma-translation-png.png"
            />
          </>
        )}

        {screenWidth >= 1300 && screenWidth < 1500 && (
          <>
            <p className="text-wrapper-59">Magma Translation | All rights reserved. ©Magma™</p>
            <p className="text-wrapper-60">
              MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
              diverse markets around the world.
            </p>
            <img className="line-2" alt="Line" src="/img/line-1.png" />
          </>
        )}

        {screenWidth >= 1500 && (
          <div className="frame-2">
            <p className="text-wrapper-61">
              MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
              diverse markets around the world.
            </p>
            <p className="text-wrapper-62">Magma Translation | All rights reserved. ©Magma™</p>
          </div>
        )}
      </div>
    </div>
  );
};
