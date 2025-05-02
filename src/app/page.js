"use client"
import { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user message to the chat
    setMessages((prevMessages) => [...prevMessages, { text: userInput, sender: 'user' }]);

    try {
      // Send the message to the backend and get the bot response
      const response = await axios.post('https://chatbot-backend-blush.vercel.app/api/chat', {
        message: userInput,
      });

      // Add bot response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.response, sender: 'bot' },
      ]);

      // Clear the input field
      setUserInput('');
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Sorry, something went wrong!', sender: 'bot' },
      ]);
    }
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
            <strong>{message.sender === 'user' ? 'You' : 'Bot'}: </strong>
            <span>{message.text}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message..."
          style={{ width: '80%', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px', width: '15%' }}>Send</button>
      </form>
    </div>
  );
}
