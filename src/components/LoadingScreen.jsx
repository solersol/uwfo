


// import React, { useEffect, useRef } from 'react';
// import { loadingImage } from '../assets/images'; // Update with your loading image path

// const LoadingScreen = () => {
//   const imageRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const image = imageRef.current;
//     const containerWidth = containerRef.current.offsetWidth;
//     let position = 0;
//     let direction = 1; // 1 for right, -1 for left

//     const slide = () => {
//       // Adjust speed here by changing the increment value
//       position += 2 * direction;

//       // Reverse direction when reaching the container's edges
//       if (position >= containerWidth - image.offsetWidth || position <= 0) {
//         direction *= -1;
//       }

//       image.style.transform = `translateX(${position}px)`;
//       requestAnimationFrame(slide);
//     };

//     requestAnimationFrame(slide);

//     return () => cancelAnimationFrame(slide);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 flex items-center justify-center bg-[#000000] z-50"
//     >
//       <img
//         ref={imageRef}
//         src={loadingImage}
//         alt="Loading"
//         className="w-64 h-44 absolute"
//         style={{ transform: 'translateX(0)' }} // Initial position
//       />
//     </div>
//   );
// };

// export default LoadingScreen;



// import React, { useEffect, useRef } from 'react';
// import { loadingImage, loadingBg } from '../assets/images'; // Add the background image

// const LoadingScreen = () => {
//   const imageRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const image = imageRef.current;
//     const containerWidth = containerRef.current.offsetWidth;
//     let position = 0;
//     let direction = 1; // 1 for right, -1 for left

//     const slide = () => {
//       // Adjust speed here by changing the increment value
//       position += 2 * direction;

//       // Reverse direction when reaching the container's edges
//       if (position >= containerWidth - image.offsetWidth || position <= 0) {
//         direction *= -1;
//       }

//       image.style.transform = `translateX(${position}px)`;
//       requestAnimationFrame(slide);
//     };

//     requestAnimationFrame(slide);

//     return () => cancelAnimationFrame(slide);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 flex items-center justify-center bg-cover bg-center z-50"
//       style={{ loadingBg: `url(${loadingBg})` }} // Background image added here
//     >
//       <img
//         ref={imageRef}
//         src={loadingImage}
//         alt="Loading"
//         className="w-64 h-44 absolute"
//         style={{ transform: 'translateX(0)' }} // Initial position
//       />
//     </div>
//   );
// };

// export default LoadingScreen;

import React, { useEffect, useRef } from 'react';
import { loadingImage, loadingBg } from '../assets/images'; // Add the background image

const LoadingScreen = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const containerWidth = containerRef.current.offsetWidth;
    let position = 0;
    let direction = 1; // 1 for right, -1 for left

    const slide = () => {
      // Adjust speed here by changing the increment value
      position += 2 * direction;

      // Reverse direction when reaching the container's edges
      if (position >= containerWidth - image.offsetWidth || position <= 0) {
        direction *= -1;
      }

      image.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(slide);
    };

    requestAnimationFrame(slide);

    return () => cancelAnimationFrame(slide);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center z-50"
      style={{ backgroundImage: `url(${loadingBg})` }} // Correct property for background image
    >
      <img
        ref={imageRef}
        src={loadingImage}
        alt="Loading"
        className="w-64 h-44 absolute"
        style={{ transform: 'translateX(0)' }} // Initial position
      />
    </div>
  );
};

export default LoadingScreen;

