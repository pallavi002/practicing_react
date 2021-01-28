import React, { Component } from 'react';
import Styling from './App.css';
import Career from './Career/Career';
import Hobby from './Hobby/hobby';

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
    const career = { ...this.state.careers[changeId] };
    career.course = event.target.value;
    const careers = [...this.state.careers];
    careers[changeId] = career;
    this.setState({ careers: careers })

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
    this.setState({ careers: careers })
  }
  render() {
    let buttonClass = [];
    let courses = null;
    //dynamic styling
    // let classes = ["purple", "bold"].join(" ");
    const classes = [];
    if (this.state.careers.length <= 2) {
      classes.push(Styling.red)
    }
    if (this.state.careers.length > 2) {
      classes.push(Styling.purple)
    }
    if (this.state.showCourses) {
      courses = (
        <div>
          {this.state.careers.map((career, index) => {
            return <Career course={career.course} click={() => this.deleteCareerHandler(index)} key={career.id} careerChanged={(event) => this.careerChangedHandler(event, career.id)} />
          })}
        </div>
      );
      buttonClass.push(Styling.Red);
    }
    return (
      <div className={Styling.App}>
        <h1 className={classes.join(" ")}>Hi..Start working on your Career.</h1>
          <button className={buttonClass.join(" ")} onClick={this.toggleCourseHandler} >TOGGLE CAREER</button>
        {courses}
      </div>
    );
  }
}

export default App;