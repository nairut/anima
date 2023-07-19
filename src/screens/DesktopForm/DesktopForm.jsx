import React from "react";
import { Lady } from "../../components/Lady";
import { Line1 } from "../../icons/Line1";
import { Rectangle6 } from "../../icons/Rectangle6";
import "./style.css";

export const DesktopForm = () => {
  return (
    <div className="desktop-form">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper">First name</div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="rectangle-2" />
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Email</div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <Rectangle6 className="rectangle-6" />
          <div className="group-2">
            <div className="overlap-4">
              <div className="rectangle-3" />
              <div className="text-wrapper-3">Message</div>
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="rectangle-4" />
          <div className="group-3">
            <div className="overlap-group">
              <div className="text-wrapper-4">Last name</div>
            </div>
          </div>
        </div>
        <div className="group-4">
          <div className="overlap-group-2">
            <div className="text-wrapper-5">Send</div>
          </div>
        </div>
        <Line1 className="line" />
        <Lady className="lady-instance" />
        <img className="magma-translation" alt="Magma translation" src="/img/magma-translation-png.png" />
        <h1 className="h-1">Get a Free, No-Obligation Price Quote</h1>
      </div>
    </div>
  );
};
