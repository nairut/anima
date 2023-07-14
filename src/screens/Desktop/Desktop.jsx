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


import React from "react"

export default function Home() {
  return <div>

    <form 
      name="contact v2"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact v2" />

      <div hidden>
        <input name="bot-field" />
      </div>

      <div>
        <label>First name<br />
            <input type="text" name="first-name" />
        </label>
      </div>

      <div>
        <label>Last name<br />
            <input type="text" name="last-name" />
        </label>
      </div>

      <div>
        <label htmlFor="email" >Email</label><br />
        <input id="email" type="email" name="email" />
      </div>

      <div>
        <label>Any Comments?<br />
          <textarea name="comments"></textarea>
        </label>
      </div>

      <button type="submit">Submit The Results</button>

    </form>

  </div>
}