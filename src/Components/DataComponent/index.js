import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css"

const DeveloperDataDetails = (props) => {
  const listItems = props;
  const { programmingLanguage} = listItems.listItems;
  const { name, logos } = programmingLanguage;
  
  

  return (
    <div >
      <h2 className='sub-top-head-jsfd'>{name}</h2>
      <div  className='logos-jsfd'> 
        {logos.map((item) => (
          <Link to={item.link} style={{ textDecoration: "none", color: "black" }}>
            <div className='logo-inner-jsfd'>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={item.svgPath} fill={item.fill} />
              </svg>
              <div >
                <p>{item.logoname}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DeveloperDataDetails;
