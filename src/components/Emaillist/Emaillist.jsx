import React from 'react'
import "./emaillist.css"
export const Emaillist = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">
            Save time,Save money
        </h1>
        <span className="mailDesc">
        Sign  up and we'll send the best deals to you
        </span>
        <div className="mailinputContainer">
            <input type="text" placeholder='your Email'/>
             <button>Subscribe</button>
        </div>
    </div>
  )
}
