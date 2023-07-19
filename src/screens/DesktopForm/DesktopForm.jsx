import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Lady } from "../../components/Lady";
import "./style.css";

export const DesktopForm = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="desktop-form">
      <div
        className="cell-form"
        style={{
          height: screenWidth < 1300 ? "912px" : screenWidth >= 1300 ? "1024px" : undefined,
          width: screenWidth < 1300 ? "430px" : screenWidth >= 1300 ? "1300px" : undefined,
        }}
      >
        {screenWidth < 1300 && (
          <>
            <h1 className="text-wrapper">Get a Free, No-Obligation Price Quote</h1>
            <div className="send-wrapper">
              <div className="send">SEND</div>
            </div>
          </>
        )}

        {screenWidth >= 1300 && (
          <>
            <div className="overlap">
              <div className="rectangle" />
              <div className="overlap-wrapper">
                <div className="overlap-group">
                  <div className="div">First name</div>
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
              <img className="img" alt="Rectangle" src="/img/rectangle-6.png" />
              <div className="group-2">
                <div className="overlap-4">
                  <div className="rectangle-3" />
                  <div className="text-wrapper-3">Message</div>
                </div>
              </div>
            </div>
            <div className="overlap-5">
              <div className="rectangle" />
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
            <img className="line" alt="Line" src="/img/line-1-1.png" />
            <Lady className="lady-instance" />
          </>
        )}

        <img
          className="magma-translation"
          style={{
            height: screenWidth >= 1300 ? "45px" : screenWidth < 1300 ? "54px" : undefined,
            left: screenWidth >= 1300 ? "132px" : screenWidth < 1300 ? "118px" : undefined,
            top: screenWidth >= 1300 ? "57px" : screenWidth < 1300 ? "34px" : undefined,
            width: screenWidth >= 1300 ? "162px" : screenWidth < 1300 ? "194px" : undefined,
          }}
          alt="Magma translation"
          src={
            screenWidth >= 1300
              ? "/img/magma-translation-png-4.png"
              : screenWidth < 1300
              ? "/img/magma-translation-png.png"
              : undefined
          }
        />
        {screenWidth >= 1300 && <h1 className="h-1">Get a Free, No-Obligation Price Quote</h1>}

        {screenWidth < 1300 && (
          <>
            <div className="overlap-6">
              <div className="rectangle-4" />
              <div className="group-5">
                <div className="div-wrapper">
                  <div className="text-wrapper-2">Email</div>
                </div>
              </div>
            </div>
            <p className="just-send-us-your-e">
              Just send us your E-mail and <br />
              we will contact y ou
            </p>
          </>
        )}
      </div>
    </div>
  );
};
