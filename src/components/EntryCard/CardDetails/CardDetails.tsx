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
    console.log("changed", e.target.value);
    console.log("name:", e.target.name);
    const { name, value } = e.target;
    setDetails((state) => ({ ...state, [name]: value }));
  };

  const buttonInnerText = isEditMode ? "save" : "edit";
  const buttonCSSClass = isEditMode && "edit-mode";

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
      <button
        className={`CardDetails__settings-btn ${buttonCSSClass}`}
        onClick={handleToggleEditMode}
      >
        {buttonInnerText}
      </button>

      {/* only show when not in edit mode */}
      {!isEditMode && (
        <div className="CardDetails__info-container">
          <span className="CardDetails__title">{details.title}</span>
          <span className="CardDetails__description">
            {details.description}
          </span>
          <span className="CardDetails__project border-rad">
            {details.project}
          </span>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
