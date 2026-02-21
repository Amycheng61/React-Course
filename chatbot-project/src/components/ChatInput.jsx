import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./chatInput.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    if (inputText.trim() === "") {
      return;
    }
    const response = Chatbot.getResponse(inputText);
    console.log(response);
    setChatMessages([
      ...chatMessages,
      { message: inputText, sender: "user", id: crypto.randomUUID() },
      { message: response, sender: "robot", id: crypto.randomUUID() },
    ]);
    setInputText("");
  }

  function keyUpHandler(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <div className="text-box-container">
      <input
        placeholder="Send a message to chatbot"
        onChange={saveInputText}
        onKeyUp={keyUpHandler}
        value={inputText}
        className="text-box"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

export default ChatInput;
