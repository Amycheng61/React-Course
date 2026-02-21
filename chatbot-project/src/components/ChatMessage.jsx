import robotImg from "../assets/robot.png";
import userImg from "../assets/user.png";
import "./chatMessage.css";

export function ChatMessage({ message, sender }) {
  //const {message,sender} = props;

  return (
    <div className={sender === "robot" ? "robot-message" : "user-message"}>
      {sender === "robot" && <img src={robotImg} className="message-avatar" />}
      <div className="message-content">{message}</div>
      {sender === "user" && <img src={userImg} className="message-avatar" />}
    </div>
  );
}
