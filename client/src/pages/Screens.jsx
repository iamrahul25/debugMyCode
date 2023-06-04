import React, { useState } from "react";
import "../styles/screen.css";
// import muteBtn from "../img/microphone.png";

const Screens = () => {
  const [tags, setTags] = useState([
    "React",
    "Javascript",
    "NodeJS",
    "MongoDB",
  ]);
  return (
    <div className="screens">
      <div className="prblm-div">
        <div className="prblm">
          <h3>Problem statement:</h3>
          <input
            type="text"
            className="input-style"
            placeholder="Enter problem statement"
          />
        </div>
        <div className="prblm">
          <h3>Problem Description:</h3>
          <input
            type="text"
            className="input-style"
            placeholder="Enter problem description"
          />
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
            <input
              type="text"
              className="input-style"
              placeholder="Enter problem statement"
            />
          </div>
          <div className="prblm-main">
            <h3>Problem Description:</h3>
            <input
              type="text"
              className="input-style"
              placeholder="Enter problem description"
            />
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
          <div className="chat-msg">
            <span className="chat-name"></span>
            <p className="chat-text">
              Lorem ipsum dolor sit amet consectetur adipisicing voluptatu.
            </p>
          </div>
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type here..."
            className="input-style "
          ></input>
          <button className="btn">send</button>
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
