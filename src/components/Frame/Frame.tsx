/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  frameClassName: any;
  frameClassNameOverride: any;
  professionalClassName: any;
  elementLanguagesThatClassName: any;
  botOClassName: any;
  rectangleClassName: any;
  talkToAnExpertClassName: any;
  whatsappImageClassName: any;
  whatsappImage: string;
}

export const Frame = ({
  className,
  frameClassName,
  frameClassNameOverride,
  professionalClassName,
  elementLanguagesThatClassName,
  botOClassName,
  rectangleClassName,
  talkToAnExpertClassName,
  whatsappImageClassName,
  whatsappImage = "/img/whatsapp-image-2023-07-12-at-12-41-2.png",
}: Props): JSX.Element => {
  return (
    <div className={`frame ${className}`}>
      <div className={`div ${frameClassName}`}>
        <div className={`div-2 ${frameClassNameOverride}`}>
          <div className={`professional ${professionalClassName}`}>Professional Translation Services</div>
          <p className={`element-languages-that ${elementLanguagesThatClassName}`}>
            120 languages that fits in your budget
            <br />
            11,000+ translators
            <br />
            Easy, Technological, Professional
          </p>
          <div className={`bot-o ${botOClassName}`}>
            <div className={`rectangle ${rectangleClassName}`} />
            <div className={`talk-to-an-expert ${talkToAnExpertClassName}`}>TALK TO AN EXPERT</div>
          </div>
        </div>
        <img className={`whatsapp-image ${whatsappImageClassName}`} alt="Whatsapp image" src={whatsappImage} />
      </div>
    </div>
  );
};

Frame.propTypes = {
  whatsappImage: PropTypes.string,
};
