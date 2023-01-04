import React from "react";
import { FaSearch } from "react-icons/fa";

const Topbar = (props) => {

  return (
    <div className="topbar">
      <div className="input-group m-3">
        <div id="search-autocomplete" className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Buscar"
          />
        </div>
        <button type="button" className="btn">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
