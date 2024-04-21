import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  console.log(text);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amat</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      {/* center */}
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              quam facilis alias placeat exercitationem magni mollitia
              voluptatibus sapiente sint, repellat, qui officia incidunt ratione
              perferendis consequuntur commodi beatae nemo esse!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://img.vn/uploads/thuvien/img-renderacc-aeon-1-jpeg-20230926175923hJd6oSpnqQ.jpeg" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              quam facilis alias placeat exercitationem magni mollitia
              voluptatibus sapiente sint, repellat, qui officia incidunt ratione
              perferendis consequuntur commodi beatae nemo esse!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              quam facilis alias placeat exercitationem magni mollitia
              voluptatibus sapiente sint, repellat, qui officia incidunt ratione
              perferendis consequuntur commodi beatae nemo esse!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              quam facilis alias placeat exercitationem magni mollitia
              voluptatibus sapiente sint, repellat, qui officia incidunt ratione
              perferendis consequuntur commodi beatae nemo esse!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      {/* center */}
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(!open)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
