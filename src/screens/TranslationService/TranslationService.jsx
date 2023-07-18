import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const TranslationService = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="translation-service">
      <div
        className="segunda-celular"
        style={{
          border:
            screenWidth >= 1200 || screenWidth < 1000
              ? "1px none"
              : screenWidth >= 1000 && screenWidth < 1200
              ? "0.83px none"
              : undefined,
          height:
            screenWidth < 1000
              ? "912px"
              : screenWidth >= 1000 && screenWidth < 1200
              ? "853.33px"
              : screenWidth >= 1200
              ? "1024px"
              : undefined,
          width:
            screenWidth < 1000
              ? "430px"
              : screenWidth >= 1000 && screenWidth < 1200
              ? "1000px"
              : screenWidth >= 1200
              ? "1200px"
              : undefined,
        }}
      >
        {screenWidth < 1000 && (
          <>
            <h1 className="text-wrapper">Segunda Página de Celular</h1>
            <p className="esta-a-segunda-p">
              Esta é a segunda página
              <br />
              Esta é a segunda página
              <br />
              Esta é a segunda página
            </p>
          </>
        )}

        <div
          className="rectangle"
          style={{
            backgroundColor:
              (screenWidth >= 1000 && screenWidth < 1200) || screenWidth >= 1200
                ? "#d9d9d9"
                : screenWidth < 1000
                ? "#0536a8"
                : undefined,
            height:
              screenWidth >= 1000 && screenWidth < 1200
                ? "289px"
                : screenWidth < 1000
                ? "158px"
                : screenWidth >= 1200
                ? "347px"
                : undefined,
            left:
              screenWidth >= 1000 && screenWidth < 1200
                ? "79px"
                : screenWidth < 1000
                ? "0"
                : screenWidth >= 1200
                ? "95px"
                : undefined,
            top:
              screenWidth >= 1000 && screenWidth < 1200
                ? "77px"
                : screenWidth < 1000
                ? "665px"
                : screenWidth >= 1200
                ? "93px"
                : undefined,
            width:
              screenWidth >= 1000 && screenWidth < 1200
                ? "297px"
                : screenWidth < 1000
                ? "430px"
                : screenWidth >= 1200
                ? "356px"
                : undefined,
          }}
        >
          {screenWidth < 1000 && <div className="click-to-discover">CLICK TO DISCOVER</div>}
        </div>
        {screenWidth < 1000 && (
          <img className="magma-translation" alt="Magma translation" src="/img/magma-translation-png.png" />
        )}

        {screenWidth >= 1200 && (
          <div className="overlap-group">
            <div className="div" />
            <div className="rectangle-2" />
          </div>
        )}

        {((screenWidth >= 1000 && screenWidth < 1200) || screenWidth >= 1200) && (
          <div
            className="rectangle-3"
            style={{
              height: screenWidth >= 1000 && screenWidth < 1200 ? "289px" : screenWidth >= 1200 ? "347px" : undefined,
              left: screenWidth >= 1000 && screenWidth < 1200 ? "500px" : screenWidth >= 1200 ? "95px" : undefined,
              top: screenWidth >= 1000 && screenWidth < 1200 ? "473px" : screenWidth >= 1200 ? "568px" : undefined,
              width: screenWidth >= 1000 && screenWidth < 1200 ? "297px" : screenWidth >= 1200 ? "356px" : undefined,
            }}
          />
        )}

        {screenWidth >= 1000 && screenWidth < 1200 && (
          <>
            <div className="rectangle-4" />
            <div className="rectangle-5" />
          </>
        )}
      </div>
    </div>
  );
};
