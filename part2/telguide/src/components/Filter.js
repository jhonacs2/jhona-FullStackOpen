import React from "react";

const Filter = ({ filterName, setFilterName }) => {
  const filterInput = (e) => {
    setFilterName(e.target.value);
  };
  return (
    <>
      Filter Shown with: <input value={filterName} onChange={filterInput} />
    </>
  );
};

export default Filter;
