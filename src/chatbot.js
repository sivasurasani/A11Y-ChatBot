import React, { useState } from "react";
import $ from "jquery";

const Chatbot = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim() !== "") {
      try {
        $(".welcome-box").remove();
        var userMessage = $('#messageText').val();
        $(".media-list").append('<li class="media"><div class="usermessage"><div class="author">' +"<b> You </b><div class='userinput_box'>"+userMessage+"</div></div></div></div></li>");

        const data = { 
          input_text: userMessage,
          chat_id: "de305d54-75b4-431b-adb2-eb6b9e546014"
        };

        const response = await fetch("https://api.botsonic.ai/v1/botsonic/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "token": "25f9a329-2f2a-43a8-a5b9-45cddb7d5589"
          },
          body: JSON.stringify(data)
        });

        const responseData = await response.json();
        const answer = responseData.answer;

          $(".media-list").append('<li class="media"><div class="answer"><div class="bot">' +"<b> A11Y Chatbot </b><div class='botoutput_box'>"+  answer + '</div></div></div></div></li>');

        // Clear the message input
        $('#messageText').val('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="container">
      <div className="welcome-box">
        <h2>Welcome to A11Y Chatbot</h2>
        <p>Real-time communication made simple and accessible</p>
      </div>
      <div className="media-list"></div>
      <div className="chatbox">
        <form id="chatbot-form" onSubmit={handleSubmit}>
          <input
            className="input-box"
            placeholder="Chat with me..."
            id="messageText"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" id="chatbot-form-btn">
            <div className="send"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
