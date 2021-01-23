import React, { Component } from 'react';
import './App.css';
import career from './Career/Career';
import Career from './Career/Career'
import Hobby from './Hobby/hobby'

class App extends Component {
  state = {
    careers: [
      { id: "key01", course: "coding" },
      { id: "key02", course: "finance" },
      { id: "key03", course: "Dance" }
    ],
    luck: "wish good luck?",
    hobby: [
      { name: "gaming" },
      { name: "singing" }
    ],
    showCourses: false
  }
  //not using currently
  // switchCareerHandler = (newCourse) => {
  //   this.setState({
  //     careers: [
  //       { id: "key01", course: newCourse },
  //       { id: "key02", course: "Human Resources" },
  //       { id: "key03", course: "Designer" }
  //     ]
  //   })
  // }
  printGoodLuck = () => {
    this.setState({
      luck: "Hey good luck !!"
    })
  }
  careerChangedHandler = (event, id) => {
    const changeId = this.state.careers.findIndex(c => {
      return c.id === id;
    });
    const career = {...this.state.careers[changeId]};
    career.course = event.target.value;
    const careers = [...this.state.careers]; 
    careers[changeId] = career;
    this.setState({careers: careers })

  }

  toggleCourseHandler = () => {
    const doesShow = this.state.showCourses;
    this.setState({ showCourses: !doesShow });
  }
  deleteCareerHandler = (careerIndex) => {
    const careers = this.state.careers.slice();   //copying array instead of just pointing og
    //you cane also do the below ES6 spread operator approach to copy array
    //const careers = [...this.state.careers]
    careers.splice(careerIndex, 1);
    this.setState({careers:careers}) 
  }
  render() {
    const style = {
      "width": "40%",
      "margin": "auto",
      "border": "2px solid black",
      "box-shadow": "0 10px 20px aqua",
      "padding": "16px",
      "font-style": "italic",
      "text-align": "center",
      "margin-bottom": "2%",
      "margin-top": "2%"
    }
    const buttonStyle = {
      "height": "50px",
      "width": "200px",
      "background": "cadetblue",
      "color": "white",
      "padding": "10px",
      "font-weight": "800",
      "border-radius": "5px"
    }
    let courses = null;
    //dynamic styling
    // let classes = ["purple", "bold"].join(" ");
    const classes = [];
    if (this.state.careers.length <= 2) {
      classes.push("red")
    }
    if (this.state.careers.length > 2) {
      classes.push("purple")
    }
    if (this.state.showCourses) {
      courses = (
        <div>
          {this.state.careers.map((career, index) => {
            return <Career course={career.course} click={() => this.deleteCareerHandler(index)} key={career.id} careerChanged={(event) => this.careerChangedHandler(event, career.id)}/>
          })}
          {/* <Career course={this.state.careers[0].course} careerChanged={this.careerChangedHandler} />
        <Career course={this.state.careers[1].course} clicked={this.switchCareerHandler.bind(this, "Just sleeping")} style={style} />
        <Career course={this.state.careers[2].course} clickGoodLuck={this.printGoodLuck} luck={this.state.luck}>Go for MBA</Career>
        <Hobby hobby={this.state.hobby[0].name} />
        <Hobby hobby={this.state.hobby[1].name}>Testing hobby component children props.</Hobby> */}
        </div>
      );
      buttonStyle.backgroundColor = 'red';
    }
    return (
      <div className="App">
        <h1 className={classes}>Hi..Start working on your Career.</h1>
        <button onClick={this.toggleCourseHandler} style={buttonStyle}>TOGGLE CAREER</button>
        {courses}
      </div>
    );
  }
}

export default App;