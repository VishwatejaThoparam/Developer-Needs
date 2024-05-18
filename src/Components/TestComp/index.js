// // import React, { useEffect, useRef } from 'react';
// // import anime from 'animejs';
// // import './index.css'; // Import your CSS file

// // const WaveAnimation = () => {
// //   const wave1 = "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z";
// //   const wave2 = "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z";
// //   const wave3 = "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z";
// //   const wave4 = "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z";


// //   const animationRef = useRef(null);

// //   useEffect(() => {
// //     animationRef.current = anime({
// //       targets: '.wave-top > path',
// //       easing: 'linear',
// //       duration: 7500,
// //       loop: true,
// //       d: [
// //         { value: [wave1, wave2] },
// //         { value: wave3 },
// //         { value: wave4 },
// //         { value: wave1 },
// //       ],
// //     });

// //     return () => animationRef.current.pause(); // Clean up animation on unmount
// //   }, []);

// //   return (
// //     <div className="wave-container">
// //       <svg className="wave-top" width="100" viewBox="0 0 1200 250">
// //         <path fill-rule="evenodd" clip-rule="evenodd" d={wave1} fill="#0099FF" />
// //       </svg>
// //     </div>
// //   );
// // };

// // export default WaveAnimation;


// import React from "react";
// import "./index.css";

// const CardComponent = () => {
//   return (
//     <div className="parent">
//       <div className="card">
//         <div className="logo">
//           <div className="circle circle1"></div>
//           <div className="circle circle2"></div>
//           <div className="circle circle3"></div>
//           <div className="circle circle4"></div>
//           <div className="circle circle5">
//             <svg viewBox="0 0 24 24" className="svg">
//               <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-5h-1V9h2v2h2V9h2v2h-2v1.5h2V15h-2v2h-2v-2h-1zm-1-11H8V5h2V3.5H8V2h3v4zm6 11v2h-1v1.5h-2V17h-1v-1.5h-2V15h3v2h1v-2h3zm1-11h-3V2h1.5V0H15v3.5h2v2zM6 18.5v-5h-2v-2h5v2h-2v5H6zm0-11H4V4h3V3H4V1h3v6H6v-1zm12 5v1h-2V9h3v5h-1zm1 4h-1v-1h1v1zm-1-7h-1v-1h1v1z"/>
//             </svg>
//           </div>
//         </div>
//         <div className="glass"></div>
//         <div className="content">
//           <h2 className="title">Java Full Stack Developer</h2>
//           <p className="text">This is a sample card with animated circles and social media buttons.</p>
//           <div class="view-more">
//                     <button class="view-more-button">View more</button>
//                     <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
//                 </div>
//         </div>
        
        
        
//       </div>
//     </div>
//   );
// };

// export default CardComponent;

