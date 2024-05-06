import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import "./index.css"

const MorphingBackground = () => {
  const svgRef = useRef(null);
  const imageRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const morphAnimation = anime({
      targets: '.polymorph',
      points: [
        { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' },
        { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
        { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
        { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
        { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
      ],
      easing: 'easeOutQuad',
      duration: 5000,
      loop: true,
      update: (anim) => {
        const currentPoints = anim.animatables[0].target.getAttribute('points');
        imageRef.current.setAttribute('points', currentPoints);
        maskRef.current.setAttribute('points', currentPoints);
      }
    });

    return () => {
      morphAnimation.pause();
    };
  }, []);

  return (
    <div className="morphing-demo">
      <svg ref={svgRef} viewBox="0 0 140 140">
        <mask id="image-mask" x="0" y="0" width="100%" height="100%">
          <polygon ref={maskRef} points="70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369" fill="white" />
        </mask>

        <image
          ref={imageRef}
          href="https://res.cloudinary.com/dplcbpxda/image/upload/v1714986698/image_pro_1_atot1x.png"
          x="28" y="32.5" 
          width="75%" height="75%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#image-mask)"
        />

        <polygon className="polymorph" points="70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369" fill="none" stroke="pink" />
      </svg>
    </div>
  );
};

export default MorphingBackground;
