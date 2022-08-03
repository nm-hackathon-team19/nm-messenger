import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import React from 'react';
import Quiz from "../components/Quiz/Quiz";
import OptionsAdvisor from "../components/OptionsAdvisor/OptionsAdvisor";

const config = {
    botName: "MoneyTree",
  initialMessages: [createChatBotMessage(`Hello. I am MoneyTree. How can I help you?`, {
      widget: "options"
  })],
  widgets: [
      {
          widgetName: "options",
          widgetFunc: (props) => <Options {...props}/>,

      },
      {
          widgetName: "advisorHelp",
          widgetFunc: (props) => <OptionsAdvisor {...props}/>,
          
          
      },
      {
        widgetName: "collegeHelp",
        widgetFunc: (props) => <OptionsAdvisor {...props}/>,
        
        
    },

  ]
}

export default config