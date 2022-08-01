import React from "react"
import Chatbot from 'react-chatbot-kit'
import config from "../chatbot/config"
import ActionProvider from "../chatbot/ActionProvider"
import MessageParser from "../chatbot/MessageParser"
import "../chatbot/App.css"
import 'react-chatbot-kit/build/main.css';

const ChatBot = () => {
    return (
        <div className="App">
            <div style={{maxWidth:"300px"}}>
                <Chatbot />
            </div>
        </div>
    )
}

export default ChatBot;