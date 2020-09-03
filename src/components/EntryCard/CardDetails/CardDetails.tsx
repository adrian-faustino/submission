import React, { useState } from "react";
/* Styles */
import "./CardDetails.css";
/* Constants */
import { PROJECTS } from "../../../constants/appConfig";

interface ICardDetailsProps {
  setTimerReady: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState = {
  title: "",
  description: "",
  project: PROJECTS[0].title,
};

const CardDetails: React.FC<ICardDetailsProps> = ({ setTimerReady }) => {
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

    // only show timer outside of edit mode and after initial data input pressing '+' button
    if (isEditMode) {
      setTimerReady(true);
    } else {
      setTimerReady(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setDetails((state) => ({ ...state, [name]: value }));
  };

  // return project's tag color. changes can be made in appConfig.ts
  const getProjectBGColor = (projTitle: string) => {
    return PROJECTS.find((project) => project.title === projTitle)?.color_code;
  };

  const buttonInnerText = isEditMode ? "save" : "edit";

  return (
    <div>
      {/* only show form in edit mode */}
      {isEditMode && (
        <form className="CardDetails__form">
          <input
            onChange={handleChange}
            value={details.title}
            type="text"
            name="title"
            placeholder="Enter title"
            autoComplete="off"
          />
          <textarea
            onChange={handleChange}
            value={details.description}
            name="description"
            placeholder="Enter description"
            autoComplete="off"
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

      {/* only show when not in edit mode */}
      {!isEditMode && (
        <div className="CardDetails__info-container">
          <span className="CardDetails__title">
            {details.title || "Untitled"}
          </span>
          <span className="CardDetails__description">
            {details.description || "No description provided."}
          </span>
          <span
            style={{ background: getProjectBGColor(details.project) }}
            className="CardDetails__project border-rad"
          >
            {details.project}
          </span>
        </div>
      )}

      <button
        className={`CardDetails__settings-btn ${buttonInnerText}`}
        onClick={handleToggleEditMode}
      >
        {buttonInnerText}
      </button>
    </div>
  );
};

export default CardDetails;
