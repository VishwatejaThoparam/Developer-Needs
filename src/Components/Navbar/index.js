import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FaLaptopHouse } from "react-icons/fa";
import "./index.css"

const NavbarHeader = ()=>{
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
      {/* <FaLaptopHouse  style={{height:"50px" ,width:"50px"}} /> */}
      <Navbar.Brand href="/" style={{color:"white"}}>
        <img src="https://res.cloudinary.com/dcneemn9t/image/upload/v1714923236/logo_DN_green_e6cqqp.png" alt="logo" style={{ height: "50px", width: "50px" }} />  Developer Needs
        </Navbar.Brand>

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

            

            <Nav.Link href="/host" style={{color:"white"}}>Deployment</Nav.Link>
            <Nav.Link href="/about" style={{color:"white"}}>AboutUs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;