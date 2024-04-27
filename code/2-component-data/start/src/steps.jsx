import React from 'react';
import './steps.css';
function steps(props) {
    // Create the list items using map
    const steps = props.steps.map((steps, index) => {
        return (
            // Return the desired HTML for each ingredient
            <ol key={index}> { steps } </ol>
        );
    });

    // return the HTML for the component
    return (
        <ol>
            { steps }
        </ol>
    );
}

export default steps;