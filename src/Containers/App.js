import React, { Component } from 'react';
import Styling from './App.css';
import Hobby from '../Component/Hobby/hobby';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Careers from '../Component/Careers/Careers'
import Cockpit from '../Component/Cockpit/Cockpit'

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
    let courses = null;
    //dynamic styling
    // let classes = ["purple", "bold"].join(" ");
    if (this.state.showCourses) {
      courses = (
          <Careers careers={this.state.careers} clickedDelete={this.deleteCareerHandler} changedCareer={this.careerChangedHandler}/>
      );
    }
    // const rnd = Math.random();
    // if(rnd > 0.7) {
    //   throw new Error("Something went wrong!!")
    // }
    return (      
        <div className={Styling.App}>
          <Cockpit careers={this.state.careers} showCourses={this.state.showCourses} clickedToggle={this.toggleCourseHandler}/>
          {courses}
        </div>
    );
  }
}

export default App;