
import React, { useState } from "react";
import { Group } from "../../components/Group";
import "./style.css";
import ProjectForm from "../../components/ProjectForm";

export const Desktop = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="desktop">
    <ProjectForm/>
    </div>
  );
};