(function() {
  var chatbotDiv = document.createElement('div');
  chatbotDiv.id = 'chatbot-container';
  document.body.appendChild(chatbotDiv);

  var script = document.createElement('script');
  script.src = 'https://chatbot-frontend-delta-jade.vercel.app/'; 
  script.onload = function() {
    window.initializeChatbot(chatbotDiv); 
  };
  document.body.appendChild(script);
})();
