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