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
        className="div"
        style={{
          border:
            screenWidth < 1201
              ? "1px none"
              : (screenWidth >= 1201 && screenWidth < 1300) ||
                (screenWidth >= 1300 && screenWidth < 1400) ||
                (screenWidth >= 1400 && screenWidth < 1500) ||
                screenWidth >= 1500
              ? "0.99px none"
              : undefined,
          height:
            screenWidth < 1201
              ? "800px"
              : (screenWidth >= 1201 && screenWidth < 1300) ||
                (screenWidth >= 1300 && screenWidth < 1400) ||
                (screenWidth >= 1400 && screenWidth < 1500) ||
                screenWidth >= 1500
              ? "3633px"
              : undefined,
          width:
            screenWidth < 1201
              ? "430px"
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
        {screenWidth < 1201 && (
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

        {((screenWidth >= 1201 && screenWidth < 1300) ||
          (screenWidth >= 1300 && screenWidth < 1400) ||
          (screenWidth >= 1400 && screenWidth < 1500) ||
          screenWidth >= 1500) && (
          <>
            <Lady
              className={`${screenWidth >= 1201 && screenWidth < 1300 && "class"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-2"
              } ${screenWidth >= 1400 && screenWidth < 1500 && "class-3"} ${screenWidth >= 1500 && "class-4"}`}
            />
            <p
              className="p"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "248px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "297px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "347px"
                    : screenWidth >= 1500
                    ? "397px"
                    : undefined,
              }}
            >
              Trusted by Elite Businesses Worldwide
            </p>
            <p
              className="text-wrapper-2"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "188px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "237px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "287px"
                    : screenWidth >= 1500
                    ? "337px"
                    : undefined,
              }}
            >
              Costumized to Fit your Specific Industry Needs
            </p>
            <img
              className="img"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "102px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "151px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "201px"
                    : screenWidth >= 1500
                    ? "251px"
                    : undefined,
              }}
              alt="Group"
              src="/img/group-8.png"
            />
            <div
              className="overlap"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "64px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "113px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "163px"
                    : screenWidth >= 1500
                    ? "213px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-3">Legal</div>
              <img className="law" alt="Law" src="/img/law.png" />
            </div>
            <div
              className="overlap-group"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "64px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "113px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "163px"
                    : screenWidth >= 1500
                    ? "213px"
                    : undefined,
              }}
            >
              <div className="media-films">Media &amp; Films</div>
              <img className="next" alt="Next" src="/img/next.png" />
            </div>
            <div
              className="overlap-2"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "248px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "297px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "347px"
                    : screenWidth >= 1500
                    ? "397px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-4">Medical</div>
              <img className="img-2" alt="Medical bag" src="/img/medical-bag.png" />
            </div>
            <div
              className="overlap-3"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "248px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "297px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "347px"
                    : screenWidth >= 1500
                    ? "397px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-5">E-Learning</div>
              <img className="img-2" alt="Mba" src="/img/mba.png" />
            </div>
            <div
              className="overlap-4"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "432px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "481px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "531px"
                    : screenWidth >= 1500
                    ? "581px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-6">Manufacturing</div>
              <img className="img-2" alt="Manufacturing" src="/img/manufacturing.png" />
            </div>
            <div
              className="overlap-5"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "432px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "481px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "531px"
                    : screenWidth >= 1500
                    ? "581px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-7">Automotive</div>
              <img className="img-2" alt="Tesla model x" src="/img/tesla-model-x.png" />
            </div>
            <div
              className="overlap-6"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "616px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "665px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "715px"
                    : screenWidth >= 1500
                    ? "765px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-8">Financial</div>
              <img className="money-bag-pounds" alt="Money bag pounds" src="/img/money-bag-pounds.png" />
            </div>
            <div
              className="overlap-7"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "616px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "665px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "715px"
                    : screenWidth >= 1500
                    ? "765px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-9">Marketing</div>
              <img className="img-2" alt="Commercial" src="/img/commercial.png" />
            </div>
            <div
              className="overlap-8"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "800px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "849px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "899px"
                    : screenWidth >= 1500
                    ? "949px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-6">IT &amp; Software</div>
              <img className="img-2" alt="Programming flag" src="/img/programming-flag.png" />
            </div>
            <div
              className="overlap-9"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "800px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "849px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "899px"
                    : screenWidth >= 1500
                    ? "949px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-10">Life Science</div>
              <img className="img-2" alt="Biotech" src="/img/biotech.png" />
            </div>
            <div
              className="overlap-10"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "984px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1033px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1083px"
                    : screenWidth >= 1500
                    ? "1133px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-8">Tourism</div>
              <img className="img-2" alt="Plane" src="/img/plane.png" />
            </div>
            <div
              className="overlap-11"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "984px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1033px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1083px"
                    : screenWidth >= 1500
                    ? "1133px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-11">E-commerce</div>
              <img className="img-2" alt="Buy" src="/img/buy.png" />
            </div>
            <div
              className="text-wrapper-12"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "365px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "414px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "464px"
                    : screenWidth >= 1500
                    ? "514px"
                    : undefined,
              }}
            >
              What can you translate?
            </div>
            <p
              className="text-wrapper-13"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "129px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "178px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "228px"
                    : screenWidth >= 1500
                    ? "278px"
                    : undefined,
              }}
            >
              Our proficient translators have the capability to translate any kind of document, supporting the
              undermentioned file types
            </p>
            <div
              className="overlap-12"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "64px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "113px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "163px"
                    : screenWidth >= 1500
                    ? "213px"
                    : undefined,
              }}
            >
              <div className="document-translation">
                Document
                <br />
                Translation
              </div>
              <img className="img-3" alt="Pdf" src="/img/pdf.png" />
            </div>
            <div
              className="overlap-13"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "252px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "301px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "351px"
                    : screenWidth >= 1500
                    ? "401px"
                    : undefined,
              }}
            >
              <div className="marketing-material">Marketing Material &amp; Ads</div>
              <img className="img-3" alt="Goal" src="/img/goal.png" />
            </div>
            <div
              className="overlap-group-2"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "440px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "489px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "539px"
                    : screenWidth >= 1500
                    ? "589px"
                    : undefined,
              }}
            >
              <div className="website-apps">Website &amp; Apps</div>
              <img className="img-3" alt="Website" src="/img/website.png" />
            </div>
            <div
              className="overlap-14"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "628px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "677px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "727px"
                    : screenWidth >= 1500
                    ? "777px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-14">Video Subtitling</div>
              <img className="img-3" alt="Video camera" src="/img/video-camera.png" />
            </div>
            <div
              className="overlap-15"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "816px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "865px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "915px"
                    : screenWidth >= 1500
                    ? "965px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-15">Product Descriptions</div>
              <img className="img-3" alt="E commerce" src="/img/e-commerce.png" />
            </div>
            <div
              className="overlap-16"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "999px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1048px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1098px"
                    : screenWidth >= 1500
                    ? "1148px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-16">Articles, certificates, and more</div>
              <img className="biotech" alt="Biotech" src="/img/biotech.png" />
            </div>
            <div
              className="group-2"
              style={{
                left:
                  (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                    ? "64px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "172px"
                    : screenWidth >= 1500
                    ? "180px"
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
              <h1 className="h-1">Professional Translation Services</h1>
              <p className="element-languages-that-2">
                120 languages that fits in your budget
                <br />
                Human Translation done with the highest quality in the market
                <br />
                Linguists with Master&#39;s Degrees
              </p>
              <Group className="group-2-instance" property1="default" talkToAnExpertClassName="group-instance" />
            </div>
            <Group
              className={`${screenWidth >= 1201 && screenWidth < 1300 && "class-5"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-6"
              } ${screenWidth >= 1400 && screenWidth < 1500 && "class-7"} ${screenWidth >= 1500 && "class-8"}`}
              property1="default"
              talkToAnExpertClassName="group-instance"
            />
            <Group
              className={`${screenWidth >= 1201 && screenWidth < 1300 && "class-9"} ${
                screenWidth >= 1300 && screenWidth < 1400 && "class-10"
              } ${screenWidth >= 1400 && screenWidth < 1500 && "class-11"} ${screenWidth >= 1500 && "class-12"}`}
              property1="default"
              talkToAnExpertClassName="group-instance"
            />
            <p
              className="our-growth-would-not"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "117px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "166px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "216px"
                    : screenWidth >= 1500
                    ? "266px"
                    : undefined,
              }}
            >
              Our Growth would not have been possible without Magma Translation. <br />
              Our internationalization occurred through the expertise of their team.
            </p>
            <p
              className="text-wrapper-17"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "455px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "504px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "554px"
                    : screenWidth >= 1500
                    ? "604px"
                    : undefined,
              }}
            >
              What we were looking for in Magma was the cultural localization, their deep understanding of how people
              think in other countries, specially of the US, UK and Germany for our projects
            </p>
            <p
              className="we-are-a-german"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "791px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "840px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "890px"
                    : screenWidth >= 1500
                    ? "940px"
                    : undefined,
              }}
            >
              <span className="span">
                We are a German company, the largest auto parts manufacturer in the world. For us, trust in data
                security is{" "}
              </span>
              <span className="text-wrapper-18">essential</span>
              <span className="span">. Magma Translation is a trusted company.</span>
            </p>
            <div
              className="text-wrapper-19"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "330px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "379px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "429px"
                    : screenWidth >= 1500
                    ? "479px"
                    : undefined,
              }}
            >
              Highest Quality Guaranteed
            </div>
            <p
              className="every-translation"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "201px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "250px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "300px"
                    : screenWidth >= 1500
                    ? "350px"
                    : undefined,
              }}
            >
              Every translation undergoes thorough proofreading and validation by <br />
              both our team of professional external editors and our internal language specialists.
            </p>
            <div
              className="text-wrapper-20"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "200px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "249px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "299px"
                    : screenWidth >= 1500
                    ? "349px"
                    : undefined,
              }}
            >
              Shopee.com
            </div>
            <div
              className="text-wrapper-21"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "562px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "611px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "661px"
                    : screenWidth >= 1500
                    ? "711px"
                    : undefined,
              }}
            >
              Hotmart
            </div>
            <div
              className="text-wrapper-22"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "872px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "921px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "971px"
                    : screenWidth >= 1500
                    ? "1021px"
                    : undefined,
              }}
            >
              ZF Friedrichshafen
            </div>
            <div
              className="text-wrapper-23"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "189px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "238px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "288px"
                    : screenWidth >= 1500
                    ? "338px"
                    : undefined,
              }}
            >
              Milton Santana
            </div>
            <div
              className="text-wrapper-24"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "548px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "597px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "647px"
                    : screenWidth >= 1500
                    ? "697px"
                    : undefined,
              }}
            >
              Bruno Vidal
            </div>
            <div
              className="text-wrapper-25"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "848px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "897px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "947px"
                    : screenWidth >= 1500
                    ? "997px"
                    : undefined,
              }}
            >
              Danielle Schmitt Capote
            </div>
            <img
              className="ellipse"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "211px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "260px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "310px"
                    : screenWidth >= 1500
                    ? "360px"
                    : undefined,
              }}
              alt="Ellipse"
              src="/img/ellipse-1.png"
            />
            <img
              className="ellipse-2"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "555px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "604px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "654px"
                    : screenWidth >= 1500
                    ? "704px"
                    : undefined,
              }}
              alt="Ellipse"
              src="/img/ellipse-2.png"
            />
            <img
              className="ellipse-3"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "920px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "969px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1019px"
                    : screenWidth >= 1500
                    ? "1069px"
                    : undefined,
              }}
              alt="Ellipse"
              src="/img/ellipse-3.png"
            />
            <img
              className="star"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "188px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "237px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "287px"
                    : screenWidth >= 1500
                    ? "337px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-2"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "529px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "578px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "628px"
                    : screenWidth >= 1500
                    ? "678px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-3"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "864px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "913px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "963px"
                    : screenWidth >= 1500
                    ? "1013px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-4"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "218px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "267px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "317px"
                    : screenWidth >= 1500
                    ? "367px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-5"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "559px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "608px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "658px"
                    : screenWidth >= 1500
                    ? "708px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-6"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "894px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "943px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "993px"
                    : screenWidth >= 1500
                    ? "1043px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-7"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "248px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "297px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "347px"
                    : screenWidth >= 1500
                    ? "397px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-8"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "589px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "638px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "688px"
                    : screenWidth >= 1500
                    ? "738px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-9"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "924px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "973px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1023px"
                    : screenWidth >= 1500
                    ? "1073px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-10"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "278px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "327px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "377px"
                    : screenWidth >= 1500
                    ? "427px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-11"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "619px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "668px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "718px"
                    : screenWidth >= 1500
                    ? "768px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-12"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "954px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1003px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1053px"
                    : screenWidth >= 1500
                    ? "1103px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-13"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "308px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "357px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "407px"
                    : screenWidth >= 1500
                    ? "457px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-14"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "649px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "698px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "748px"
                    : screenWidth >= 1500
                    ? "798px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="star-15"
              style={{
                left:
                  screenWidth >= 1201 && screenWidth < 1300
                    ? "984px"
                    : screenWidth >= 1300 && screenWidth < 1400
                    ? "1033px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "1083px"
                    : screenWidth >= 1500
                    ? "1133px"
                    : undefined,
              }}
              alt="Star"
              src="/img/star-16.png"
            />
            <img
              className="magma-translation"
              style={{
                left:
                  (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                    ? "64px"
                    : screenWidth >= 1400 && screenWidth < 1500
                    ? "167px"
                    : screenWidth >= 1500
                    ? "185px"
                    : undefined,
                top:
                  (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                    ? "40px"
                    : (screenWidth >= 1400 && screenWidth < 1500) || screenWidth >= 1500
                    ? "55px"
                    : undefined,
              }}
              alt="Magma translation"
              src="/img/magma-translation-png.png"
            />
          </>
        )}

        <div
          className="frame"
          style={{
            backgroundColor:
              (screenWidth >= 1201 && screenWidth < 1300) ||
              (screenWidth >= 1300 && screenWidth < 1400) ||
              (screenWidth >= 1400 && screenWidth < 1500) ||
              screenWidth >= 1500
                ? "#000000"
                : screenWidth < 1201
                ? "#0536a8"
                : undefined,
            height:
              (screenWidth >= 1201 && screenWidth < 1300) ||
              (screenWidth >= 1300 && screenWidth < 1400) ||
              (screenWidth >= 1400 && screenWidth < 1500) ||
              screenWidth >= 1500
                ? "390px"
                : screenWidth < 1201
                ? "135px"
                : undefined,
            left:
              (screenWidth >= 1201 && screenWidth < 1300) ||
              (screenWidth >= 1300 && screenWidth < 1400) ||
              (screenWidth >= 1400 && screenWidth < 1500) ||
              screenWidth >= 1500
                ? "1px"
                : screenWidth < 1201
                ? "0"
                : undefined,
            top:
              (screenWidth >= 1201 && screenWidth < 1300) ||
              (screenWidth >= 1300 && screenWidth < 1400) ||
              (screenWidth >= 1400 && screenWidth < 1500) ||
              screenWidth >= 1500
                ? "3243px"
                : screenWidth < 1201
                ? "665px"
                : undefined,
            width:
              screenWidth >= 1201 && screenWidth < 1300
                ? "1200px"
                : screenWidth >= 1300 && screenWidth < 1400
                ? "1299px"
                : screenWidth >= 1400 && screenWidth < 1500
                ? "1399px"
                : screenWidth >= 1500
                ? "1499px"
                : screenWidth < 1201
                ? "430px"
                : undefined,
          }}
        >
          {((screenWidth >= 1201 && screenWidth < 1300) ||
            (screenWidth >= 1300 && screenWidth < 1400) ||
            (screenWidth >= 1400 && screenWidth < 1500) ||
            screenWidth >= 1500) && (
            <>
              <p
                className="text-wrapper-26"
                style={{
                  left:
                    screenWidth >= 1201 && screenWidth < 1300
                      ? "192px"
                      : screenWidth >= 1300 && screenWidth < 1400
                      ? "255px"
                      : screenWidth >= 1400 && screenWidth < 1500
                      ? "304px"
                      : screenWidth >= 1500
                      ? "354px"
                      : undefined,
                  top:
                    (screenWidth >= 1201 && screenWidth < 1300) || (screenWidth >= 1300 && screenWidth < 1400)
                      ? "113px"
                      : screenWidth >= 1400 && screenWidth < 1500
                      ? "98px"
                      : screenWidth >= 1500
                      ? "119px"
                      : undefined,
                }}
              >
                MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
                diverse markets around the world.
              </p>
              <p
                className="text-wrapper-27"
                style={{
                  left:
                    screenWidth >= 1201 && screenWidth < 1300
                      ? "192px"
                      : screenWidth >= 1300 && screenWidth < 1400
                      ? "255px"
                      : screenWidth >= 1400 && screenWidth < 1500
                      ? "304px"
                      : screenWidth >= 1500
                      ? "354px"
                      : undefined,
                  top:
                    (screenWidth >= 1201 && screenWidth < 1300) ||
                    (screenWidth >= 1400 && screenWidth < 1500) ||
                    screenWidth >= 1500
                      ? "245px"
                      : screenWidth >= 1300 && screenWidth < 1400
                      ? "248px"
                      : undefined,
                }}
              >
                Magma Translation | All rights reserved. ©Magma™
              </p>
            </>
          )}

          {screenWidth < 1201 && <div className="click-to-discover">CLICK TO DISCOVER</div>}
        </div>
        {screenWidth < 1201 && (
          <img className="magma-translation-2" alt="Magma translation" src="/img/magma-translation-png.png" />
        )}
      </div>
    </div>
  );
};
