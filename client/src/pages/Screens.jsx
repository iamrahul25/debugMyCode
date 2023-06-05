import React, { useContext, useState } from "react";
import "../styles/screen.css";
import StateContext from "../context/StateContextProvider";
// import muteBtn from "../img/microphone.png";

const Screens = () => {

  const [inputText, setInputText] = useState("");
  const [messge, setMessge] = useState([]);

  const { tags, setTags } = useContext(StateContext)

  const handleMessageSend = (e) => {
    if(e){
      e.preventDefault();
    }
    
    setMessge([...messge, inputText]);
    setInputText("");
  };

  return (
    <div className="screens">
      <div className="prblm-div">
        <div className="prblm">
          <h3>Problem statement:</h3>
          <span className="input-style">sjkndsnjdnsnda</span>
          {/* <input
            type="text"
            className="input-style"
            placeholder="Enter problem statement"
          /> */}
        </div>
        <div className="prblm">
          <h3>Problem Description:</h3>
          <span className="input-style">sjkndsnjdnsnda</span>
          {/* <input
            type="text"
            className="input-style"
            placeholder="Enter problem description"
          /> */}
        </div>
      </div>
      <div className="git-link-div">
        <span>Github Link : </span>
        <input
          type="text"
          className="input-style"
          placeholder="Enter github link..."
        />
      </div>

      <div className="sec-screen-div">
        <div className="sec-screen">screen secondary</div>
      </div>
      <div className="tags-div">
        <span>Main Tags : </span>
        {tags.map((tag) => (
          <span className="tag-name">{tag}</span>
        ))}
      </div>
      <div className="lower-div">
        <div className="main-screen-div">main screen</div>
        <div className="prblm-div-main">
          <div className="prblm-main">
            <h3>Problem statement:</h3>
            <span className="input-style">sjkndsnjdnsnda</span>
            {/* <input
              type="text"
              className="input-style"
              placeholder="Enter problem statement"
            /> */}
          </div>
          <div className="prblm-main">
            <h3>Problem Description:</h3>
            <span className="input-style">sjkndsnjdnsnda</span>
            {/* <input
              type="text"
              className="input-style"
              placeholder="Enter problem description"
            /> */}
          </div>
        </div>
        <div className="btns-div">
          <button>
            <i class="fa-solid fa-microphone-slash"></i>
          </button>
          <button className="btn">Start</button>
          <button className="btn">Next</button>
        </div>
      </div>

      <div className="chat-section-div">
        <div className="chat-section">

          {messge.map((msg) => (
            <div className="chat-msg">
              <p className="chat-text">{msg}</p>
            </div>
          ))}
        </div>

        <div className="chat-input">
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}   onKeyDown={(e) => {if (e.key === "Enter") {handleMessageSend();}}} placeholder="Type here..." className="input-style "></input>
          <button onClick={handleMessageSend} className="btn">send</button>
        </div>

      </div>

      <div className="tags-div main-tags-div">
        <span>Main Tags : </span>
        {tags.map((tag) => (
          <span className="tag-name">{tag}</span>
        ))}
      </div>
      <div className="git-link-div main-git-div ">
        <span>Github Link : </span>
        <input
          type="text"
          className="input-style"
          placeholder="Enter github link..."
        />
      </div>
    </div>
  );
};

export default Screens;
