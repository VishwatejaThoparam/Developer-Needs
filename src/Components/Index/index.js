import React, { useEffect, useState } from 'react';
import './index.css';
import anime from 'animejs/lib/anime.es.js';
import MorphingBackground from '../ProfileComp';
import FeaturesSection from '../Feature';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


const IndexPage = () => {

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




  return (
    <div className='index-container'>

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
                            <p className="blinking-text"  style={{marginLeft:"5%",marginRight:"5%", color:"#76ABAE"}}>
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
              </div>
            </section>


      <section className='section'>
        <div className='main'>
          <div className='left-main'>
            <h1 className='main-text'>Become a Versatile Full-Stack Developer</h1>
            <p>Explore the different paths to becoming a full-stack developer and master the key technologies in each.</p>
            <a href='#landing' >
            <button className='btn btn-secondary'>Get Started</button>
            </a>
          </div>
          <div className='right-main'>
            {/* <img src='https://res.cloudinary.com/dcneemn9t/image/upload/v1716834614/FS_image_dxxe6m.png' alt='image' /> */}
            <img id='main-img' src='https://res.cloudinary.com/dcneemn9t/image/upload/v1716837747/Fs_icon_a6ia1t.png' alt='image1'/>
          </div>
        </div>
      </section>
      <section id="landing" className='section'>
        <div className='main'>
          <div className='right'>
            <img src='https://res.cloudinary.com/dcneemn9t/image/upload/v1715937608/java_icon_n1blpd.png' alt='image0' />
          </div>
          <div className='left'>
            <h1>Java Full-Stack Development</h1>
            <p>Become a Java full-stack developer by mastering technologies like Spring, Spring Boot, Hibernate, and Angular or React.</p>
           <Link to="/java"><button className='btn btn-secondary'>Explore Java Path</button></Link>
          </div>
        </div>
      </section>
      <section className='section'>
        <div id='column-reverse' className='main'>
          <div className='left'>
            <h1>Python Full-Stack Development</h1>
            <p>Become a Python full-stack developer by mastering technologies like Django, Flask, and React or Angular.</p>
            <Link to="/python"><button className='btn btn-secondary'>Explore Python Path</button></Link>
          </div>
          <div className='right'>
            <img src='https://res.cloudinary.com/dcneemn9t/image/upload/v1716835717/python_image_ljxppn.png' alt='image2' />
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='main'>
          <div className='right'>
            <img src='https://res.cloudinary.com/dcneemn9t/image/upload/v1716835867/php_icon_b3rbd2.png' alt='image3' />
          </div>
          <div className='left'>
            <h1>PHP Full-Stack Development</h1>
            <p>Become a PHP full-stack developer by mastering technologies like Laravel, Symfony, and Vue.js or React.</p>
            <Link to="/php"><button className='btn btn-secondary'>Explore PHP Path</button></Link>
          </div>
        </div>
      </section>
      <section className='section'>
        <div  id='column-reverse' className='main'>
          <div className='left'>
            <h1>LAMP Full-Stack Development</h1>
            <p>Become a LAMP full-stack developer by mastering technologies like Linux, Apache, MySQL, and PHP.</p>
            <Link to="/lamp"><button className='btn btn-secondary'>Explore LAMP Path</button></Link>
          </div>
          <div className='right'>
            <img src='https://res.cloudinary.com/dcneemn9t/image/upload/v1716889891/lamp_icon_ynzqqz.jpg' alt='image4' />
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='main'>
          <div className='right'>
            {/* <img src='java_icon.png' alt='image' /> */}
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>.NET</title><path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z" fill='#512BD4'/></svg>
          </div>
          <div className='left'>
            <h1>.NET Full-Stack Development</h1>
            <p>Become a .NET full-stack developer by mastering technologies like ASP.NET, Entity Framework, and Angular or React.</p>
            <Link to="/asp"><button className='btn btn-secondary'>Explore .NET Path</button></Link>
          </div>
        </div>
      </section>
      <section className='section'>
        <div  id='column-reverse' className='main'>
          <div className='left'>
            <h1>MEAN Full-Stack Development</h1>
            <p>Become a MEAN full-stack developer by mastering technologies like MongoDB, Express.js, Angular, and Node.js.</p>
            <Link to="/mean" ><button className='btn btn-secondary'>Explore MEAN Path</button></Link>
          </div>
          <div className='right'>
            <img src='https://res.cloudinary.com/dcneemn9t/image/upload/v1716890451/MEAN_icon_v0kmer.png' alt='image5' />
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='main'>
          <div className='right'>
            <img src='https://res.cloudinary.com/dcneemn9t/image/upload/v1716890648/MERN_icon_f1togu.png' alt='image6' />
          </div>
          <div className='left'>
            <h1>MERN Full-Stack Development</h1>
            <p>Become a MERN full-stack developer by mastering technologies like MongoDB, Express.js, React, and Node.js.</p>
            <Link to="/mern"><button className='btn btn-secondary'>Explore MERN Path</button></Link>
          </div>
        </div>
      </section>


      <FeaturesSection/>
      <Footer/>
      


    </div>
  );
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



export default IndexPage;
