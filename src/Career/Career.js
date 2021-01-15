import React from 'react';

const career = (props) => {
    return (
        <div>
            <p onClick={props.clicked}>Start working on your career with {props.course} before it's too late</p>
            <p>{props.children}</p>
            <p onClick={props.clickGoodLuck}>{props.luck}</p>
            Suggest Career: <input type="text" onChange={props.careerChanged}></input>
        </div>
    )
}

export default career;