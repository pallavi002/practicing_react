import React, {Component} from 'react';
import './App.css';
import Career from './Career/Career'
import Hobby from './Hobby/hobby'

class App extends Component {
  state = {
    careers : [
      {id:"key01", course:"coding"},
      {id:"key02", course:"finance"},
      {id:"key03", course:"Dance"}
    ],
    luck: "wish good luck?",
    hobby : [
      {name:"gaming"},
      {name:"singing"}
    ],
    showCourses: false
  }
  switchCareerHandler = (newCourse) => {
    this.setState({
      careers: [
        {id:"key01", course: newCourse},
        {id:"key02", course:"Human Resources"},
        {id:"key03", course:"Designer"}
      ]
    })
  }
  printGoodLuck = () => {
    this.setState({
      luck: "Hey good luck !!"
    })
  }
  careerChangedHandler = (event) => {
    this.setState({
      careers: [
        {id:"key01", course: event.target.value},
        {id:"key02", course:"Human Resources"},
        {id:"key03", course:"Designer"}
      ]
    })
  }
  toggleCourseHandler = () => {
    const doesShow = this.state.showCourses;
    this.setState({showCourses: !doesShow});
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
    return (
      <div className="App">
        <h1>Hi..Start working on your Career.</h1>
        <button onClick={this.toggleCourseHandler} style={buttonStyle}>TOGGLE CAREER</button>
        { this.state.showCourses ?
                  <div>
                  <Career course={this.state.careers[0].course} careerChanged={this.careerChangedHandler} />
                  <Career course={this.state.careers[1].course} clicked={this.switchCareerHandler.bind(this, "Just sleeping")} style={style}/>
                  <Career course={this.state.careers[2].course} clickGoodLuck={this.printGoodLuck} luck={this.state.luck}>Go for MBA</Career>
                  <Hobby hobby={this.state.hobby[0].name}/>
                  <Hobby hobby={this.state.hobby[1].name}>Testing hobby component children props.</Hobby>
                  </div> :null
        } 
      </div>
    );
  }
}

export default App;