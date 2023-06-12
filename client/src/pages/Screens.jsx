import React, { useContext, useEffect, useState, useCallback } from "react";
import ReactPlayer from "react-player";

import { useSocket } from "../context/SocketProvider";
import UserContext from "../context/UserContext";
import peer from "../service/peer";

import "../styles/screen.css";

let remoteUserId = null;

const Screens = () => {

	//Importing Socket from Context API 
	const socket = useSocket();

	//Current User Data
	const { formData, setFormData } = useContext(UserContext);

	//My Stream
	const [myStream, setMyStream] = useState(null); //Current User Stream
	const [remoteStream, setRemoteStream] = useState(null); //Other User Stream

	// const [remoteUserId, setRemoteUserId] = useState(null); //Socket ID of the other user

	//Other User Data
	const [otherUser, setOtherUser] = useState({
		problemStatement: "Other User Problem Statement",
		problemDescription: "Other User Problem Description",
		githubLink: "www.github.com/otheruser",
		allTags: ["c++", "java", "python"],
	});

	const [inputText, setInputText] = useState("");
	const [message, setMessge] = useState([]);

	const [allTags, setTags] = useState(['React.js', 'Node.js', 'Python']);

	const handleMessageSend = (e) => {
		e.preventDefault();
		setMessge([...message, inputText]);
		setInputText("");
	};

	//Function to start Recording Screen
	const startRecording = async () => {

		//For Screen Sharing: 
		const stream = await navigator.mediaDevices.getDisplayMedia({
			// video: {mediaSource: "screen"}, //For Screen Recording
			constraints: {
				video: true, //For Screen Recording + Camera
				audio: true, //For Screen + Audio Recording 
			},
		});

		//For Camera Sharing:
		// const stream = await navigator.mediaDevices.getUserMedia({
		// 	video: true,
		// 	audio: true,
		// });

		setMyStream(stream);
	};

	//Function to find Pair
	const handleFindPair = async() => {
		if(myStream) {
			console.log("🟢 My Stream: ", myStream);
			//Emit Event to Find Pair!
			const offer = await peer.createOffer();
			console.log("Offer-Created-Client: ", offer);
			socket.emit("find-pair-client", { offer, userData: formData });
		}
	}

	useEffect(()=>{
		handleFindPair();
	},[myStream])

	//Function to stop Recording
	// const stopRecording = () => {
	// 	myStream.getTracks().forEach((track) => track.stop());
	// 	setMyStream(null);
	// };


	const handleTakeOffer = async (data) => {
		console.log("Take-Offer-Server : Received! \n", data);

		//OtherUser Socket ID Received!
		remoteUserId = data.otherUserId
		console.log("🙋‍♂️Remote User ID: ",remoteUserId)

		//Creating Answer!
		const answer = await peer.createAnswer(data.offer);
		console.log("Answer-Created-Client: ", answer);

		console.log("🍀 My Stream: ", myStream);

		//Emitting Answer to Server!
		socket.emit("send-answer-client", { answer, otherUserId: data.otherUserId });
	}

	
	const handleTakeAnswer = async (data) => {
		console.log("Take-Answer-Server : Received! \n", data);

		//Accepting Answer! -> Setting Local Description
		await peer.setLocalDescription(data.answer);
		console.log("Local Description Set!");

		//OtherUser Socket ID Received!
		remoteUserId = data.otherUserId
		console.log("🙋‍♂️🙋‍♂️Remote User ID: ",remoteUserId)

		console.log("🔴 My Stream:  ", myStream);
		//Sending Streams!
		sendStreams();
	}

	const sendStreams = () => {
		for (const track of myStream.getTracks()) {
			peer.peer.addTrack(track, myStream);
		}
	}


	//Negotiation Needed Event Listener ---------------------------------------------❌
	const handleAcceptNego = async (data) => {
		console.log("Accept-Nego-Server : Received! \n", data);

		//Creating Answer!
		const answer = await peer.createAnswer(data.offer);
		console.log("(Negotiation) Answer-Created-Client: ", answer);

		//Emitting Answer to Server!
		socket.emit("nego-answer-client", { answer, otherUserId: data.otherUserId });
	}

	const handleNegoAnswer = async (data) => {
		console.log("Nego-Answer-Server : Received! \n", data);

		//Accepting Answer! -> Setting Local Description
		await peer.setLocalDescription(data.answer);
		console.log("(Negotiation) Local Description Set! \n", peer.peer.localDescription);

	}

	useEffect(() => {

		//Listening to the Event
		socket.on("take-offer-server", handleTakeOffer);
		socket.on("take-answer-server", handleTakeAnswer);
		socket.on("accept-nego-server", handleAcceptNego);
		socket.on("nego-answer-server", handleNegoAnswer);

		// //Cleanup
		return () => {
			socket.off("take-offer-server", handleTakeOffer);
			socket.off("take-answer-server", handleTakeAnswer);
			socket.off("accept-nego-server", handleAcceptNego);
			socket.off("nego-answer-server", handleNegoAnswer);
		};

	}, [socket, handleTakeOffer, handleTakeAnswer, handleAcceptNego, handleNegoAnswer]);


	//WebRTC - Event Listeners -> Adding Remote Stream/Track
	useEffect(() => {
		peer.peer.addEventListener("track", async (ev) => {
			const remoteStream = ev.streams;
			console.log("📹 Got Remote Stream of Other user! ", remoteStream[0]);
			setRemoteStream(remoteStream[0]);
		});
	}, []);

	//Handle Negotiation Needed Event
	const handleNegoEvent = async (data) => {
		console.log("⭐ Negotiation Needed! \n");
			const offer = await peer.createOffer();
			console.log("🟠 Other User ID: ", remoteUserId);

		if(remoteUserId) socket.emit("nego-needed-client", { offer, otherUserId: remoteUserId });
	}

	//Negotiation Needed Event Listener
	useEffect(() => {
		peer.peer.addEventListener("negotiationneeded", handleNegoEvent);
		return () => { peer.peer.removeEventListener("negotiationneeded", handleNegoEvent); }
	}, []);


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
				{remoteStream && <ReactPlayer url={remoteStream} playing muted width="100%" height="100%" />}
			</div>

			<div className="tags-div">
				<span><i className="fa-solid fa-tag"></i></span>
				{formData.allTags.map((tag, index) => (
					<span key={index} className="tag-name">{tag}</span>
				))}
			</div>

			<div className="lower-div">

				{/* Other User Screen---------------- */}
				<div className="main-screen-div">
					{myStream && <ReactPlayer url={myStream} playing muted width="100%" height="100%" />}
				</div>

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
					<button className="btn">Stop</button>
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
