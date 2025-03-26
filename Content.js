import React from "react";

const Content=(props)=>{
    return(
        <div className="d">
            <img src={props.image} alt="dhoni"></img>
            <p id="a"><b>{props.headline}</b></p>
            <p id="b">{props.content}</p>
        </div>
    )
}
export default Content;