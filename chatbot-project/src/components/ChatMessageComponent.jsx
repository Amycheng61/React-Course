import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./chatMessageComponent.css";

function ChatMessageComponent({ chatMessages, setChatMessages }) {
  const chatMessagesref = useRef(null);
  useEffect(() => {
    const chatMessagesContainer = chatMessagesref.current;
    if (chatMessagesContainer) {
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesref}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessageComponent;
