import React, { useState } from 'react';  //useState is a react hook
import './App.css';
import Career from './Career/Career'

const App = (props) => {
  const [careerState, newCareerState] = useState({
      careers: [
        { id: "key01", course: "coding" },
        { id: "key02", course: "finance"},
        { id: "key03", course: "Dance" }
      ]
  });
  const switchCareerHandler = () => {
    newCareerState({
      careers: [
        { id: "key01", course: "Cyber Security" },
        { id: "key02", course: "Human Resources" },
        { id: "key03", course: "Designer" }
      ]
    })
  };

  return (
    <div className="App">
      <h1>Hi..This is the life of pallavi.</h1>
      <button onClick={switchCareerHandler}>SWITCH CAREER</button>
      <Career course={careerState.careers[0].course} />
      <Career course={careerState.careers[1].course} />
      <Career course={careerState.careers[2].course} >Go for MBA</Career>
    </div>
  );
}

export default App;

/*
import React, {Component} from 'react';
import './App.css';
import Career from './Career/Career'

class App extends Component {
  state = {
    careers : [
      {id:"key01", course:"coding"},
      {id:"key02", course:"finance"},
      {id:"key03", course:"Dance"}
    ]
  }
  switchCareerHandler = () => {
    this.setState({
      careers: [
        {id:"key01", course:"Cyber Security"},
        {id:"key02", course:"Human Resources"},
        {id:"key03", course:"Designer"}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi..This is the life of pallavi.</h1>
        <button onClick={this.switchCareerHandler}>SWITCH CAREER</button>
        <Career course={this.state.careers[0].course} />
        <Career course={this.state.careers[1].course} />
        <Career course={this.state.careers[2].course} >Go for MBA</Career>
      </div>
    );
  }
}

export default App;
*/