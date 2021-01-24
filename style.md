1. you can add css in the css file, but they are global. They will affect all the elements in the project
avoid global css

2. You can add css dynamically like the below
      buttonStyle.backgroundColor = 'red';
but in this case hover and extra stuffs won't work
for eg.. 
        buttonStyle[":hover"] = {
        backgroundColor: "pink",
        color: "black"
      }

3. In this case, you can use "Radium" npm tool for styling.
import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

class App extends Component {

  render() {
    const buttonStyle = {
      height: "50px",
      width: "200px",
      background: "cadetblue",
      color: "white",
      padding: "10px",
      fontWeight: "800",
      borderRadius: "5px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    }

    }
    return (
      <StyleRoot>
        <div className="App">
          <button style={buttonStyle}>TOGGLE CAREER</button>
        </div>
      </StyleRoot> 
    );
  }
}

export default Radium(App);


The above code for hover in point 2 of dynamic styling will also work with Radium.

4. Alternative for Radium is styled-components.
It creates styled COMPONENTS. It does not just adds inline style like radium.

import styled from 'styled-components';

const StyledDiv = styled.div`
width: 40%;
margin: auto;
border: 2px solid black;
color:teal;
margin-top: 2%;
@media (max-width: 500px) {
    width: "80%"
}`

const career = (props) => {
    return (
        <StyledDiv>
            <p>...</p>
            <!-- all component stuff here -->
        </StyledDiv>

    )
}
export default career;

