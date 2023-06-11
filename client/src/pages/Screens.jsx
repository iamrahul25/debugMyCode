import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";

import UserContext from "../context/UserContext";
import "../styles/screen.css";

const Screens = () => {

	//Current User Data
	const { formData, setFormData } = useContext(UserContext);

	//My Stream
	const [myStream, setMyStream] = useState(null);

	//Other User Data
	const [otherUser, setOtherUser] = useState({
		problemStatement: "Other User Problem Statement",
		problemDescription: "Other User Problem Description",
		githubLink: "www.github.com/otheruser",
		allTags: ["c++", "java", "python"],
	})

	const [inputText, setInputText] = useState("");
	const [message, setMessge] = useState([]);

	const [allTags, setTags] = useState(['React.js', 'Node.js', 'Python']);

	const handleMessageSend = (e) => {
		e.preventDefault();
		setMessge([...message, inputText]);
		setInputText("");
	};

	//Function to start Recording
	const startRecording = async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ video:true, audio: true });
		setMyStream(stream);
	};

	//Function to stop Recording
	const stopRecording = () => {
		myStream.getTracks().forEach((track) => track.stop());
		setMyStream(null);
	};

	return (
		<div className="screens">
			<div className="prblm-div">
				<div className="prblm">
					<h3>Problem statement</h3>
					<span className="input-style">{formData.problemStatement}</span>
				</div>
				<div className="prblm">
					<h3>Problem Description</h3>
					<span className="input-style">{formData.problemDescription}</span>
				</div>
			</div>
			<div className="git-link-div">
				<span><i className="fa-brands fa-github"></i></span>
				<span className="input-style">{formData.githubLink}</span>
			</div>

			{/* Current User Screen---------------- */}
			<div className="sec-screen-div">
				{myStream && <ReactPlayer url={myStream} playing muted width="100%" height="100%" />}
			</div>

			<div className="tags-div">
				<span><i className="fa-solid fa-tag"></i></span>
				{formData.allTags.map((tag, index) => (
					<span key={index} className="tag-name">{tag}</span>
				))}
			</div>

			<div className="lower-div">
				<div className="main-screen-div">main screen</div>
				<div className="prblm-div-main">
					<div className="prblm-main">
						<h3>Problem statement</h3>
						<span className="input-style">{otherUser.problemStatement}</span>
					</div>
					<div className="prblm-main">
						<h3>Problem Description</h3>
						<span className="input-style">{otherUser.problemDescription}</span>
					</div>
				</div>
				<div className="btns-div">
					<button>
						<i className="fa-solid fa-microphone-slash"></i>
					</button>
					<button onClick={startRecording} className="btn">Start</button>
					<button onClick={stopRecording} className="btn">Stop</button>
					<button className="btn">Next</button>
				</div>
			</div>

			<div className="chat-section-div">

				<div className="chat-section">
					{message.map((msg, index) => (
						<div key={index} className="chat-msg">
							<p className="chat-text">{msg}</p>
						</div>
					))}
				</div>

				<div className="chat-input">
					<input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { handleMessageSend(); } }} placeholder="Type here..." className="input-style "></input>
					<button onClick={handleMessageSend} className="btn"><i className="fa-solid fa-paper-plane"></i></button>
				</div>

			</div>

			<div className="tags-div main-tags-div">
				<span><i className="fa-solid fa-tag"></i></span>

				{otherUser.allTags.map((tag, index) => (
					<span key={index} className="tag-name">{tag}</span>
				))}
				
			</div>
			<div className="git-link-div main-git-div ">
				<span><i className="fa-brands fa-github"></i></span>
				<span className="input-style">{otherUser.githubLink}</span>
			</div>
		</div>
	);
};

export default Screens;
