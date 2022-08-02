class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase()

      if (lowercase.includes("hello")) {
          this.actionProvider.greet();
      }

      if (lowercase.includes("earnings")) {
        this.actionProvider.earnings();
      }
      if (lowercase.includes("learn more about stocks")) {
        this.actionProvider.stonkLearnMore();
      }
      if (lowercase.includes("week")) {
        this.actionProvider.weeklyStats();
      }
      if (lowercase.includes('trade')) {
        this.actionProvider.handleStockFinder();
      }
      if (lowercase.includes('apple') || lowercase.includes("APPL")) {
        this.actionProvider.stonkResponse();
      }
      if (lowercase.includes("bye")) {
        this.actionProvider.bye();
    }
    }
  }
  
  export default MessageParser;