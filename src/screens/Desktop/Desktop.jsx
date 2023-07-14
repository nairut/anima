
import React, { useState } from "react";
import { Group } from "../../components/Group";
import "./style.css";

export const Desktop = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="desktop">
      <div className="div">
        <form name="myForm" onSubmit={handleSubmit} method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <div className="overlap-group">
            <div className="rectangle" />
            <input
              className="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Group className="group-2" property1="default" to="/thank-you">
          <button>TALK TO AN EXPERT</button>
        </Group>
        </form>
      </div>
    </div>
  );
};


<div class="desktop">
  <div class="div">
    <form name="myForm" action="/thank-you" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <div class="overlap-group">
        <div class="rectangle"></div>
        <input class="name" type="text" name="name" />
      </div>


      <Group className="overlap-group rectangle" property1="default" onSubmit={handleSubmit}>
      <button>TALK TO AN EXPERT</button>
      </Group>


    </form>


  </div>
</div>