import React, {Component} from 'react';
import './App.css';
import career from './Career/Career';
import Career from './Career/Career'

class App extends Component {
  state = {
    careers : [
      {id:"key01", course:"coding"},
      {id:"key02", course:"finance"},
      {id:"key03", course:"Dance"}
    ],
    luck: "wish good luck?"
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
  render() {
    return (
      <div className="App">
        <h1>Hi..This is the life of pallavi.</h1>
        <button onClick={ () => this.switchCareerHandler("army")}>SWITCH CAREER</button>
        <Career course={this.state.careers[0].course} careerChanged={this.careerChangedHandler} />
        <Career course={this.state.careers[1].course} clicked={this.switchCareerHandler.bind(this, "Just sleeping")} />
        <Career course={this.state.careers[2].course} clickGoodLuck={this.printGoodLuck} luck={this.state.luck}>Go for MBA</Career>
      </div>
    );
  }
}

export default App;