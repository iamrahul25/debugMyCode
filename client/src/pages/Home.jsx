import React, { useContext, useEffect, useState } from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";

//Import Context API for Global State
import { useSocket } from "../context/SocketProvider";
import StateContext from "../context/StateContextProvider";

function Home() {

  //Importing Socket from Context API
  const socket = useSocket();
  const { tags, setTags } = useContext(StateContext);
  const [tagName, setTagName] = useState('')
  const handleTagChange = (e) => {
    e.preventDefault();
    setTagName(e.target.value);
  }
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setTags([...tags, tagName]);
      setTagName('');
    }
    console.log(e.target)
  }
  useEffect(() => {

  }, [])
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="homeContent">
          <div className="homeLeft">
            <div className="upper">
              <h4>Welcome to Debug My Code!</h4>
              <div className="upper-upper">
                <p>
                  Are you tired of staring at lines of code, desperately searching for that elusive bug? Or perhaps you're an expert programmer looking to put your skills to the test and help others overcome their coding challenges. Well, you've come to the right place!
                </p>
                <img
                  src="https://t3.ftcdn.net/jpg/00/42/09/98/240_F_42099891_6Sz9g70EoF2AQhogDZiFE9UQ2ncan1Pk.jpg"
                  alt=""
                />
              </div>
              <div className="upper-lower">
                <p>Debug My Code is a unique platform that brings together programmers from all walks of life to collaborate, troubleshoot, and conquer coding hurdles together. Inspired by the popular Omegle concept, we've taken it a step further by focusing specifically on code debugging.
                  Here, you'll find a vibrant community of passionate programmers ready to lend a helping hand. Whether you're a beginner grappling with the basics or a seasoned pro tackling complex algorithms, our platform offers the perfect environment for you to seek assistance or provide solutions.So, whether you're in need of a coding lifeline or eager to put your expertise to good use, join Debug My Code today. Let's tackle those bugs, one line at a time, and revolutionize the way we debug our code. Together, we'll make programming smoother, faster, and more enjoyable than ever before. Happy debugging! <strong>Below link helps you to understand how to use this platform.</strong>
                </p>
                  <div className="guidenceLink">
                    <a href="https://www.youtube.com/watch?v=Q6Nvc2j3iM0" target="_blank">Click here to see how can you use this website</a>
                  </div>
              </div>
            </div>
            <div className="lower">
              <h2>Warning</h2>
              <h4>
                Your Screen and aurdio is Monitored so please keep it clean{" "}
              </h4>
              <p> Debug My Code is intended for the purpose of code debugging and collaboration. It is strictly prohibited to misuse this platform for any inappropriate, offensive, or harmful activities. </p>
            </div>
          </div>

          <div className="homeRight">
            <div className="homeRight-upper">
              <h1>Add Your Problem</h1>
              <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="">Problem Statement :</label>
                <input type="text" placeholder="Enter Your Problem Statement" />
                <label htmlFor="">Problem Description :</label>
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="3"
                  placeholder="Describe your problem"
                  maxLength={300}
                ></textarea>
                <label htmlFor="">Topic tag :</label>
                <input type="text" placeholder="Enter Your Problem Topic" value={tagName} onChange={handleTagChange} onKeyDown={handleEnter} />
                <div className="tagsList">
                  {
                    tags.map((tag) => <span className="tag-name">{tag}</span>)
                  }
                </div>
                <label htmlFor="">Github Link :</label>
                <input type="text" placeholder="Enter Your Github Link" />
                <button type="submit">Submit</button>
              </form>
            </div>

            <div className="homeRight-lower">
              <h1>Contact Us</h1>
              <div className="social">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.gmail.com/">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
              <div className="footer">
                <h5>Code is poetry written with logic, refined through debugging.</h5>
                <p>© 2023 Debug My Code. All rights reserved.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
