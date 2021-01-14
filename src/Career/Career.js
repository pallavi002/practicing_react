import React from 'react';

const career = (props) => {
    return (
        <div>
            <p>Start working on your career with {props.course} before it's too late</p>
            <p>{props.children}</p>
        </div>
    )
}

export default career;