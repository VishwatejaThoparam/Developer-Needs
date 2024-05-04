// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './index.css';

// const NavbarHeader = () => {
//   const [programmingLangOpen, setProgrammingLangOpen] = useState(false);
//   const [frameworkOpen, setFrameworkOpen] = useState(false);
//   const [animationLibOpen, setAnimationLibOpen] = useState(false);
//   const [versionControlOpen, setVersionControlOpen] = useState(false);
//   const [devToolsOpen, setDevToolsOpen] = useState(false);
//   const [aboutUsOpen, setAboutUsOpen] = useState(false);

//   const toggleProgrammingLangDropdown = () => {
//     setProgrammingLangOpen(!programmingLangOpen);
//   };

//   const toggleFrameworkDropdown = () => {
//     setFrameworkOpen(!frameworkOpen);
//   };

//   const toggleAnimationLibDropdown = () => {
//     setAnimationLibOpen(!animationLibOpen);
//   };

//   const toggleVersionControlDropdown = () => {
//     setVersionControlOpen(!versionControlOpen);
//   };

//   const toggleDevToolsDropdown = () => {
//     setDevToolsOpen(!devToolsOpen);
//   };

//   const toggleAboutUsDropdown = () => {
//     setAboutUsOpen(!aboutUsOpen);
//   };

//   const closeAllDropdowns = () => {
//     setProgrammingLangOpen(false);
//     setFrameworkOpen(false);
//     setAnimationLibOpen(false);
//     setVersionControlOpen(false);
//     setDevToolsOpen(false);
//     setAboutUsOpen(false);
//   };

//   return (
//     <nav className="navbar">
//        <div className="navbar-menu">
//        <h4 className="navbar-brand">Developer Needs</h4>
//       <Link className="nav-link active" aria-current="page" to={"/"} style={{ textDecoration: "none", color: "white", marginRight: "100px" }}>Home</Link>
     
//         <div className="navbar-item" onMouseEnter={toggleProgrammingLangDropdown} onMouseLeave={closeAllDropdowns}>
//           Programming Language
//           {programmingLangOpen && (
//             <div className="dropdown_PL" onMouseEnter={() => setProgrammingLangOpen(true)} onMouseLeave={() => setProgrammingLangOpen(false)}>
//               <div className="dropdown-item">Html</div>
//               <div className="dropdown-item">css</div>
//               <div className="dropdown-item">javaScript</div>
//             </div>
//           )}
//         </div>

//         <div className="navbar-item" onMouseEnter={toggleFrameworkDropdown} onMouseLeave={closeAllDropdowns}>
//           Framework and Libraries
//           {frameworkOpen && (
//             <div className="dropdown_FL" onMouseEnter={() => setFrameworkOpen(true)} onMouseLeave={() => setFrameworkOpen(false)}>
//               <div className="dropdown-item">React</div>
//               <div className="dropdown-item">vue.js</div>
//               <div className="dropdown-item">Angular</div>
//             </div>
//           )}
//         </div>

//         <div className="navbar-item" onMouseEnter={toggleAnimationLibDropdown} onMouseLeave={closeAllDropdowns}>
//           Animation Libraries
//           {animationLibOpen && (
//             <div className="dropdown_AL" onMouseEnter={() => setAnimationLibOpen(true)} onMouseLeave={() => setAnimationLibOpen(false)}>
//               <div className="dropdown-item">Gsap</div>
//               <div className="dropdown-item">Animate.css</div>
//               <div className="dropdown-item">three.js</div>
//             </div>
//           )}
//         </div>

//         <div className="navbar-item" onMouseEnter={toggleVersionControlDropdown} onMouseLeave={closeAllDropdowns}>
//           Version Control
//           {versionControlOpen && (
//             <div className="dropdown_VC" onMouseEnter={() => setVersionControlOpen(true)} onMouseLeave={() => setVersionControlOpen(false)}>
//               <div className="dropdown-item">Git</div>
//               <div className="dropdown-item">Git lab</div>
//             </div>
//           )}
//         </div>

//         <div className="navbar-item" onMouseEnter={toggleDevToolsDropdown} onMouseLeave={closeAllDropdowns}>
//           Development Tools
//           {devToolsOpen && (
//             <div className="dropdown_DT" onMouseEnter={() => setDevToolsOpen(true)} onMouseLeave={() => setDevToolsOpen(false)}>
//               <div className="dropdown-item">IntelliJ IDEA</div>
//               <div className="dropdown-item">Visual Studio Code</div>
//               <div className="dropdown-item">Eclipse</div>
//             </div>
//           )}
//         </div>
    
//         <Link to={"/host"} style={{textDecoration: "none", color: "white" }}>Web Hosting</Link>
//         <Link to={"/about"} style={{ marginLeft: "150px", textDecoration: "none", color: "white" }}>About Us</Link>
//       </div>
//     </nav>
//   );
// };

// export default NavbarHeader;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaLaptopHouse } from "react-icons/fa";
import "./index.css"

const NavbarHeader = ()=>{
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
      
        <Navbar.Brand href="/"> <FaLaptopHouse  style={{height:"50px" ,width:"50px"}} /> Developer Needs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="/" style={{marginRight:"10px"}}>Home</Nav.Link>

            <NavDropdown title="Programing Language" id="basic-nav-dropdown" style={{ backgroundColor: 'transparent'}}>
              <NavDropdown.Item href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</NavDropdown.Item>
              <NavDropdown.Item href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</NavDropdown.Item>
              <NavDropdown.Item href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.php.net/manual/en/">PHP</NavDropdown.Item>
              <NavDropdown.Item href="https://docs.oracle.com/javase/tutorial/">JAVA</NavDropdown.Item>
              <NavDropdown.Item href="https://docs.python.org/3/tutorial/index.html">Python</NavDropdown.Item>
              <NavDropdown.Item href="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/">C#</NavDropdown.Item>
              
              
            </NavDropdown>

            <NavDropdown title="Frameworks and Libraries" id="basic-nav-dropdown" style={{backgroundColor: 'transparent', marginLeft:"0px"}}>
              <NavDropdown.Item href="https://react.dev/learn">React</NavDropdown.Item>
              <NavDropdown.Item href="https://vuejs.org/guide/introduction.html">Vue.js</NavDropdown.Item>
              <NavDropdown.Item href="https://angular.io/docs">Angular</NavDropdown.Item>
              <NavDropdown.Item href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">bootstrap</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Animation Libraries" id="basic-nav-dropdown" style={{backgroundColor: 'transparent'}}>
              <NavDropdown.Item href="https://gsap.com/docs/v3/">Gsap</NavDropdown.Item>
              <NavDropdown.Item href="https://animate.style">Animate.css</NavDropdown.Item> 
              <NavDropdown.Item href="https://animejs.com/">Anime.js</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.3">three.js</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Version Controls" id="basic-nav-dropdown" style={{backgroundColor: 'transparent'}}>
              <NavDropdown.Item href="https://git-scm.com/docs">Git</NavDropdown.Item>
              <NavDropdown.Item href="https://subversion.apache.org/docs/">Subversion</NavDropdown.Item> 
            </NavDropdown>

            <NavDropdown title="Development Tools" id="basic-nav-dropdown" style={{backgroundColor: 'transparent',marginRight:"40px"}}>
            <NavDropdown.Item href="https://www.jetbrains.com/help/idea/getting-started.html">IntelliJ IDEA</NavDropdown.Item>
              <NavDropdown.Item href="https://code.visualstudio.com/docs">Visual Studio Code</NavDropdown.Item> 
              <NavDropdown.Item href="https://www.eclipse.org/">Eclipse</NavDropdown.Item>
            </NavDropdown> 

            

            <Nav.Link href="/host">Deployment</Nav.Link>
            <Nav.Link href="/about">AboutUs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;