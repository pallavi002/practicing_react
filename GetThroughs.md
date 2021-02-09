Class Based Components
Stateful Components

Functional Components
State less components (but now hooks are there for state)
Presentational Components
Dumb Components

#####
const careers = (props) => {
    return() 
}

new ES6
const careers = (props) => (
    
)
#####

Component Lifecycle Hooks
1. constructor-used for basic initialization or setting up an initial state.
  
  constructor(props) {
    super(props);
    console.log("App.js Constructor")
  }

inside constructor u can add the state, if u add state outside constructor, react adds constructor for u n add super props.

    constructor(props) {
    super(props);
    console.log("App.js Constructor");
    this.state = {
      careers: [
        { id: "key01", course: "coding" },
        { id: "key02", course: "finance" },
        { id: "key03", course: "Dance" }
      ]
  }

2. after constructor, getDerivedStateFromProps runs, it should has static keyword.

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props)
    return state;
  }

3. after getDerivedStateFromProps, render() method executes.

4. after this all the child components will be rendered.

5. after all of these, componentDidMount will run.
  
  componentDidMount() {
    console.log("[App.js], componentDidMount")
  }

componentWillMount prepares the states correctly, that job is done in getDerivedStateFromProps so it's not used much now.