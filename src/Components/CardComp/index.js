import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CardDetails = ({name,role,link,text}) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="logo">
          <div className="circle circle1"></div>
          {/* <div className="circle circle2"></div> */}
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5">
            <svg viewBox="0 0 24 24" className="svg">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-5h-1V9h2v2h2V9h2v2h-2v1.5h2V15h-2v2h-2v-2h-1zm-1-11H8V5h2V3.5H8V2h3v4zm6 11v2h-1v1.5h-2V17h-1v-1.5h-2V15h3v2h1v-2h3zm1-11h-3V2h1.5V0H15v3.5h2v2zM6 18.5v-5h-2v-2h5v2h-2v5H6zm0-11H4V4h3V3H4V1h3v6H6v-1zm12 5v1h-2V9h3v5h-1zm1 4h-1v-1h1v1zm-1-7h-1v-1h1v1z"/>
            </svg>
          </div>
        </div>
        <div className="glass"></div>
        <div className="content">
          <h2 className="title">{role}</h2>
          <p className="text">{name}</p>
          <Link to={link} style={{textDecoration:"none"}}>
          <div class="view-more">
                    <button class="view-more-button">View more</button>
                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
              </div>
            </Link>

        </div>
        
        
        
      </div>
    </div>
  );
};

export default CardDetails;