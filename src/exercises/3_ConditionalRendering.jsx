import React from "react";

/**
 * Implement a simple function component that accepts one prop "number"
 * If the number is less than 10, the component will render a paragraph tag
 * with the text "Your number is less than 10"
 * if the number is more than 10, the component will render an h1 tag
 * with the text "Your number is bigger than 10"
 * if no number provided, the component will render a span tag
 * with the text "No number provided"
 */
export default function ConditionalRendering(props) {
  // Your code
  if (props.number || props.number == 0) {
    if (props.number < 10) {
      return <p>Your number is less than 10</p>;
    } else if (props.number > 10) {
      return <h1>Your number is bigger than 10</h1>;
    }
  } else {
    return <span>No number provided</span>;
  }
}
