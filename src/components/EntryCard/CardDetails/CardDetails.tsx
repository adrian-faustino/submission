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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    console.log("changed", e.target.value);
    console.log("name:", e.target.name);
    const { name, value } = e.target;
    setDetails((state) => ({ ...state, [name]: value }));
  };

  const buttonInnerText = isEditMode ? "save" : "edit";

  return (
    <div>
      {isEditMode && (
        <form>
          <input
            onChange={handleChange}
            value={details.title}
            type="text"
            name="title"
            placeholder="Enter title"
          />
          <textarea
            onChange={handleChange}
            value={details.description}
            name="description"
            placeholder="Enter description"
          ></textarea>
          <select
            onChange={handleChange}
            value={details.project}
            name="project"
          >
            {renderOptionsJSX()}
          </select>
        </form>
      )}
      <button onClick={handleToggleEditMode}>{buttonInnerText}</button>
    </div>
  );
};

export default CardDetails;
