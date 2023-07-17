import React from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <input className="name" />

          <form name="contact" method="post" action="/contact">
          <input type="hidden" name="form-name" value="contact" />
            <input type="text" className="name" placeholder="Enter your name" />



<div className="Group2 w-[335px] h-[55px] relative">
<button type="submit">
  <div className="Rectangle1 w-[335px] h-[55px] left-0 top-0 absolute bg-blue-800" />
  <div className="TalkToAnExpert w-[209px] h-[9px] left-[63px] top-[23px] 
  absolute text-center text-white text-xl font-light uppercase leading-[13px] tracking-wide">Talk to an Expert</div>
  
</button>
</div>





          </form>


        </div>
        
      </div>
    </div>
  );
};



