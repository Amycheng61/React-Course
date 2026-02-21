import { useState } from "react";
import ChatMessageComponent from "./components/ChatMessageComponent";
import ChatInput from "./components/ChatInput";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "hello, what can I help you? ", sender: "robot", id: "1" },
  ]);

  return (
    <div className="app-container">
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessageComponent
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
