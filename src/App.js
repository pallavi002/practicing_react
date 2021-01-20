import React, {Component} from 'react';
import './App.css';
import career from './Career/Career';
import Career from './Career/Career'

class App extends Component {
  state = {
    careers : [
      {id:"01", course:"coding"},
      {id:"02", course:"finance"},
      {id:"03", course:"Dance"}
    ],
    luck: "wish good luck?"
  }
  switchCareerHandler = (newCourse) => {
    this.setState({
      careers: [
        {id:"01", course: newCourse},
        {id:"02", course:"Human Resources"},
        {id:"03", course:"Designer"}
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
        {id:"01", course: event.target.value},
        {id:"02", course:"Human Resources"},
        {id:"03", course:"Designer"}
      ]
    })
  }
  render() {
    const style = {
      "width": "40%",
      "margin": "auto",
      "border": "2px solid black",
      "box-shadow": "0 10px 20px aqua",
      "border-radius": "100px",
      "padding": "16px",
      "font-style": "italic",
      "font-weight": "600",
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
        <button onClick={ () => this.switchCareerHandler("army")} style={buttonStyle}>SWITCH CAREER</button>
        <Career course={this.state.careers[0].course} careerChanged={this.careerChangedHandler} />
        <Career course={this.state.careers[1].course} clicked={this.switchCareerHandler.bind(this, "Just sleeping")} style={style}/>
        <Career course={this.state.careers[2].course} clickGoodLuck={this.printGoodLuck} luck={this.state.luck}>Go for MBA</Career>
      </div>
    );
  }
}

export default App;