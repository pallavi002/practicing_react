import React from 'react';
import styles from './Career.css';      //using css modules
// import Radium from 'radium';
// import styled from 'styled-components';

const career = (props) => {
    const style = {
        "@media (max-width: 500px)": {
            width: "80%"
        }
    }
    return (
        // <div className="Course" style={style}>
        <div className={styles.Course}>
            <p onClick={props.click} className={styles.Headline}>Start working on your career with {props.course} before it's too late</p>
            <p className={styles.try}>try try try</p>
            <p>{props.children}</p>
            <p onClick={props.clickGoodLuck}>{props.luck}</p><br></br>
            Suggest Career: <input type="text" onChange={props.careerChanged}></input>
        </div>

    )
}

// export default Radium(career);
export default career;
