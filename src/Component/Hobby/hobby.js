import React from 'react';
import './hobby.css'

const career = (props) => {
    return (
        <div className="Hobby">
            <h3>This is hobby component</h3>
            <p>Making {props.hobby} this hobby now.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default career;