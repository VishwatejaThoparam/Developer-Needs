



import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import "./index.css"
import anime from 'animejs/lib/anime.es.js';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import MorphingBackground from '../ProfileComp';



const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [words, setWords] = useState(["Explore", "Create", "Conquer"]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);


    anime({
      targets: '.line-drawing-demo .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 5000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
    

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1000); 
  
      return () => clearInterval(interval);
    }, [words]);

    const showText = () => {
      setIsVisible(true);
    };


  
    useEffect(() => {
      const letters = document.querySelectorAll('.letter');
      letters.forEach((letter, index) => {
          const delay = index * 100;
          setTimeout(() => {
              letter.classList.add('animate');
          }, delay);
      });
  
      setTimeout(() => {
          letters.forEach((letter) => {
              letter.classList.remove('animate');
          });
      }, 30000);
  }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        const landingSection = document.getElementById("landing");
        const bounding = landingSection.getBoundingClientRect();
        const { top, bottom } = bounding;
  
        if (top >= 0 && bottom <= window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
  return (
    <div className='container-index'>
        <section className='first-section-index'>
           <div className="profile_section" >
                <div >
                  <div >
                  <MorphingBackground style={{alignTtems:"center"}}/>
                  </div>
                  <div className='profile-text' style={{marginTop:"50px"}}>
                  <TypingTextAnimationProfile text="I'm Thoparam Vishwateja, an adept Full Stack Java Developer, excelling in crafting dynamic frontend experiences with React." speed={50} />
                  </div>


                </div>
                <div className='first-top-index' >
                  <h5  className="animate__animated animate__zoomInDown" style={{ margin: "10px 10px" }}>
                    { "Developer".split("").map((char, index) => (
                        <span id="developer" key={index} className="black-ops-one-regular letter">{char}</span>
                      ))
                    }
                    <br className='breakrow'/>
                    {" "}
                    { "Needs".split("").map((char, index) => (
                        <span id="developer" key={index} className="black-ops-one-regular letter">{char}</span>
                      ))
                    }
                  </h5>
                            <p className="blinking-text"  style={{marginLeft:"5%",marginRight:"5%"}}>
                            {words.map((word, index) => (
                              <span key={index} className={index === currentWordIndex ? 'blink-animation' : ''}>
                                {word}
                                {index !== words.length - 1 && ' '}
                              </span>
                            ))}
                          </p>
                      
                  </div>
           </div>
           </section>
           <section >
              <div className='first-bottom-index'>
                  <h1 className="uniquifier" id='text-typing'>
                      <TypingTextAnimation text="Simplify Your Development Journey: Gather Insights, Implement Ideas, Build Your Dream Website!" speed={50}  />
                  </h1>
                  <div style={{textAlign:"center"}}> 
                      <a href="#landing" className="scroll-to-bottom" style={{ color:"wheat",}}>
                        <MdKeyboardDoubleArrowDown id='content' style={{height:"30px",width:"30px"}} />
                      </a>
                    </div>
              </div>
            </section>
           
        <section id="#backlanding" className='second-section-index'>
            <div  className={`landing-page text-center ${isVisible ? "animate" : ""}`}>
                <div id="landing" className='main-page-index' >
                      <div className='row-index' style={{marginBottom:"100px"}}>
                          <div className='col-index'>
                              <Link to="/mean" className="linkWithoutUnderline-index">
                            {isVisible && <h3 id="tag-id" className="animate__animated animate__lightSpeedInLeft ">
                              MEAN Stack Developer
                              </h3>}
                            </Link>
                          </div>
                          <div className='col-index'>
                              <Link to="/java" className="linkWithoutUnderline-index">
                            {isVisible && <h3 id="tag-id" className="animate__animated animate__zoomInDown">JAVA Full Stack Developer</h3>}
                            </Link>
                          </div>
                          <div className='col-index'>
                                <Link to="/lamp" className="linkWithoutUnderline-index">
                              {isVisible && <h3 id="tag-id" className="animate__animated animate__lightSpeedInRight">LAMP Stack Developer</h3>}
                              </Link>
                          </div>
                      </div>
                      <div className='row-index' style={{marginBottom:"100px"}}>
                          <div className="col-index" >
                                <Link to="/cshop" className="linkWithoutUnderline-index">
                                {isVisible && <h3 id="tag-id1" className="animate__animated animate__lightSpeedInLeft">C# Full Stack Developer</h3>}
                                </Link>
                          </div>
                          <div className="col-index">
                              <h2 id="center-text" className="animate__animated animate__heartBeat uniquifier" style={{ marginTop:"0px",cursor:"pointer"}} onClick={showText}>Full Stack Developer</h2>
                          </div>
                          <div className="col-index" >
                              <Link to="/mern" className="linkWithoutUnderline-index">
                              {isVisible && <h3 id="tag-id3" className="animate__animated animate__lightSpeedInRight"> MERN Stack Developer </h3>}
                              </Link>
                              </div>
                        </div>
                      <div className='row-index'>
                            <div className="col-index">
                                <Link to="/asp" className="linkWithoutUnderline-index">
                                {isVisible && <h3 id="tag-id" className="animate__animated animate__lightSpeedInLeft">ASP.NET Full Stack Developer </h3>}
                                </Link>
                            </div>
                            <div className="col-index">
                                <Link to="/php" className="linkWithoutUnderline-index">
                                {isVisible && <h3 id="tag-id" className="animate__animated animate__zoomInUp">PHP Full Stack Developer</h3>}
                                </Link>
                            </div>
                            <div className="col-index">
                                <Link to="/python" className="linkWithoutUnderline-index">
                                {isVisible && <h3 id="tag-id" className="animate__animated animate__lightSpeedInRight">PYTHON Full Stack Developer</h3>}
                                </Link>
                            </div>
                      </div>
                </div>
            </div>
        </section>
        <section className='third-section'>
          <div className='third-main'>
                  <p1>Key Features</p1>
                  <div>
                  <h1>Streamline Your Development Workflow</h1>
                  <p2>Developer Needs offers a suite of powerful tools and resources to help you become more productive, efficient, and successful in your full-stack development projects.</p2>

                  </div>
                 
                  <div className='third-cards'>
                    <div>
                              <h3>Integrated Development Environment</h3>
                              <p>Our powerful IDE provides a seamless coding experience with built-in tools and features to boost your productivity.</p>
                    </div>
                    <div>
                            <h3>Full-Stack Development Toolkit</h3>
                            <p>Access a comprehensive suite of tools and resources for building robust full-stack applications.</p>
                    </div>
                    <div>
                            <h3>Accelerated Deployment</h3>
                            <p>Streamline your deployment process with our automated CI/CD pipelines and cloud hosting solutions.</p>
                    </div>
                  </div>
          </div>
        </section>
        <footer className="footer">
      <div className="container">
        <div className="footer-inside">
          <div className="footer-left">
            <h5>About Us</h5>
            <p>As a Full Stack Developer, I have extensive experience in building responsive and interactive web applications.
             My expertise spans across both frontend and backend development, utilizing various programming languages, frameworks, and libraries.</p>
            <p> I am proficient in version control systems like Git, and I leverage development tools to streamline the development process and ensure code quality.
             Feel free to contact me for your web development needs!</p>
          </div>
          <div className="footer-right">
            <h5>Contact Us</h5>
            <ul className="list-unstyled contact-list d-flex">
              <Link to={"https://www.linkedin.com/in/thoparam-vishwateja-b92a97204/"}><FaLinkedin  fill='#0A66C2' style={{height:"50px",width:"50px"}}/> </Link>
              <Link to={"https://github.com/VishwatejaThoparam"}><FaGithub fill='#181717' style={{height:"50px",width:"50px"}}/> </Link>
              <Link to={"https://www.facebook.com/"}><FaFacebook  fill='#0866FF' style={{height:"50px",width:"50px"}}/></Link>
              <Link to={"https://www.instagram.com/"}><FaInstagram fill='#E4405F' style={{height:"50px",width:"50px"}}/></Link>
              <Link to={"mailto:example@example.com"}><FaEnvelope fill='#EA4335' style={{height:"50px",width:"50px"}}/></Link>
            </ul>
          </div>
        </div>
       
      </div>
      <div className="copyright">
        <div className="bottom-footer" style={{marginLeft:"60px"}}>
          <p>&copy; 2024 Thoparam Vishwateja. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

      
    </div>
  )
}

const TypingTextAnimation = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (isTyping) {
          if (currentIndex < text.length) {
            setDisplayText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          } else {
            setIsTyping(false);
            setTimeout(() => {
              setIsTyping(true);
              setDisplayText('');
              setCurrentIndex(0);
            }, 2000); 
          }
        }
      }, speed);
  
      return () => clearInterval(interval);
    }, [currentIndex, text, speed, isTyping]);
  
    return <span>{displayText}</span>;
  };
  const TypingTextAnimationProfile = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');
  
    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, [text, speed]);


  
    // Custom function to highlight your name
    const highlightName = (text) => {
      const name = "Thoparam Vishwateja";
      const nameIndex = text.indexOf(name);
      if (nameIndex !== -1) {
        return (
          <>
            {text.substring(0, nameIndex)}
            <span style={{ fontWeight: 'bold', color: '#76ABAE' }}>{name}</span>
            {text.substring(nameIndex + name.length)}
          </>
        );
      }
      return text;
    };
  
    return (
      <div>
        {highlightName(displayText)}
      </div>
    );
  };

export default HomePage;











// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
// import './index.css';
// import MorphingBackground from '../ProfileComp';
// import CardDetails from '../CardComp';

// const HomePage = () => {
//     const [words] = useState(["Explore", "Create", "Conquer"]);
//     const [currentWordIndex, setCurrentWordIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//         }, 1000);

//         return () => clearInterval(interval);
//     }, [words]);

//     useEffect(() => {
//         const letters = document.querySelectorAll('.letter');
//         letters.forEach((letter, index) => {
//             const delay = index * 100;
//             setTimeout(() => {
//                 letter.classList.add('animate');
//             }, delay);
//         });

//         const removeAnimation = setTimeout(() => {
//             letters.forEach((letter) => {
//                 letter.classList.remove('animate');
//             });
//         }, 30000);

//         return () => clearTimeout(removeAnimation);
//     }, []);

//     return (
//         <div className='container-index'>
//             <section className='first-section-index'>
//                 <div className="profile_section">
//                     <div>
//                         <MorphingBackground style={{ alignItems: "center" }} />
//                         <div className='profile-text' style={{ marginTop: "50px" }}>
//                             <TypingTextAnimationProfile text="I'm Thoparam Vishwateja, an adept Full Stack Java Developer, excelling in crafting dynamic frontend experiences with React." speed={50} />
//                         </div>
//                     </div>
//                     <div className='first-top-index'>
//                         <h5 className="animate__animated animate__zoomInDown" style={{ margin: "10px 10px" }}>
//                             {"Developer".split("").map((char, index) => (
//                                 <span key={index} className="black-ops-one-regular letter">{char}</span>
//                             ))}
//                             <br className='breakrow' />
//                             {"Needs".split("").map((char, index) => (
//                                 <span key={index} className="black-ops-one-regular letter">{char}</span>
//                             ))}
//                         </h5>
//                         <p className="blinking-text" style={{ marginLeft: "5%", marginRight: "5%" }}>
//                             {words.map((word, index) => (
//                                 <span key={index} className={index === currentWordIndex ? 'blink-animation' : ''}>
//                                     {word}
//                                     {index !== words.length - 1 && ' '}
//                                 </span>
//                             ))}
//                         </p>
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <div className='first-bottom-index'>
//                     <h1 className="uniquifier" id='text-typing'>
//                         <TypingTextAnimation text="Simplify Your Development Journey: Gather Insights, Implement Ideas, Build Your Dream Website!" speed={50} />
//                     </h1>
//                 </div>
//             </section>
//             <section className='section-3'>
//                 <img src='https://res.cloudinary.com/dcneemn9t/image/upload/v1715951091/homeimage_atyfln.png' alt='img' height="50%" width="50%" />
//                 <div className='container'>
//                     <div className='card-1'>
//                         <CardDetails name='MongoDB, Express.js, Angular, Node.js' role='MEAN Stack Developer' text="aljskndlcad" link="/mean" />
//                         <CardDetails name='JAVA, React, Angular, Springboot, etc..' role='JAVA Full Stack Developer' text="aljskndlcad" link="/java" />
//                         <CardDetails name='PHP, HTML, CSS, JavaScript, Vue.js' role='LAMP Stack Developer' text="aljskndlcad" link="/lamp" />
//                     </div>
//                     <div className='card-2'>
//                         <CardDetails name='PYTHON' role='PYTHON Full Stack Developer' text="aljskndlcad" link="/python" />
//                         <CardDetails name='#' role='Full Stack Developer' />
//                         <CardDetails name='PHP, HTML, CSS, JavaScript, React or Angular' role='PHP Stack Developer' text="aljskndlcad" link="/php" />
//                     </div>
//                     <div className='card-3'>
//                         <CardDetails name='C#, Blazor, Angular, React, ASP.NET Core' role='C# Full Stack Developer' text="aljskndlcad" link="/Cshop" />
//                         <CardDetails name='MongoDB, Express.js, React, Node.js' role='MERN Stack Developer' text="aljskndlcad" link="/mern" />
//                         <CardDetails name='ASP.NET Core, Blazor, Angular, React, C#' role='ASP.NET Stack Developer' text="aljskndlcad" link="/asp" />
//                     </div>
//                 </div>
//             </section>
//             <footer className="footer">
//                 <div className="container">
//                     <div className="footer-inside">
//                         <div className="footer-left">
//                             <h5>About Us</h5>
//                             <p>As a Full Stack Developer, I have extensive experience in building responsive and interactive web applications.
//                                 My expertise spans across both frontend and backend development, utilizing various programming languages, frameworks, and libraries.</p>
//                             <p>I am proficient in version control systems like Git, and I leverage development tools to streamline the development process and ensure code quality.
//                                 Feel free to contact me for your web development needs!</p>
//                         </div>
//                         <div className="footer-right">
//                             <h5>Contact Us</h5>
//                             <ul className="list-unstyled contact-list d-flex">
//                                 <Link to={"https://www.linkedin.com/in/thoparam-vishwateja-b92a97204/"}><FaLinkedin fill='#0A66C2' style={{ height: "50px", width: "50px" }} /> </Link>
//                                 <Link to={"https://github.com/VishwatejaThoparam"}><FaGithub fill='#181717' style={{ height: "50px", width: "50px" }} /> </Link>
//                                 <Link to={"https://www.facebook.com/"}><FaFacebook fill='#0866FF' style={{ height: "50px", width: "50px" }} /></Link>
//                                 <Link to={"https://www.instagram.com/"}><FaInstagram fill='#E4405F' style={{ height: "50px", width: "50px" }} /></Link>
//                                 <Link to={"mailto:example@example.com"}><FaEnvelope fill='#EA4335' style={{ height: "50px", width: "50px" }} /></Link>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="copyright">
//                     <div className="bottom-footer" style={{ marginLeft: "60px" }}>
//                         <p>&copy; 2024 Thoparam Vishwateja. All Rights Reserved.</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// const TypingTextAnimation = ({ text, speed }) => {
//     const [displayText, setDisplayText] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isTyping, setIsTyping] = useState(true);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (isTyping) {
//                 if (currentIndex < text.length) {
//                     setDisplayText(prevText => prevText + text[currentIndex]);
//                     setCurrentIndex(prevIndex => prevIndex + 1);
//                 } else {
//                     setIsTyping(false);
//                     setTimeout(() => {
//                         setIsTyping(true);
//                         setDisplayText('');
//                         setCurrentIndex(0);
//                     }, 2000);
//                 }
//             }
//         }, speed);

//         return () => clearInterval(interval);
//     }, [currentIndex, text, speed, isTyping]);

//     return <span>{displayText}</span>;
// };

// const TypingTextAnimationProfile = ({ text, speed }) => {
//     const [displayText, setDisplayText] = useState('');

//     useEffect(() => {
//         let currentIndex = 0;
//         const interval = setInterval(() => {
//             if (currentIndex <= text.length) {
//                 setDisplayText(text.slice(0, currentIndex));
//                 currentIndex++;
//             } else {
//                 clearInterval(interval);
//             }
//         }, speed);
//         return () => clearInterval(interval);
//     }, [text, speed]);

//     const highlightName = (text) => {
//         const name = "Thoparam Vishwateja";
//         const nameIndex = text.indexOf(name);
//         if (nameIndex !== -1) {
//             return (
//                 <>
//                     {text.substring(0, nameIndex)}
//                     <span style={{ fontWeight: 'bold', color: '#76ABAE' }}>{name}</span>
//                     {text.substring(nameIndex + name.length)}
//                 </>
//             );
//         }
//         return text;
//     };

//     return (
//         <div>
//             {highlightName(displayText)}
//         </div>
//     );
// };

// export default HomePage;







