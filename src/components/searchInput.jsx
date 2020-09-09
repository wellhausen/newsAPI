import React from "react";

const SearchInput = ({ searchValue, onChange }) => {
  return (
    <div>
      <input
        type="text"
        name="query"
        className="form-control my-3"
        placeholder="Search term..."
        value={searchValue}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchInput;
