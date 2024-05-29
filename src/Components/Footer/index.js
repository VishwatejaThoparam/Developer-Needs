import React from 'react';
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

import './index.css';

const Footer = () => {
  return (
    <footer className="bg-footer text-footer">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p>
            Established and cultivated 'Developer Needs," a centralized platform offering tools and guidance for developers of varying expertise levels, with a particular emphasis on full-stack development; the platform's resources led to a 40% increase in developer productivity.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              
                <Link id='link' className="hover:text-gray-400" to="/">Home</Link>
             
                <Link id='link' className="hover:text-gray-400" to="/about">About</Link>
             
                <Link id='link' className="hover:text-gray-400" to="/host">Deployment</Link>

              
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Road map Links</h3>
            <ul className="space-y-2">
              
                <Link id='link' className="hover:text-gray-400" to="/java">Java</Link>
            
                <Link id='link' className="hover:text-gray-400" to="/python">Python</Link>
         
                <Link id='link' className="hover:text-gray-400" to="/php">PHP</Link>
             
                <Link id='link' className="hover:text-gray-400" to="/lamp">LAMP</Link>
           
                <Link id='link' className="hover:text-gray-400" to="/mean">MEAN</Link>
           
                <Link id='link' className="hover:text-gray-400" to="/mern">MERN</Link>
            
                <Link id='link' className="hover:text-gray-400" to="/asp">.NET</Link>
              
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <IoCall style={{ height: "20px", width: "20px" }} />
                <span> +1 (555) 123-4567</span>
              </li>
              <li>
                <MdOutlineMailOutline style={{ height: "20px", width: "20px" }} />
                <span> thoparamvishwateja
                  0000@gmail.com</span>
              </li>
              <li>
              <MdLocationOn  style={{ height: "20px", width: "20px" }}/>
                <span> Near Ashok nagar pillar no.28 ,Hyderabad</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">© 2024 Developer Needs. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
