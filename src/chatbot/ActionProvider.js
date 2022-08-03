import { searchForStockData, searchForEarningsData, searchForWeeklyData } from '../http-helpers/tradeUtilities';

const axios = require('axios');
var company_name = ''

class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   greet = () => {
    const message = this.createChatBotMessage("Hello! This is LearnTrade. How can I help?")
    this.addMessageToState(message);
   };

   handleJavascriptQuiz = () => {
       const message = this.createChatBotMessage("Here is your quiz.", {widget : "javascriptQuiz"})
       this.addMessageToState(message);
   };

   handleAdvisorHelp = () => {
    const message = this.createChatBotMessage("This is your personal Advisor. How can I help?.", {widget : "advisorHelp"})
    this.addMessageToState(message);
};

handleAdvisorMeet = () => {
  const message = this.createChatBotMessage("Please click the button:", {widget : "advisorMeet"})
  this.addMessageToState(message);
};

handleCollegeHelp = () => {
  const message = this.createChatBotMessage("https://www.northwesternmutual.com/college-savings-plans/")
  this.addMessageToState(message);
};

handleInsuranceHelp = () => {
  const message = this.createChatBotMessage("https://www.northwesternmutual.com/life-insurance/")
  this.addMessageToState(message);
}; 

stonkPrompt = () => {
  const message = this.createChatBotMessage("What stock are you interested in today?")
  
  this.addMessageToState(message);
  
 };
 stonkResponse = () => {
  
  const message = this.createChatBotMessage("Apple (AAPL) is currently trading at $160.72. Today is down $0.72 (0.51%)")
  this.addMessageToState(message);
  
 };

 searchStockBasic = (ticker) => {
  const performApiCall = async (s) => {
    console.log(s)
    try {
      const response = await searchForStockData(s.toUpperCase());
      console.log(response)
      const currentPrice = (response.daily_data["4. close"])
      console.log(currentPrice)
      const priceChange = response.daily_data["4. close"] - response.daily_data["1. open"]
      const absPriceChange = Math.abs(response.daily_data["4. close"] - response.daily_data["1. open"])
      const pricePerChange = (absPriceChange/response.daily_data["1. open"] * 100)
      company_name = response.company_name
      if (priceChange < 0){
        const message = this.createChatBotMessage(`${company_name} (${ticker.toUpperCase()}) is currently trading at $${Number(currentPrice).toFixed(2)}. Today is down $${Number(absPriceChange).toFixed(2)} (${Number(pricePerChange).toFixed(2)}%).`)
        this.addMessageToState(message);
      }
      else{
        const message = this.createChatBotMessage(`${company_name} (${ticker.toUpperCase()}) is currently trading at $${Number(currentPrice).toFixed(2)}. Today is up $${Number(absPriceChange).toFixed(2)} (${Number(pricePerChange).toFixed(2)}%).`)
        this.addMessageToState(message);
      }
      
      
    } catch (err) {
      console.error(err.message);
    }
  };
  let tick = ticker.replace("$", '')
  performApiCall(tick)
  
 };

 searchStockWeekly = (ticker) => {
  const performApiCall = async (s) => {
    console.log(s)
    try {
      const response = await searchForWeeklyData(s.toUpperCase());
      console.log(response)
      
      const message = this.createChatBotMessage(`${company_name} (${ticker.toUpperCase()}) is has changed by $${Number(response.current_price).toFixed(2)} (${Number(response.weekly_percentage_change.replace('%','')).toFixed(2)}%) this week`)
      this.addMessageToState(message);
      
    } catch (err) {
      console.error(err.message);
    }
  };
  let tick = ticker.replace("$", '')
  performApiCall(tick)
  
 };

 searchStockEarnings = (ticker) => {
   console.log(ticker)
  const performApiCall = async (s) => {
    console.log(s)
    try {
      const response = await searchForEarningsData(s.toUpperCase());
      console.log(response)
      
      const message = this.createChatBotMessage(`The latest actual earnings of ${company_name} (${ticker.toUpperCase()}) is $${Number(response.reportedEPS).toFixed(2)}`)
      this.addMessageToState(message);
      
    } catch (err) {
      console.error(err.message);
    }
  };
  let tick = ticker.replace("$", '')
  performApiCall(tick)
  
 };

 earnings = () => {
  const message = this.createChatBotMessage("The latest actual earnings of AAPL is $1.20")
  this.addMessageToState(message);
 };
 stonkLearnMore = () => {
  const message = this.createChatBotMessage("Learn more here: https://www.northwesternmutual.com/stocks/")
  
  this.addMessageToState(message);
 };
 bye = () => {
  const message = this.createChatBotMessage("Thank you for chatting! Do you have any more questions?", {widget : "options"})
  this.addMessageToState(message);
 };
 weeklyStats = () => {
  const message = this.createChatBotMessage("AAPL is up $8.38 (5.51%) this week")
  this.addMessageToState(message);
 };
 handleStockFinder = () => {
     const message = this.createChatBotMessage("What stock are you interested in today?")
     this.addMessageToState(message);
 };






   addMessageToState = (message) => {
    this.setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, message]
    }))
   }
 }
 
 export default ActionProvider;