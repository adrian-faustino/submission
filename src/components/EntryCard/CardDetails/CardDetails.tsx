import React, { useState } from "react";
/* Styles */
import "./CardDetails.css";
/* Constants */
import { PROJECTS } from "../../../constants/appConfig";

const initialState = {
  title: "",
  description: "",
  project: PROJECTS[0].title,
};

const CardDetails = () => {
  /* State */
  const [details, setDetails] = useState(initialState);
  const [isEditMode, setIsEditMode] = useState(true);

  const renderOptionsJSX = () => {
    return PROJECTS.map((project, i) => (
      <option key={`${project}-${i}-option`} value={project.title}>
        {project.title}
      </option>
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
      {/* only show form in edit mode */}
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

      {/* only show when not in edit mode */}
      {!isEditMode && (
        <>
          <span>{details.title}</span>
          <span>{details.description}</span>
          <span>Project: {details.project}</span>
        </>
      )}
    </div>
  );
};

export default CardDetails;
