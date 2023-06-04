import React from "react";
import "../styles/screen.css";

const Screens = () => {
  return (
    <div className="screens">
      <div className="prblm-div">
        <div className="prblm">
          <h3>Problem statement:</h3>
          <input type="text" className="input-style" />
        </div>
        <div className="prblm">
          <h3>Problem Description:</h3>
          <input type="text" className="input-style" />
        </div>
      </div>
      <div className="git-link-div">
        <span>Git Link : </span>
        <input type="text" className="input-style" />
      </div>

      <div className="sec-screen-div">
        <div className="sec-screen">screen secondary</div>
      </div>
      <div className="tags-div">tags</div>
      <div className="lower-div">
        <div className="main-screen-div">main screen</div>
        <div className="prblm-div-main">
          <div className="prblm">
            <h3>Problem statement:</h3>
            <input type="text" className="input-style" />
          </div>
          <div className="prblm">
            <h3>Problem Description:</h3>
            <input type="text" className="input-style" />
          </div>
        </div>
        <div className="btns-div">
          <button>mute</button>
          <button>Start</button>
          <button>Next</button>
        </div>
      </div>
      <div className="chat-section-div">chats</div>
      <div className="main-tags-div">tags</div>
      <div className="main-git-div">gitlink</div>
    </div>
  );
};

export default Screens;
