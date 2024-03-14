import React, { useState } from "react";
import $ from "jquery";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [moreinfomodal, setmoreinfoModal] = useState(false);
  const toggleDarkTheme = () => {
    document.body.classList.toggle("dark-theme");
  };
  const toggleMoreInfo = () => {
    setmoreinfoModal(!moreinfomodal);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      try {
       $('.mobile-welcome-box').remove();
        var userMessage = $('#messageText').val();
        // Clear the message input
        $('#messageText').val('');
        $(".media-list").append(`<li class="media"><div class="usermessage"><div class="author"><div class="name-dp-con"><b> You </b><div class="user-dp"></div></div><div class='userinput_box'>${userMessage}</div></div></div></div></li>`);
        
          $(".media-list").append(`<li class="type media"><div class="answer"><div class="bot"><div class="name-dp-con-bot"><b> A11Y Chatbot </b><div class="bot-dp"></div></div><div class='botoutput_typing'>Generating...</div></div></div></div></li>`);
        // Scroll to the bottom after appending the new list item
      const mediaList = $(".media-list")[0];
      mediaList.scrollTop = mediaList.scrollHeight;
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
        $(".type").remove();
       
        $(".media-list").append(`<li class="media"><div class="answer"><div class="bot"><div class="name-dp-con-bot"><b> A11Y Chatbot </b><div class="bot-dp"></div></div><div class='botoutput_box'>${answer}</div></div></div></div></li>`);
        mediaList.scrollTop = mediaList.scrollHeight;      
      }
       catch (error) {
        console.error(error);
      }
    }
   
  };

  return (
    <>
     <div className="navbar">
      <h1>A11Y Chatbot</h1>
      <nav>
        <div className="info" title="Information" onClick={toggleMoreInfo}></div>
        <div onClick={toggleDarkTheme} className="icon" title="Change Theme"></div>
      </nav>
    </div>
    <div className="container">
    <div className="welcome-box">
        <h2>Welcome to A11Y Chatbot</h2>
        <p>Our chatbot teaches you how to build Websites and Apps accessible to all. Let's make the digital world welcoming for all. Start your easy-to-follow journey with us today!</p>
<<<<<<< HEAD
      </div>
      <div className="inside-con">
      <div className="mobile-welcome-box">
        <h2>Welcome to A11Y Chatbot</h2>
        <p>Our chatbot teaches you how to build Websites and Apps accessible to all. Let's make the digital world welcoming for all. Start your easy-to-follow journey with us today!</p>
=======
>>>>>>> c31b3d0744771ab348923ad456c7364888a8c240
      </div>
      <div className="media-list"></div>
      <div className="chatbox">
        <form id="chatbot-form" onSubmit={handleSubmit}>
          <input
            className="input-box"
            placeholder="Message A11Y..."
            id="messageText"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" title="Send Message" id="chatbot-form-btn">
            <div className="send"></div>
          </button>
        </form>
      </div>
    </div>
    </div>
    {moreinfomodal && (
            <div className="modal">
              <div className="overlay">
                <div className="popup_con">
                  <div className="popup_top">
                  <div className="popup_heading">More Info</div>
                  <button className="close" title="close" onClick={toggleMoreInfo}></button>
                  </div>
                  <div className="info_content_con">
<<<<<<< HEAD
                  Empowering accessibility: Our chat bot is designed to provide quick and accurate answers to WCAG-related questions, promoting inclusive and user-friendly digital experiences." Navigating WCAG with ease: Utilize my chat bot for instant guidance on Web Content Accessibility Guidelines, ensuring your digital content meets the highest standards of accessibility." Your WCAG companion: With Our chat bot, access concise insights and solutions to make your online presence inclusive, aligning with WCAG principles for a more accessible web</div>
=======
                  Empowering accessibility: Our chat bot is designed to provide quick and accurate answers to WCAG-related questions, promoting inclusive and user-friendly digital experiences."

Navigating WCAG with ease: Utilize my chat bot for instant guidance on Web Content Accessibility Guidelines, ensuring your digital content meets the highest standards of accessibility."

Your WCAG companion: With Our chat bot, access concise insights and solutions to make your online presence inclusive, aligning with WCAG principles for a more accessible web
                  </div>
>>>>>>> c31b3d0744771ab348923ad456c7364888a8c240
                  
                </div>
              </div>
            </div>
          )}
    </>
  );
};

export default Chatbot;
