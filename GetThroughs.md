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

..Component Lifecycle Hooks..

lifecycle hooks are used for component creation.

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

#

for props in lifecycle hooks the steps are:

1. Initialization of state.
    static getDerivedStateFromProps(props, state) {
        console.log("[Careers.js] getDerivedStateFromProps.");
        return state;
    }
2. Update any props based before hand.
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Career.js] shouldComponentUpdate.")
        return true;
    }
    should return true or false.
3. If u want to get back to prev state after updating prop u can do this. You can store the data before update and then use it after update using componentDidUpdate.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Career.js] getSnapshotBeforeUpdate.");
        return null;
    }
4. It will update everything once any changes in the state done.
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("[Career.js] componentDidUpdate.")
    }

point 3, if u take snapshot and then update there is one more lifecycle hook for that before updating. componentWillReceiveProps. Removed from new react versions.
