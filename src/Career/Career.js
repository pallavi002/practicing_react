import React from 'react';
import './Career.css'

const career = (props) => {
    return (
        <div className="Course" style={props.style}>
            <p onClick={props.click} className="Headline">Start working on your career with {props.course} before it's too late</p>
            <p>{props.children}</p>
            <p onClick={props.clickGoodLuck}>{props.luck}</p><br></br>
            Suggest Career: <input type="text" onChange={props.careerChanged}></input>
        </div>
    )
}

export default career;