import React, { useState } from 'react'
import "./chat.scss"

export default function Chat() {
    const [chat,setChat]=useState(true); 
  return (
    <div className='chat'>
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
            <img src="./Myimage.jpg" alt="" />
            <span>John Doe</span>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="message">
            <img src="./Myimage.jpg" alt="" />
            <span>John Doe</span>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="message">
            <img src="./Myimage.jpg" alt="" />
            <span>John Doe</span>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="message">
            <img src="./Myimage.jpg" alt="" />
            <span>John Doe</span>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="message">
            <img src="./Myimage.jpg" alt="" />
            <span>John Doe</span>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="message">
            <img src="./Myimage.jpg" alt="" />
            <span>John Doe</span>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

    {/* Chat Box */}

     { chat && (<div className="chatBox">
        <div className="top">
            <div className="user">
                <img src="./Myimage.jpg" alt="" />
                <span>John Doe</span> 
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
        </div>
        <div className="center">
            <div className="chatMessage">
                <p>Lorem ipsum hello to you</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum hello to you</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum hello to you</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum hello to you</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum hello to you</p>
                <span>1 hour ago</span>
            </div>
        </div>
     
        <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
        </div>
      </div>
)}
    </div>
  )
}
