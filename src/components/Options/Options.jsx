import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "I have questions about a stock. ",
      handler: props.actionProvider.stonkPrompt,
      id: 1,
    },
    { text: "I have questions about advisors.", 
    handler: props.actionProvider.handleAdvisorHelp, id: 2 },
    {
      text: "I would like to talk to an advisor.",
      handler: props.actionProvider.handleAdvisorMeet, id: 3
    },
    {
      text: "Financial Planning ",
      //handler: props.actionProvider.stonkPrompt,
      handler: props.actionProvider.handleFinancialPlanningHelp,
      id: 4
    },
    { text: "Insurance", 
    handler: props.actionProvider.handleInsuranceHelp, id: 2 },
    {
      text: "Investments",
      handler: props.actionProvider.handleInvestmentsHelp,
      id: 5,
    },
    {
      text: "Life & Money",
      handler: props.actionProvider.handleLifeMoneyHelp,
      id: 6,
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