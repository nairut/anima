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
              : screenWidth >= 1000 && screenWidth < 1300
              ? "0.83px none"
              : screenWidth >= 1300
              ? "0.99px none"
              : undefined,
          height:
            screenWidth < 1000
              ? "912px"
              : screenWidth >= 1000 && screenWidth < 1300
              ? "3024.98px"
              : screenWidth >= 1300
              ? "3647px"
              : undefined,
          width:
            screenWidth < 1000
              ? "430px"
              : screenWidth >= 1000 && screenWidth < 1300
              ? "1000px"
              : screenWidth >= 1300
              ? "1300px"
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
            <Link className="click-to-discover-wrapper" to="/translation-service">
              <div className="click-to-discover">CLICK TO DISCOVER</div>
            </Link>
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1300) || screenWidth >= 1300) && (
          <>
            <Lady
              className={`${screenWidth >= 1000 && screenWidth < 1300 && "class"} ${screenWidth >= 1300 && "class-2"}`}
            />
            <p
              className="p"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1300 ? "31.4px" : screenWidth >= 1300 ? "37.7px" : undefined,
                left: screenWidth >= 1000 && screenWidth < 1300 ? "206px" : screenWidth >= 1300 ? "297px" : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1300 ? "1.26px" : screenWidth >= 1300 ? "1.51px" : undefined,
                top: screenWidth >= 1000 && screenWidth < 1300 ? "613px" : screenWidth >= 1300 ? "736px" : undefined,
                width: screenWidth >= 1000 && screenWidth < 1300 ? "588px" : screenWidth >= 1300 ? "706px" : undefined,
              }}
            >
              Trusted by Elite Businesses Worldwide
            </p>
            <p
              className="text-wrapper-2"
              style={{
                fontSize:
                  screenWidth >= 1000 && screenWidth < 1300 ? "30.8px" : screenWidth >= 1300 ? "37px" : undefined,
                left: screenWidth >= 1000 && screenWidth < 1300 ? "157px" : screenWidth >= 1300 ? "237px" : undefined,
                letterSpacing:
                  screenWidth >= 1000 && screenWidth < 1300 ? "1.23px" : screenWidth >= 1300 ? "1.48px" : undefined,
                top: screenWidth >= 1000 && screenWidth < 1300 ? "1012px" : screenWidth >= 1300 ? "1215px" : undefined,
                width: screenWidth >= 1000 && screenWidth < 1300 ? "710px" : screenWidth >= 1300 ? "853px" : undefined,
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
              screenWidth >= 1300
                ? "70px"
                : screenWidth < 1000
                ? "54px"
                : screenWidth >= 1000 && screenWidth < 1300
                ? "155px"
                : undefined,
            left:
              screenWidth >= 1300
                ? "151px"
                : screenWidth < 1000
                ? "118px"
                : screenWidth >= 1000 && screenWidth < 1300
                ? "85px"
                : undefined,
            top:
              screenWidth >= 1300
                ? "837px"
                : screenWidth < 1000
                ? "34px"
                : screenWidth >= 1000 && screenWidth < 1300
                ? "697px"
                : undefined,
            width:
              screenWidth >= 1300
                ? "101px"
                : screenWidth < 1000
                ? "194px"
                : screenWidth >= 1000 && screenWidth < 1300
                ? "830px"
                : undefined,
          }}
          alt="Zapier png"
          src={
            screenWidth >= 1300
              ? "/img/zapier-png-0.png"
              : screenWidth < 1000
              ? "/img/magma-translation-png.png"
              : screenWidth >= 1000 && screenWidth < 1300
              ? "/img/group-8.png"
              : undefined
          }
        />
        {screenWidth >= 1000 && screenWidth < 1300 && (
          <>
            <div className="overlap">
              <div className="text-wrapper-3">Legal</div>
              <img className="law" alt="Law" src="/img/law-3.png" />
            </div>
            <div className="overlap-2">
              <div className="media-films">Media &amp; Films</div>
              <img className="img" alt="Next" src="/img/next-3.png" />
            </div>
            <div className="overlap-3">
              <div className="text-wrapper-4">Medical</div>
              <img className="img" alt="Medical bag" src="/img/medical-bag-3.png" />
            </div>
            <div className="overlap-4">
              <div className="text-wrapper-5">E-Learning</div>
              <img className="img" alt="Mba" src="/img/mba-3.png" />
            </div>
            <div className="overlap-5">
              <div className="text-wrapper-6">Manufacturing</div>
              <img className="img" alt="Manufacturing" src="/img/manufacturing-3.png" />
            </div>
            <div className="overlap-6">
              <div className="text-wrapper-7">Automotive</div>
              <img className="img" alt="Tesla model x" src="/img/tesla-model-x-3.png" />
            </div>
            <div className="overlap-7">
              <div className="text-wrapper-8">Financial</div>
              <img className="money-bag-pounds" alt="Money bag pounds" src="/img/money-bag-pounds-3.png" />
            </div>
            <div className="overlap-8">
              <div className="text-wrapper-9">Marketing</div>
              <img className="img" alt="Commercial" src="/img/commercial-3.png" />
            </div>
            <div className="overlap-9">
              <div className="text-wrapper-6">IT &amp; Software</div>
              <img className="img" alt="Programming flag" src="/img/programming-flag-3.png" />
            </div>
            <div className="overlap-10">
              <div className="text-wrapper-10">Life Science</div>
              <img className="img" alt="Biotech" src="/img/biotech-6.png" />
            </div>
            <div className="overlap-11">
              <div className="text-wrapper-8">Tourism</div>
              <img className="img" alt="Plane" src="/img/plane-3.png" />
            </div>
            <div className="overlap-12">
              <div className="text-wrapper-11">E-commerce</div>
              <img className="img" alt="Buy" src="/img/buy-3.png" />
            </div>
            <div className="text-wrapper-12">What can you translate?</div>
            <p className="text-wrapper-13">
              Our proficient translators have the capability to translate any kind of document, supporting the
              undermentioned file types
            </p>
            <div className="overlap-group-2">
              <div className="document-translation">
                Document
                <br />
                Translation
              </div>
              <img className="img-2" alt="Pdf" src="/img/pdf-3.png" />
            </div>
            <div className="overlap-13">
              <div className="marketing-material">Marketing Material &amp; Ads</div>
              <img className="img-2" alt="Goal" src="/img/goal-3.png" />
            </div>
            <div className="overlap-14">
              <div className="website-apps">Website &amp; Apps</div>
              <img className="img-2" alt="Website" src="/img/website-3.png" />
            </div>
            <div className="overlap-15">
              <div className="text-wrapper-14">Video Subtitling</div>
              <img className="img-2" alt="Video camera" src="/img/video-camera-3.png" />
            </div>
            <div className="overlap-16">
              <div className="text-wrapper-15">Product Descriptions</div>
              <img className="img-2" alt="E commerce" src="/img/e-commerce-3.png" />
            </div>
            <div className="overlap-17">
              <div className="text-wrapper-16">Articles, certificates, and more</div>
              <img className="biotech" alt="Biotech" src="/img/biotech-7.png" />
            </div>
            <div className="group-2">
              <h1 className="h-1">Professional Translation Services</h1>
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
                to="/translation-service"
              />
            </div>
            <Group className="instance-node" property1="default" talkToAnExpertClassName="group-2-instance" />
            <Group className="group-3" property1="default" talkToAnExpertClassName="group-2-instance" />
            <p className="our-growth-would-not">
              Our Growth would not have been possible without Magma Translation. <br />
              Our internationalization occurred through the expertise of their team.
            </p>
            <p className="text-wrapper-17">
              What we were looking for in Magma was the cultural localization, their deep understanding of how people
              think in other countries, specially of the US, UK and Germany for our projects
            </p>
            <p className="we-are-a-german">
              <span className="span">
                We are a German company, the largest auto parts manufacturer in the world. For us, trust in data
                security is{" "}
              </span>
              <span className="text-wrapper-18">essential</span>
              <span className="span">. Magma Translation is a trusted company.</span>
            </p>
            <div className="text-wrapper-19">Highest Quality Guaranteed</div>
            <p className="every-translation">
              Every translation undergoes thorough proofreading and validation by <br />
              both our team of professional external editors and our internal language specialists.
            </p>
            <div className="text-wrapper-20">Shopee.com</div>
            <div className="text-wrapper-21">Hotmart</div>
            <div className="text-wrapper-22">ZF Friedrichshafen</div>
            <div className="text-wrapper-23">Milton Santana</div>
            <div className="text-wrapper-24">Bruno Vidal</div>
            <div className="text-wrapper-25">Danielle Schmitt Capote</div>
            <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-3.png" />
            <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-2-3.png" />
            <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-3-3.png" />
          </>
        )}

        {((screenWidth >= 1000 && screenWidth < 1300) || screenWidth >= 1300) && (
          <>
            <img
              className="star"
              style={{
                height: screenWidth >= 1000 && screenWidth < 1300 ? "16px" : screenWidth >= 1300 ? "70px" : undefined,
                left: screenWidth >= 1000 && screenWidth < 1300 ? "157px" : screenWidth >= 1300 ? "151px" : undefined,
                top: screenWidth >= 1000 && screenWidth < 1300 ? "2061px" : screenWidth >= 1300 ? "953px" : undefined,
                width: screenWidth >= 1000 && screenWidth < 1300 ? "19px" : screenWidth >= 1300 ? "101px" : undefined,
              }}
              alt="Star"
              src={
                screenWidth >= 1000 && screenWidth < 1300
                  ? "/img/star-16-3.png"
                  : screenWidth >= 1300
                  ? "/img/abbott-png-0.png"
                  : undefined
              }
            />
            <img
              className="zf-png"
              style={{
                height: screenWidth >= 1300 ? "70px" : screenWidth >= 1000 && screenWidth < 1300 ? "16px" : undefined,
                left: screenWidth >= 1300 ? "279px" : screenWidth >= 1000 && screenWidth < 1300 ? "441px" : undefined,
                top: screenWidth >= 1300 ? "837px" : screenWidth >= 1000 && screenWidth < 1300 ? "2061px" : undefined,
                width: screenWidth >= 1300 ? "101px" : screenWidth >= 1000 && screenWidth < 1300 ? "19px" : undefined,
              }}
              alt="Zf png"
              src={
                screenWidth >= 1300
                  ? "/img/zf-png-0.png"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "/img/star-21-3.png"
                  : undefined
              }
            />
            <img
              className="anton-paar-png"
              style={{
                height: screenWidth >= 1300 ? "70px" : screenWidth >= 1000 && screenWidth < 1300 ? "16px" : undefined,
                left: screenWidth >= 1300 ? "279px" : screenWidth >= 1000 && screenWidth < 1300 ? "720px" : undefined,
                top: screenWidth >= 1300 ? "953px" : screenWidth >= 1000 && screenWidth < 1300 ? "2061px" : undefined,
                width: screenWidth >= 1300 ? "101px" : screenWidth >= 1000 && screenWidth < 1300 ? "19px" : undefined,
              }}
              alt="Anton paar png"
              src={
                screenWidth >= 1300
                  ? "/img/anton-paar-png-0.png"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "/img/star-26-3.png"
                  : undefined
              }
            />
            <img
              className="crowdin-png"
              style={{
                height: screenWidth >= 1300 ? "70px" : screenWidth >= 1000 && screenWidth < 1300 ? "16px" : undefined,
                left: screenWidth >= 1300 ? "407px" : screenWidth >= 1000 && screenWidth < 1300 ? "182px" : undefined,
                top: screenWidth >= 1300 ? "837px" : screenWidth >= 1000 && screenWidth < 1300 ? "2061px" : undefined,
                width: screenWidth >= 1300 ? "101px" : screenWidth >= 1000 && screenWidth < 1300 ? "19px" : undefined,
              }}
              alt="Crowdin png"
              src={
                screenWidth >= 1300
                  ? "/img/crowdin-png-0.png"
                  : screenWidth >= 1000 && screenWidth < 1300
                  ? "/img/star-17-3.png"
                  : undefined
              }
            />
          </>
        )}

        {screenWidth >= 1000 && screenWidth < 1300 && (
          <>
            <img className="star-2" alt="Star" src="/img/star-22-3.png" />
            <img className="star-3" alt="Star" src="/img/star-27-3.png" />
            <img className="star-4" alt="Star" src="/img/star-18-3.png" />
            <img className="star-5" alt="Star" src="/img/star-23-3.png" />
            <img className="star-6" alt="Star" src="/img/star-28-3.png" />
            <img className="star-7" alt="Star" src="/img/star-19-3.png" />
            <img className="star-8" alt="Star" src="/img/star-24-3.png" />
            <img className="star-9" alt="Star" src="/img/star-29-3.png" />
            <img className="star-10" alt="Star" src="/img/star-20-3.png" />
            <img className="star-11" alt="Star" src="/img/star-25-3.png" />
            <img className="star-12" alt="Star" src="/img/star-30-3.png" />
            <img className="magma-translation" alt="Magma translation" src="/img/magma-translation-png-4.png" />
            <div className="frame">
              <p className="text-wrapper-26">
                MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
                diverse markets around the world.
              </p>
              <p className="text-wrapper-27">Magma Translation | All rights reserved. ©Magma™</p>
            </div>
          </>
        )}

        {screenWidth >= 1300 && (
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
            <div className="overlap-18">
              <div className="text-wrapper-28">Legal</div>
              <img className="law-2" alt="Law" src="/img/law.png" />
            </div>
            <div className="overlap-19">
              <div className="media-films-2">Media &amp; Films</div>
              <img className="next" alt="Next" src="/img/next.png" />
            </div>
            <div className="overlap-20">
              <div className="text-wrapper-29">Medical</div>
              <img className="img-3" alt="Medical bag" src="/img/medical-bag.png" />
            </div>
            <div className="overlap-21">
              <div className="text-wrapper-30">E-Learning</div>
              <img className="img-3" alt="Mba" src="/img/mba.png" />
            </div>
            <div className="overlap-22">
              <div className="text-wrapper-31">Manufacturing</div>
              <img className="img-3" alt="Manufacturing" src="/img/manufacturing.png" />
            </div>
            <div className="overlap-23">
              <div className="text-wrapper-32">Automotive</div>
              <img className="img-3" alt="Tesla model x" src="/img/tesla-model-x.png" />
            </div>
            <div className="overlap-group-3">
              <div className="text-wrapper-33">Financial</div>
              <img className="money-bag-pounds-2" alt="Money bag pounds" src="/img/money-bag-pounds.png" />
            </div>
            <div className="overlap-24">
              <div className="text-wrapper-34">Marketing</div>
              <img className="img-3" alt="Commercial" src="/img/commercial.png" />
            </div>
            <div className="overlap-25">
              <div className="text-wrapper-31">IT &amp; Software</div>
              <img className="img-3" alt="Programming flag" src="/img/programming-flag.png" />
            </div>
            <div className="overlap-26">
              <div className="text-wrapper-35">Life Science</div>
              <img className="img-3" alt="Biotech" src="/img/biotech.png" />
            </div>
            <div className="overlap-27">
              <div className="text-wrapper-33">Tourism</div>
              <img className="img-3" alt="Plane" src="/img/plane.png" />
            </div>
            <div className="overlap-28">
              <div className="text-wrapper-36">E-commerce</div>
              <img className="img-3" alt="Buy" src="/img/buy.png" />
            </div>
            <div className="text-wrapper-37">What can you translate?</div>
            <p className="text-wrapper-38">
              Our proficient translators have the capability to translate any kind of document, supporting the
              undermentioned file types
            </p>
            <div className="overlap-29">
              <div className="document-translation-2">
                Document
                <br />
                Translation
              </div>
              <img className="img-4" alt="Pdf" src="/img/pdf.png" />
            </div>
            <div className="overlap-30">
              <div className="marketing-material-2">Marketing Material &amp; Ads</div>
              <img className="img-4" alt="Goal" src="/img/goal.png" />
            </div>
            <div className="overlap-31">
              <div className="website-apps-2">Website &amp; Apps</div>
              <img className="img-4" alt="Website" src="/img/website.png" />
            </div>
            <div className="overlap-32">
              <div className="text-wrapper-39">Video Subtitling</div>
              <img className="img-4" alt="Video camera" src="/img/video-camera.png" />
            </div>
            <div className="overlap-33">
              <div className="text-wrapper-40">Product Descriptions</div>
              <img className="img-4" alt="E commerce" src="/img/e-commerce.png" />
            </div>
            <div className="overlap-34">
              <div className="text-wrapper-41">Articles, certificates, and more</div>
              <img className="biotech-2" alt="Biotech" src="/img/biotech.png" />
            </div>
            <div className="group-4">
              <h1 className="text-wrapper-42">Professional Translation Services</h1>
              <p className="element-languages-that-3">
                120 languages that fits in your budget
                <br />
                Human Translation done with the highest quality in the market
                <br />
                Linguists with Master&#39;s Degrees
              </p>
              <Group
                className="group-5"
                property1="default"
                talkToAnExpertClassName="group-6"
                to="/translation-service"
              />
            </div>
            <Group className="group-7" property1="default" talkToAnExpertClassName="group-6" />
            <Group className="group-8" property1="default" talkToAnExpertClassName="group-6" />
            <p className="our-growth-would-not-2">
              Our Growth would not have been possible without Magma Translation. <br />
              Our internationalization occurred through the expertise of their team.
            </p>
            <p className="text-wrapper-43">
              What we were looking for in Magma was the cultural localization, their deep understanding of how people
              think in other countries, specially of the US, UK and Germany for our projects
            </p>
            <p className="we-are-a-german-2">
              <span className="text-wrapper-44">
                We are a German company, the largest auto parts manufacturer in the world. For us, trust in data
                security is{" "}
              </span>
              <span className="text-wrapper-45">essential</span>
              <span className="text-wrapper-44">. Magma Translation is a trusted company.</span>
            </p>
            <div className="text-wrapper-46">Highest Quality Guaranteed</div>
            <p className="every-translation-2">
              Every translation undergoes thorough proofreading and validation by <br />
              both our team of professional external editors and our internal language specialists.
            </p>
            <div className="text-wrapper-47">Shopee.com</div>
            <div className="text-wrapper-48">Hotmart</div>
            <div className="text-wrapper-49">ZF Friedrichshafen</div>
            <div className="text-wrapper-50">Milton Santana</div>
            <div className="text-wrapper-51">Bruno Vidal</div>
            <div className="text-wrapper-52">Danielle Schmitt Capote</div>
            <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-1.png" />
            <img className="ellipse-5" alt="Ellipse" src="/img/ellipse-2.png" />
            <img className="ellipse-6" alt="Ellipse" src="/img/ellipse-3.png" />
            <img className="star-13" alt="Star" src="/img/star-16.png" />
            <img className="star-14" alt="Star" src="/img/star-16.png" />
            <img className="star-15" alt="Star" src="/img/star-16.png" />
            <img className="star-16" alt="Star" src="/img/star-16.png" />
            <img className="star-17" alt="Star" src="/img/star-16.png" />
            <img className="star-18" alt="Star" src="/img/star-16.png" />
            <img className="star-19" alt="Star" src="/img/star-16.png" />
            <img className="star-20" alt="Star" src="/img/star-16.png" />
            <img className="star-21" alt="Star" src="/img/star-16.png" />
            <img className="star-22" alt="Star" src="/img/star-16.png" />
            <img className="star-23" alt="Star" src="/img/star-16.png" />
            <img className="star-24" alt="Star" src="/img/star-16.png" />
            <img className="star-25" alt="Star" src="/img/star-16.png" />
            <img className="star-26" alt="Star" src="/img/star-16.png" />
            <img className="star-27" alt="Star" src="/img/star-16.png" />
            <img className="magma-translation-2" alt="Magma translation" src="/img/magma-translation-png.png" />
            <p className="text-wrapper-53">Magma Translation | All rights reserved. ©Magma™</p>
            <p className="text-wrapper-54">
              MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
              diverse markets around the world.
            </p>
            <img className="line" alt="Line" src="/img/line-1.png" />
          </>
        )}
      </div>
    </div>
  );
};
