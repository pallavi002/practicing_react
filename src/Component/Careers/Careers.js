import React from 'react';
import Career from './Career/Career'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

const careers = (props) => {
    console.log("[Careers.js] rendering...");
    return props.careers.map((career, index) => {
        return <ErrorBoundary key={career.id}>
            <Career course={career.course} click={() => props.clickedDelete(index)} careerChanged={(event) => props.changedCareer(event, career.id)} />
        </ErrorBoundary>
    })
}

export default careers;