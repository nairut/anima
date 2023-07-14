import React from "react";
import { Group } from "../../components/Group";
import { ObFormsBotaoDe } from "../../components/ObFormsBotaoDe";
import { ObFormsTesteDe } from "../../components/ObFormsTesteDe";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <input className="input" />
        </div>
        <ObFormsTesteDe className="OB-forms-teste-de-form" property1="default" />
        <PropertyDefaultWrapper className="OB-forms-teste-de-forma-dois" property1="default" />
        <ObFormsBotaoDe className="OB-forms-botao-de-enviar-de-forma" property1="default" />
        <Group className="group-2" property1="default" to="/thank-you" />
      </div>
    </div>
  );
};
