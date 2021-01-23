import React from 'react';
import './Career.css';
import Radium from 'radium';

const career = (props) => {
    const style = {
        "@media (max-width: 500px)" : {
                width: "80%"
        }
    }
    return (
        <div className="Course" style={style}>
            <p onClick={props.click} className="Headline">Start working on your career with {props.course} before it's too late</p>
            <p>{props.children}</p>
            <p onClick={props.clickGoodLuck}>{props.luck}</p><br></br>
            Suggest Career: <input type="text" onChange={props.careerChanged}></input>
        </div>
    )
}

export default Radium(career);