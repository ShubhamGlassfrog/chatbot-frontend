(function() {
  // Create a div element that will hold your chatbot
  var chatbotDiv = document.createElement('div');
  chatbotDiv.id = 'chatbot-container';
  document.body.appendChild(chatbotDiv);

  // Load the React chatbot app in the div
  var script = document.createElement('script');
  script.src = 'https://your-cdn-link-to-chatbot-app.com'; // Replace with the actual link to your chatbot's build file (React JS build file)
  script.onload = function() {
    window.initializeChatbot(chatbotDiv); // Call a function in your chatbot app to initialize it
  };
  document.body.appendChild(script);
})();
