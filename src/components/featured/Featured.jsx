import React from 'react'
import "./featured.css" 

export const Featured = () => {
  return (
   <div className="featured">
    <div className="featuredItem">
        <img src="https://justrichest.com/wp-content/uploads/Dubais-Burj-Khalifa-681x454.jpg" className='featureimage'/>
        <div className="featuredTitles">
            <h1>Dubai</h1>
            <h2>123 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img className='featureimage' src='https://s3.amazonaws.com/images.ecwid.com/images/17390461/1088514631.jpg' />
        <div className="featuredTitles">
            <h1>Saudi Arabia</h1>
            <h2>123 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        
        <img src="https://www.rd.com/wp-content/uploads/2020/01/australia-2.jpg" className='featureimage' />
        
        
        <div className="featuredTitles">
            <h1>australia</h1>
            <h2>300 properties</h2>
        </div>
    </div>
   </div>
  )
}
