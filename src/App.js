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