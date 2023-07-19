import React from "react";
import { Lady } from "../../components/Lady";
import "./style.css";

export const DesktopForm = () => {
  return (
    <div className="desktop-form">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">First name</div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="rectangle-2" />
          <div className="overlap-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Email</div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <img className="img" alt="Rectangle" src="rectangle-6.svg" />
          <div className="overlap-group-wrapper">
            <div className="overlap-4">
              <div className="rectangle-3" />
              <div className="text-wrapper-3">Message</div>
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="rectangle-4" />
          <div className="group-2">
            <div className="overlap-group">
              <div className="text-wrapper-4">Last name</div>
            </div>
          </div>
        </div>
        <div className="group-3">
          <div className="overlap-group-2">
            <div className="text-wrapper-5">Send</div>
          </div>
        </div>
        <img className="line" alt="Line" src="line-1.svg" />
        <Lady className="lady-instance" />
        <img className="magma-translation" alt="Magma translation" src="magma-translation-png.png" />
        <p className="p">Get a Free, No-Obligation Price Quote</p>
        <h1 className="h-1">Get a Free, No-Obligation Price Quote</h1>
      </div>
    </div>
  );
};