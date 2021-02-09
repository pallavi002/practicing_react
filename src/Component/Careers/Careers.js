import React, { Component } from 'react';
import Career from './Career/Career'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

class Careers extends Component {
    static getDerivedStateFromProps(props, state) {             //no use, bcz we dont have any state rn.
        console.log("[Careers.js] getDerivedStateFromProps.");
        return state;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Career.js] shouldComponentUpdate.");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Career.js] getSnapshotBeforeUpdate.");
        return {message:"Hey"};
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("[Career.js] componentDidUpdate.");
        console.log(snapShot);
    }
    render() {
        console.log("[Careers.js] rendering...");
        return this.props.careers.map((career, index) => {
            return <ErrorBoundary key={career.id}>
                <Career course={career.course} click={() => this.props.clickedDelete(index)} careerChanged={(event) => this.props.changedCareer(event, career.id)} />
            </ErrorBoundary>
        })
    }
}


export default Careers;