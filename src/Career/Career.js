import React from 'react';
import './Career.css';
// import Radium from 'radium';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 40%;
margin: auto;
border: 2px solid black;
color:teal;
box-shadow: 0 20px 30px rgb(133, 132, 132);
border-radius: 100px;
padding: 16px;
font-style: italic;
font-weight: 600;
text-align: center;
margin-bottom: 2%;
margin-top: 2%;
@media (max-width: 500px) {
    width: "80%"
}`

const career = (props) => {
    const style = {
        "@media (max-width: 500px)": {
            width: "80%"
        }
    }
    return (
        // <div className="Course" style={style}>
        <StyledDiv>
            <p onClick={props.click} className="try">Start working on your career with {props.course} before it's too late</p>
            <p>{props.children}</p>
        <h2 className="try">Try moreee!!!</h2>

            <p onClick={props.clickGoodLuck}>{props.luck}</p><br></br>
            Suggest Career: <input type="text" onChange={props.careerChanged}></input>
        </StyledDiv>

    )
}

// export default Radium(career);
export default career;
