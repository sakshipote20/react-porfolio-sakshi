// import {HERO_CONTENT} from "../constants/index"
// import profilePic from "../assets/sakshiPoteProfile.jpeg"

// const Hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//         <div className="flex flex-wrap">
//             <div className="w-full lg:w-1/2">
//             <div className="flex flex-col items-center lg:items-start">
//                 <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"> Sakshi Pote</h1>
//                 <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Software Developer</span>
//                 <p className="my-2 max-w-xl  py-6 font-light">{HERO_CONTENT}</p>
//             </div>

//             </div>

//             <div className="w-full lg:w-1/2 lg:p-8">
//                 <div className="flex justify-center">
//                     <img className="rounded-lg" src={profilePic} alt="Sakshi Pote"></img>
//                 </div>
//             </div>



//         </div> 

       
//     </div>
//   )
// }

// export default Hero


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { HERO_CONTENT } from "../constants/index";

// // Import multiple images for the carousel
// import profilePic1 from "../assets/sakshiPoteProfile.jpeg";
// import profilePic2 from "../assets/sakshiPote7.jpeg";
// import profilePic3 from "../assets/sakshiPote2.png";
// import profilePic4 from "../assets/sakshiPote5.jpeg";

// const images = [profilePic1, profilePic2, profilePic4, profilePic3];

// const container = (delay) => ({
//   hidden: { x: -100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: delay },
//   },
// });


// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
//   const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-wrap">
//         {/* Left Side - Text */}
//         <div className="w-full lg:w-1/2">
//           <div className="flex flex-col items-center lg:items-start">
//             <motion.h1 
//            variants={container(0.5)}
//            initial='hidden'
//            animate='visible'
//              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
//               Sakshi Pote
//             </motion.h1>
//             <motion.span
//               variants={container(1)}
//            initial='hidden'
//            animate='visible'
            
//              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
//               Software Developer
//             </motion.span>
//             <motion.p 
//               variants={container(1.5)}
//            initial='hidden'
//            animate='visible'
//             className="my-2 max-w-xl py-6 font-light">{HERO_CONTENT}</motion.p>
//           </div>
//         </div>

//         {/* Right Side - Image Carousel */}
//         <motion.div
         
        
//          className="w-full lg:w-1/2 lg:p-8 flex flex-col items-center">
//           <div className="relative w-[550px] h-[300px] overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={index}
//                 src={images[index]}
//                 alt="Sakshi Pote"
//                 className="rounded-lg w-full h-full object-cover"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.5 }}
//               />
//             </AnimatePresence>
//           </div>
          
//           {/* Carousel Controls */}
//           <div className="mt-4 flex gap-4">
//             <button onClick={prevImage} className="px-4 py-2 bg-gray-800 text-white rounded-lg">←</button>
//             <button onClick={nextImage} className="px-4 py-2 bg-gray-800 text-white rounded-lg">→</button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_CONTENT } from "../constants/index";

// Import multiple images for the carousel
import profilePic1 from "../assets/sakshiPoteProfile.jpeg";
import profilePic2 from "../assets/sakshiPote7.jpeg";
import profilePic3 from "../assets/sakshiPote2.png";
import profilePic4 from "../assets/sakshiPote5.jpeg";

const images = [profilePic1, profilePic2, profilePic4, profilePic3];

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center mr-15">
            <motion.h1 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sakshi Pote
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>
            <motion.p 
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Resume Button */}
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 mb-5 px-5 py-3 bg-gray-900 rounded-lg text-lg text-pink-300 hover:bg-gray-800 transition"
            >
              Resume
            </motion.a>
          </div>
        </div>

        {/* Right Side - Image Carousel */}
        <motion.div className="w-full lg:w-1/2 lg:p-8 flex flex-col items-center">
          <div className="relative w-[550px] h-[300px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="Sakshi Pote"
                className="rounded-lg w-full h-full object-cover"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
          
          {/* Carousel Controls */}
          <div className="mt-4 flex gap-4">
            <button onClick={prevImage} className="px-4 py-2 bg-gray-900 text-white  rounded-lg hover:bg-gray-800 ">←</button>
            <button onClick={nextImage} className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 ">→</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
