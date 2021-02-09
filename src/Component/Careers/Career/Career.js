import React, { Component } from 'react';
import styles from './Career.css';      //using css modules
// import Radium from 'radium';
// import styled from 'styled-components';

class Career extends Component {
    render() {
        const style = {
            "@media (max-width: 500px)": {
                width: "80%"
            }
        }
        return (
            // <div className="Course" style={style}>
            <div className={styles.Course}>
                <p onClick={this.props.click} className={styles.Headline}>Start working on your career with {this.props.course} before it's too late</p>
                <p className={styles.try}>try try try</p>
                <p>{this.props.children}</p>
                <p onClick={this.props.clickGoodLuck}>{this.props.luck}</p><br></br>
            Suggest Career: <input type="text" onChange={this.props.careerChanged}></input>
            </div>

        )
    }
}

// export default Radium(career);
export default Career;
