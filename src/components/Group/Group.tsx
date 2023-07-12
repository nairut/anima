/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Group = ({ className }: Props): JSX.Element => {
  return (
    <div className={`group ${className}`}>
      <div className="talk-to-an-expert">TALK TO AN EXPERT</div>
    </div>
  );
};
