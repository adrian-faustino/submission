import React, { useState } from "react";
/* Styles */
import "./CardDetails.css";
/* Constants */
import { PROJECTS } from "../../../constants/appConfig";

const initialState = {
  title: "",
  description: "",
  project: "",
};

const CardDetails = () => {
  /* State */
  const [details, setDetails] = useState(initialState);
  const [isEditMode, setIsEditMode] = useState(true);

  const renderOptionsJSX = () => {
    return PROJECTS.map((project, i) => (
      <option value={project.title}>{project.title}</option>
    ));
  };

  const handleToggleEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEditMode(!isEditMode);
  };

  const buttonInnerText = isEditMode ? "save" : "edit";

  return (
    <div>
      {isEditMode && (
        <form>
          <input name="title" placeholder="Enter title" />
          <input
            type="text"
            name="description"
            placeholder="Enter description"
          />
          <select name="project">{renderOptionsJSX()}</select>
        </form>
      )}
      <button onClick={handleToggleEditMode}>{buttonInnerText}</button>
    </div>
  );
};

export default CardDetails;
