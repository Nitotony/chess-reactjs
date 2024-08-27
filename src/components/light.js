import React from "react";

import './light.css';

const Light=(props)=>{
    return (
      <div className="light">
        <span>{props.ele}</span>
      </div>
    );
}


export default Light;