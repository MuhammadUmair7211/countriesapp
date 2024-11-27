import React from "react";

const SelectMenu = () => {
  return (
    <div className="w-25 shadow rounded">
      <select name="" id="" className="px-3 py-2 rounded border-0">
        <option hidden="">Filter By region</option>
        <option value="">America</option>
        <option value="">Australia</option>
        <option value="">Denmark</option>
        <option value="">France</option>
      </select>
    </div>
  );
};

export default SelectMenu;
