import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faScroll, faUser, faCog, faLandmark, faPaperPlane, faMicrophone, faPaperclip, faImage } from "@fortawesome/free-solid-svg-icons";

const ArchaeoLearnChat = () => {
    const [messages, setMessages] = useState([
        { type: "ai", content: "Welcome to ArchaeoLearn. I'm your AI guide to history. Ask me about any historical period, figure, or event!", time: new Date().toLocaleTimeString() }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { type: "user", content: input, time: new Date().toLocaleTimeString() };
        setMessages([...messages, userMessage]);
        setInput("");

        try {
            const response = await fetch("http://localhost:3000/query", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: input })
            });
            const data = await response.json();

            const aiMessage = { type: "ai", content: data.response, time: new Date().toLocaleTimeString() };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);
        } catch (error) {
            console.error("Error querying server:", error);
            alert("Failed to get a response from the server.");
        }
    };

    return (
        <div className="container-fluid main-container">
            <div className="row vh-100">
                {/* Sidebar */}
                <div className="col-md-3 col-lg-2 sidebar">
                    <div className="logo-container">
                        <h1>Archaeo<span>Learn</span></h1>
                    </div>
                    <div className="new-chat-btn">
                        <button className="btn"><FontAwesomeIcon icon={faPlus} /> New Chat</button>
                    </div>
                    <div className="chat-history">
                        <h6>Previous Chats</h6>
                        <ul>
                            <li><FontAwesomeIcon icon={faScroll} /> Ancient Egypt Monuments</li>
                            <li><FontAwesomeIcon icon={faScroll} /> Roman Military Tactics</li>
                            <li><FontAwesomeIcon icon={faScroll} /> Medieval Castle Architecture</li>
                            <li><FontAwesomeIcon icon={faScroll} /> The Silk Road Trade</li>
                        </ul>
                    </div>
                    <div className="user-profile">
                        <div className="avatar">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="user-info">
                            <p className="user-name">User Account</p>
                            <p className="settings"><FontAwesomeIcon icon={faCog} /> Settings</p>
                        </div>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="col-md-9 col-lg-10 chat-area">
                    <div className="chat-header">
                        <h2>ArchaeoLearn Chat</h2>
                        <p>Exploring history through intelligent conversation</p>
                    </div>

                    <div className="chat-messages" id="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.type}-message`}>
                                <div className="message-avatar">
                                    <FontAwesomeIcon icon={msg.type === "ai" ? faLandmark : faUser} />
                                </div>
                                <div className="message-bubble">
                                    <p>{msg.content}</p>
                                </div>
                                <div className="message-time">{msg.time}</div>
                            </div>
                        ))}
                    </div>

                    <div className="chat-input-container">
                        <div className="input-group">
                            <textarea
                                className="form-control"
                                placeholder="Ask about history..."
                                rows="1"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                            ></textarea>
                            <button className="btn send-btn" onClick={sendMessage}><FontAwesomeIcon icon={faPaperPlane} /></button>
                        </div>
                        <div className="input-features">
                            <span><FontAwesomeIcon icon={faMicrophone} /></span>
                            <span><FontAwesomeIcon icon={faPaperclip} /></span>
                            <span><FontAwesomeIcon icon={faImage} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchaeoLearnChat;
