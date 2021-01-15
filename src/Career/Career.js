import React from 'react';
import './Career.css'

const career = (props) => {
    return (
        <div className="Course">
            <p onClick={props.clicked}>Start working on your career with {props.course} before it's too late</p>
            <p>{props.children}</p>
            <p onClick={props.clickGoodLuck}>{props.luck}</p>
            Suggest Career: <input type="text" onChange={props.careerChanged}></input>
        </div>
    )
}

export default career;