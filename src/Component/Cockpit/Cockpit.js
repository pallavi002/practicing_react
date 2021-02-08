import React from 'react';
import Styling from './Cockpit.css'

const cockpit = (props) => {
    let buttonClass = '';
    if(props.showCourses) {
        buttonClass = Styling.Red;
    }
    const classes = [];
    if (props.careers.length <= 2) {
      classes.push(Styling.red)
    }
    if (props.careers.length > 2) {
      classes.push(Styling.purple)
    }
    return (
        <div className={Styling.Cockpit}>
            <h1 className={classes.join(" ")}>Hi..Start working on your Career.</h1>
            <h2 className={Styling.try}>Keep trying</h2>
            <button className={buttonClass} onClick={props.clickedToggle} >TOGGLE CAREER</button>
        </div>
    )
}

export default cockpit;