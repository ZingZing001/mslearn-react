import React from 'react';

function steps(props) {
    // Create the list items using map
    const steps = props.steps.map((steps, index) => {
        return (
            // Return the desired HTML for each ingredient
            <ol key={index}> { steps } </ol>
        );
    });

    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ul>
            { steps }
        </ul>
    );
}

export default steps;