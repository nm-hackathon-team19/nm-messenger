import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import React from 'react';
import Quiz from "../components/Quiz/Quiz";

const config = {
    botName: "LeadTrade",
  initialMessages: [createChatBotMessage(`Hello. How can I help you?`, {
      widget: "options"
  })],
  widgets: [
      {
          widgetName: "options",
          widgetFunc: (props) => <Options {...props}/>,

      },
      {
          widgetName: "javascriptQuiz",
          widgetFunc: (props) => <Quiz {...props}/>,
          props: {
              questions: [
                  {
                      question: "What is python?",
                      answer: "It's a snake",
                      id: 1
                  },
                  {
                    question: "What is go?",
                    answer: "It's an action",
                    id: 2
                },
                {
                    question: "What is javascript?",
                    answer: "It's a made up term",
                    id: 3
                }
              ]
          }
      }
  ]
}

export default config