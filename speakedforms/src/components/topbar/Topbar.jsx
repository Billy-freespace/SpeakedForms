import React from "react";
import {FaSearch,FaRegQuestionCircle} from "react-icons/fa";

const Topbar = () => {
    return(
        <div className="topbar">
           <div className="input-group m-2">
                <div id="search-autocomplete" className="form-outline">
                    <input type="search" id="form1" class="form-control" placeholder="Buscar"/>
                </div>
                <button type="button" className="btn">
                    <FaSearch/>
                </button>
            </div>
            <ul className="m-2">
                <li>
                    <FaRegQuestionCircle size={25}/>
                </li>
            </ul>
        </div>
    )
}

export default Topbar;