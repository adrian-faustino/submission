import React from "react";

const CardDetails = () => {
  const handleToggleEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input name="title" placeholder="Enter title" />
        <input name="description" placeholder="Enter description" />
        <button onClick={handleToggleEditMode}>save</button>
      </form>
    </div>
  );
};

export default CardDetails;
