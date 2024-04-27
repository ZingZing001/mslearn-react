import React from 'react';
import './steps.css';

function Methods(props) {
  // Create the list items using map
  const stepsList = props.steps.map((steps, index) => {
    return (
      // Return the desired HTML for each ingredient
      <ol key={index}> { steps } </ol>
    );
  });

  // return the HTML for the component
  return (
    <ol>
      { stepsList }
    </ol>
  );
}

export default Methods;