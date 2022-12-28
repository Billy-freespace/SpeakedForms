import React from "react";
import {FaFileAlt} from "react-icons/fa";

const TopForm = () =>{
    return(
        <div className="topForm">
            <div className="form-title">
                <FaFileAlt size={20}/>
                <input type="text" placeholder="Untitled" className="form-name" />
            </div>
        </div>
    )
}

export default TopForm;