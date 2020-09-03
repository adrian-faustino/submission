import React from "react";
/* Styles */
import "./CardDetails.css";
/* Constants */
import { PROJECTS } from "../../../constants/appConfig";

const CardDetails = () => {
  const renderOptionsJSX = () => {
    return PROJECTS.map((project, i) => (
      <option value={project.title}>{project.title}</option>
    ));
  };

  const handleToggleEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input name="title" placeholder="Enter title" />
        <input type="text" name="description" placeholder="Enter description" />
        <select name="project">{renderOptionsJSX()}</select>

        <button onClick={handleToggleEditMode}>save</button>
      </form>
    </div>
  );
};

export default CardDetails;
