import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "I have questions about a stock. What would you like? ",
      handler: props.actionProvider.stonkPrompt,
      id: 1,
    },
    { text: "I have questions about advisor. What information would you like?", 
    handler: props.actionProvider.handleAdvisorHelp, id: 2 },
    {
      text: "I would like to talk to an advisor.",
      handler: props.actionProvider.handleAdvisorMeet, id: 3
    }

  ];
  
  

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;