import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import { Group } from "../../components/Group";
import { Lady } from "../../components/Lady";
import "./style.css";

export const Celular = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="celular">
      <div
        className="div-2"
        style={{
          border:
            screenWidth < 1000
              ? "1px none"
              : screenWidth >= 1000 && screenWidth < 1201
              ? "0.83px none"
              : screenWidth >= 1201
              ? "0.99px none"
              : undefined,
          height:
            screenWidth < 1000
              ? "912px"
              : screenWidth >= 1000 && screenWidth < 1201
              ? "3024.98px"
              : screenWidth >= 1201
              ? "1201px"
              : undefined,
          width:
            screenWidth < 1000
              ? "430px"
              : screenWidth >= 1000 && screenWidth < 1201
              ? "1000px"
              : screenWidth >= 1201
              ? "1201px"
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
            <Link className="click-to-discover-wrapper" to="/cell-form">
              <div className="click-to-discover">CLICK TO DISCOVER</div>
            </Link>
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1201) || screenWidth >= 1201) && (
          <>
            <Lady
              className={`${screenWidth >= 1000 && screenWidth < 1201 && "class"} ${screenWidth >= 1201 && "class-2"}`}
            />
            <p
              className="p"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201 ? "31.4px" : screenWidth >= 1201 ? "37.7px" : undefined,
                left: screenWidth >= 1000 && screenWidth < 1201 ? "206px" : screenWidth >= 1201 ? "248px" : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201 ? "1.26px" : screenWidth >= 1201 ? "1.51px" : undefined,
                top: screenWidth >= 1000 && screenWidth < 1201 ? "613px" : screenWidth >= 1201 ? "736px" : undefined,
                width: screenWidth >= 1000 && screenWidth < 1201 ? "588px" : screenWidth >= 1201 ? "706px" : undefined,
              }}
            >
              Trusted by Elite Businesses Worldwide
            </p>
            <p
              className="text-wrapper-7"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1201 ? "30.8px" : screenWidth >= 1201 ? "37px" : undefined,
                left: screenWidth >= 1000 && screenWidth < 1201 ? "157px" : screenWidth >= 1201 ? "188px" : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1201 ? "1.23px" : screenWidth >= 1201 ? "1.48px" : undefined,
                top: screenWidth >= 1000 && screenWidth < 1201 ? "1012px" : screenWidth >= 1201 ? "1215px" : undefined,
                width: screenWidth >= 1000 && screenWidth < 1201 ? "710px" : screenWidth >= 1201 ? "853px" : undefined,
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
              screenWidth >= 1201
                ? "70px"
                : screenWidth < 1000
                ? "54px"
                : screenWidth >= 1000 && screenWidth < 1201
                ? "155px"
                : undefined,
            left:
              screenWidth >= 1201
                ? "102px"
                : screenWidth < 1000
                ? "118px"
                : screenWidth >= 1000 && screenWidth < 1201
                ? "85px"
                : undefined,
            top:
              screenWidth >= 1201
                ? "837px"
                : screenWidth < 1000
                ? "34px"
                : screenWidth >= 1000 && screenWidth < 1201
                ? "697px"
                : undefined,
            width:
              screenWidth >= 1201
                ? "101px"
                : screenWidth < 1000
                ? "194px"
                : screenWidth >= 1000 && screenWidth < 1201
                ? "830px"
                : undefined,
          }}
          alt="Zapier png"
          src={
            screenWidth >= 1201
              ? "/img/zapier-png-0.png"
              : screenWidth < 1000
              ? "/img/magma-translation-png-1.png"
              : screenWidth >= 1000 && screenWidth < 1201
              ? "/img/group-8.png"
              : undefined
          }
        />
        {screenWidth >= 1000 && screenWidth < 1201 && (
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

        {((screenWidth >= 1000 && screenWidth < 1201) || screenWidth >= 1201) && (
          <img
            className="star"
            style={{
              height: screenWidth >= 1000 && screenWidth < 1201 ? "16px" : screenWidth >= 1201 ? "70px" : undefined,
              left: screenWidth >= 1000 && screenWidth < 1201 ? "157px" : screenWidth >= 1201 ? "102px" : undefined,
              top: screenWidth >= 1000 && screenWidth < 1201 ? "2061px" : screenWidth >= 1201 ? "953px" : undefined,
              width: screenWidth >= 1000 && screenWidth < 1201 ? "19px" : screenWidth >= 1201 ? "101px" : undefined,
            }}
            alt="Star"
            src={
              screenWidth >= 1000 && screenWidth < 1201
                ? "/img/star-16.png"
                : screenWidth >= 1201
                ? "/img/abbott-png-0.png"
                : undefined
            }
          />
        )}

        {((screenWidth >= 1000 && screenWidth < 1201) || screenWidth >= 1201) && (
          <>
            <img
              className="zf-png"
              style={{
                height: screenWidth >= 1201 ? "70px" : screenWidth >= 1000 && screenWidth < 1201 ? "16px" : undefined,
                left: screenWidth >= 1201 ? "230px" : screenWidth >= 1000 && screenWidth < 1201 ? "441px" : undefined,
                top: screenWidth >= 1201 ? "837px" : screenWidth >= 1000 && screenWidth < 1201 ? "2061px" : undefined,
                width: screenWidth >= 1201 ? "101px" : screenWidth >= 1000 && screenWidth < 1201 ? "19px" : undefined,
              }}
              alt="Zf png"
              src={
                screenWidth >= 1201
                  ? "/img/zf-png-0.png"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-21.png"
                  : undefined
              }
            />
            <img
              className="anton-paar-png"
              style={{
                height: screenWidth >= 1201 ? "70px" : screenWidth >= 1000 && screenWidth < 1201 ? "16px" : undefined,
                left: screenWidth >= 1201 ? "230px" : screenWidth >= 1000 && screenWidth < 1201 ? "720px" : undefined,
                top: screenWidth >= 1201 ? "953px" : screenWidth >= 1000 && screenWidth < 1201 ? "2061px" : undefined,
                width: screenWidth >= 1201 ? "101px" : screenWidth >= 1000 && screenWidth < 1201 ? "19px" : undefined,
              }}
              alt="Anton paar png"
              src={
                screenWidth >= 1201
                  ? "/img/anton-paar-png-0.png"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-26.png"
                  : undefined
              }
            />
            <img
              className="crowdin-png"
              style={{
                height: screenWidth >= 1201 ? "70px" : screenWidth >= 1000 && screenWidth < 1201 ? "16px" : undefined,
                left: screenWidth >= 1201 ? "358px" : screenWidth >= 1000 && screenWidth < 1201 ? "182px" : undefined,
                top: screenWidth >= 1201 ? "837px" : screenWidth >= 1000 && screenWidth < 1201 ? "2061px" : undefined,
                width: screenWidth >= 1201 ? "101px" : screenWidth >= 1000 && screenWidth < 1201 ? "19px" : undefined,
              }}
              alt="Crowdin png"
              src={
                screenWidth >= 1201
                  ? "/img/crowdin-png-0.png"
                  : screenWidth >= 1000 && screenWidth < 1201
                  ? "/img/star-17.png"
                  : undefined
              }
            />
          </>
        )}

        {screenWidth >= 1000 && screenWidth < 1201 && (
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
            <img className="magma-translation-2" alt="Magma translation" src="/img/magma-translation-png-3.png" />
            <p className="text-wrapper-32">
              MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
              diverse markets around the world.
            </p>
            <p className="text-wrapper-33">Magma Translation | All rights reserved. ©Magma™</p>
            <img className="magma-translation-3" alt="Magma translation" src="/img/magma-translation-png-4.png" />
          </>
        )}

        {screenWidth >= 1201 && (
          <>
            <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-13.png" />
            <img className="cloudwords-png" alt="Cloudwords png" src="/img/cloudwords-png-0.png" />
            <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-14.png" />
            <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-7.png" />
            <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-15.png" />
            <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-8.png" />
            <img className="evoltz-png" alt="Evoltz png" src="/img/evoltz-png-0.png" />
            <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-9.png" />
            <img className="jungheinrich-png" alt="Jungheinrich png" src="/img/jungheinrich-png-0.png" />
            <img className="rectangle-11" alt="Rectangle" src="/img/rectangle-10.png" />
            <img className="shopee-png" alt="Shopee png" src="/img/shopee-png-0.png" />
            <div className="overlap-23">
              <div className="text-wrapper-34">Legal</div>
              <img className="law-2" alt="Law" src="/img/law-1.png" />
            </div>
            <div className="overlap-24">
              <div className="media-films-2">Media &amp; Films</div>
              <img className="next" alt="Next" src="/img/next-1.png" />
            </div>
            <div className="overlap-25">
              <div className="text-wrapper-35">Medical</div>
              <img className="img-4" alt="Medical bag" src="/img/medical-bag-1.png" />
            </div>
            <div className="overlap-26">
              <div className="text-wrapper-36">E-Learning</div>
              <img className="img-4" alt="Mba" src="/img/mba-1.png" />
            </div>
            <div className="overlap-27">
              <div className="text-wrapper-37">Manufacturing</div>
              <img className="img-4" alt="Manufacturing" src="/img/manufacturing-1.png" />
            </div>
            <div className="overlap-group-4">
              <div className="text-wrapper-38">Automotive</div>
              <img className="img-4" alt="Tesla model x" src="/img/tesla-model-x-1.png" />
            </div>
            <div className="overlap-28">
              <div className="text-wrapper-39">Financial</div>
              <img className="money-bag-pounds-2" alt="Money bag pounds" src="/img/money-bag-pounds-1.png" />
            </div>
            <div className="overlap-29">
              <div className="text-wrapper-40">Marketing</div>
              <img className="img-4" alt="Commercial" src="/img/commercial-1.png" />
            </div>
            <div className="overlap-30">
              <div className="text-wrapper-37">IT &amp; Software</div>
              <img className="img-4" alt="Programming flag" src="/img/programming-flag-1.png" />
            </div>
            <div className="overlap-31">
              <div className="text-wrapper-41">Life Science</div>
              <img className="img-4" alt="Biotech" src="/img/biotech-2.png" />
            </div>
            <div className="overlap-32">
              <div className="text-wrapper-39">Tourism</div>
              <img className="img-4" alt="Plane" src="/img/plane-1.png" />
            </div>
            <div className="overlap-33">
              <div className="text-wrapper-42">E-commerce</div>
              <img className="img-4" alt="Buy" src="/img/buy-1.png" />
            </div>
            <div className="text-wrapper-43">What can you translate?</div>
            <p className="text-wrapper-44">
              Our proficient translators have the capability to translate any kind of document, supporting the
              undermentioned file types
            </p>
            <div className="overlap-34">
              <div className="document-translation-2">
                Document
                <br />
                Translation
              </div>
              <img className="img-5" alt="Pdf" src="/img/pdf-1.png" />
            </div>
            <div className="overlap-35">
              <div className="marketing-material-2">Marketing Material &amp; Ads</div>
              <img className="img-5" alt="Goal" src="/img/goal-1.png" />
            </div>
            <div className="overlap-36">
              <div className="website-apps-2">Website &amp; Apps</div>
              <img className="img-5" alt="Website" src="/img/website-1.png" />
            </div>
            <div className="overlap-37">
              <div className="text-wrapper-45">Video Subtitling</div>
              <img className="img-5" alt="Video camera" src="/img/video-camera-1.png" />
            </div>
            <div className="overlap-38">
              <div className="text-wrapper-46">Product Descriptions</div>
              <img className="img-5" alt="E commerce" src="/img/e-commerce-1.png" />
            </div>
            <div className="overlap-39">
              <div className="text-wrapper-47">Articles, certificates, and more</div>
              <img className="biotech-2" alt="Biotech" src="/img/biotech-2.png" />
            </div>
            <div className="group-7">
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
            <Group className="group-10" property1="default" talkToAnExpertClassName="group-9" to="/desktop-form" />
            <Group className="group-11" property1="default" talkToAnExpertClassName="group-9" to="/desktop-form" />
            <p className="our-growth-would-not-2">
              Our Growth would not have been possible without Magma Translation. <br />
              Our internationalization occurred through the expertise of their team.
            </p>
            <p className="text-wrapper-49">
              What we were looking for in Magma was the cultural localization, their deep understanding of how people
              think in other countries, specially of the US, UK and Germany for our projects
            </p>
            <p className="we-are-a-german-2">
              <span className="text-wrapper-50">
                We are a German company, the largest auto parts manufacturer in the world. For us, trust in data
                security is{" "}
              </span>
              <span className="text-wrapper-51">essential</span>
              <span className="text-wrapper-50">. Magma Translation is a trusted company.</span>
            </p>
            <div className="text-wrapper-52">Highest Quality Guaranteed</div>
            <p className="every-translation-2">
              Every translation undergoes thorough proofreading and validation by <br />
              both our team of professional external editors and our internal language specialists.
            </p>
            <div className="text-wrapper-53">Shopee.com</div>
            <div className="text-wrapper-54">Hotmart</div>
            <div className="text-wrapper-55">ZF Friedrichshafen</div>
            <div className="text-wrapper-56">Milton Santana</div>
            <div className="text-wrapper-57">Bruno Vidal</div>
            <div className="text-wrapper-58">Danielle Schmitt Capote</div>
            <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-1-1.png" />
            <img className="ellipse-5" alt="Ellipse" src="/img/ellipse-2-1.png" />
            <img className="ellipse-6" alt="Ellipse" src="/img/ellipse-3-1.png" />
            <img className="star-13" alt="Star" src="/img/star-16-1.png" />
            <img className="star-14" alt="Star" src="/img/star-16-1.png" />
            <img className="star-15" alt="Star" src="/img/star-16-1.png" />
            <img className="star-16" alt="Star" src="/img/star-16-1.png" />
            <img className="star-17" alt="Star" src="/img/star-16-1.png" />
            <img className="star-18" alt="Star" src="/img/star-16-1.png" />
            <img className="star-19" alt="Star" src="/img/star-16-1.png" />
            <img className="star-20" alt="Star" src="/img/star-16-1.png" />
            <img className="star-21" alt="Star" src="/img/star-16-1.png" />
            <img className="star-22" alt="Star" src="/img/star-16-1.png" />
            <img className="star-23" alt="Star" src="/img/star-16-1.png" />
            <img className="star-24" alt="Star" src="/img/star-16-1.png" />
            <img className="star-25" alt="Star" src="/img/star-16-1.png" />
            <img className="star-26" alt="Star" src="/img/star-16-1.png" />
            <img className="star-27" alt="Star" src="/img/star-16-1.png" />
            <img className="magma-translation-4" alt="Magma translation" src="/img/magma-translation-png-1.png" />
            <p className="text-wrapper-59">
              MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
              diverse markets around the world.
            </p>
            <p className="text-wrapper-60">Magma Translation | All rights reserved. ©Magma™</p>
            <img className="magma-translation-5" alt="Magma translation" src="/img/magma-translation-png-1.png" />
          </>
        )}
      </div>
    </div>
  );
};
