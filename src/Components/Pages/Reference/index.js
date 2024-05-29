import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css'; // Import CSS file

const ReferencePage = () => {
  const navigate = useNavigate();
  // Sample video data
  const [videos, setVideos] = useState([
    { id: 1, language: "HTML", title: "HTML Crash Course", link: "https://www.youtube.com/watch?v=UB1O30fR-EE" },
    { id: 2, language: "CSS", title: "CSS Tutorial for Beginners", link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" },
    { id: 3, language: "JavaScript", title: "JavaScript ES6 Tutorial", link: "https://www.youtube.com/watch?v=nZ1DMMsyVyI" },
    { id: 4, language: "PHP", title: "PHP Tutorial for Beginners", link: "https://www.youtube.com/watch?v=OK_JCtrrv-c" },
    { id: 5, language: "Java", title: "Java Programming Tutorial for Beginners", link: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
    { id: 6, language: "Python", title: "Python Tutorial for Beginners", link: "https://www.youtube.com/watch?v=rfscVS0vtbw" },

    { id: 7, name: "React", title: "React Tutorial for Beginners", link: "https://www.youtube.com/watch?v=Ke90Tje7VS0" },
    { id: 8, name: "Vue.js", title: "Vue.js Crash Course", link: "https://www.youtube.com/watch?v=Wy9q22isx3U" },
    { id: 9, name: "Angular", title: "Angular Crash Course", link: "https://www.youtube.com/watch?v=_TLhUCjY9iA" },

    { id: 10, name: "GSAP", title: "GSAP Animation Tutorial", link: "https://youtu.be/UjuLDdnp_VM?si=4Xtc0OQJO4Mgd1R_" },
    { id: 11, name: "Animate.css", title: "Animate.css Tutorial", link: "https://www.youtube.com/watch?v=CBQGl6zokMs" },
    { id: 12, name: "three.js", title: "Three.js Tutorial for Beginners", link: "https://www.youtube.com/watch?v=6oFvqLfRnsU" },

    { id: 13, name: "Git", title: "Git Tutorial for Beginners", link: "https://www.youtube.com/watch?v=USjZcfj8yxE" },
    { id: 14, name: "Subversion", title: "Subversion (SVN) Tutorial for Beginners", link: "https://youtu.be/dlTkChwvyg4?si=OD7F7J8F90GWFJRk" },

    { id: 15, name: "IntelliJ IDEA", title: "IntelliJ IDEA Tutorial for Beginners", link: "https://www.youtube.com/watch?v=pt3uB0sd5kY" },
    { id: 16, name: "Visual Studio Code", title: "Visual Studio Code Tutorial for Beginners", link: "https://www.youtube.com/watch?v=WPqXP_kLzpo" },
    { id: 17, name: "Eclipse", title: "Eclipse IDE Tutorial for Beginners", link: "https://youtu.be/xqS31gwunp0?si=5rr-oUypfqR0z29k" },


    // Add more videos as needed
    // Add more videos as needed
  ]);

  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered videos based on search query
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBack =()=>{
    navigate(-1);
  }


  return (
    <div className="reference-page">
      <h1 className="page-title">Full Stack Development Reference Videos</h1>
      <input
        type="text"
        placeholder="Search videos..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="search-input"
      />
      <div className="video-list">
        {filteredVideos.length > 0 ? (
          filteredVideos.map(video => (
            <div key={video.id} className="video-item">
              <h2>{video.language} - {video.title}</h2>
              <p>
                <a href={video.link} target="_blank" rel="noopener noreferrer" className="watch-link">
                  Watch Video
                </a>
              </p>
            </div>
          ))
        ) : (
          <p className="no-videos">No videos found</p>
        )}
      </div>
      <Link to={"/"}  ><button id='button-Needs' onClick={handleBack} className='btn btn-secondary'> Back</button></Link>
    </div>
  );
};

export default ReferencePage;
