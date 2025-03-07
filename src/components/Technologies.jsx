// import React from 'react'
// import {RiReactjsLine} from "react-icons/ri"
// import {SiMongodb} from "react-icons/si"
// import {FaNodeJs} from "react-icons/fa"
// import {SiJavascript} from "react-icons/si";
// import {SiExpress} from "react-icons/si";
// import {SiDjango} from "react-icons/si";
// import {SiMysql} from "react-icons/si"; // For SQL (MySQL)
// import {SiBootstrap} from "react-icons/si";
// import {SiTailwindcss} from "react-icons/si";
// import {SiLangchain} from "react-icons/si"; // LangChain (newly supported)
// import {SiPytorch} from "react-icons/si";
// import {SiCss3} from "react-icons/si";  
// import {SiHtml5} from "react-icons/si";  
// import {SiPython} from "react-icons/si";  
// import {SiCplusplus} from "react-icons/si";  


// import { motion } from "framer-motion";

// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });



// const Technologies = () => {
//   return (
//     <div className='border-b border-neutral-800 pb-24'>
//     <h2 className='my-20 text-center text-4xl'>
//         Technologies
//     </h2>
//     <div className='flex flex-wrap justify-center items-center gap-4'>
//         <div className='rounded-2xl  border-4 border-neutral-800 p-4'>
//             <SiMongodb className='text-7xl text-green-500'/>
//         </div>
//         <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//             <SiExpress className='text-7xl text-gray-400'/>
//         </div>
//         <div className='rounded-2xl  border-4 border-neutral-800 p-4'>
//             <RiReactjsLine className='text-7xl text-cyan-400'/>
//         </div>
//         <div className='rounded-2xl  border-4 border-neutral-800 p-4'>
//             <FaNodeJs className='text-7xl text-green-500'/>
//         </div>
//         <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//             <SiJavascript className='text-7xl text-yellow-400'/>
//         </div>
//         <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//             <SiDjango className='text-7xl text-green-600'/>
//         </div>
//         <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//         <SiMysql className='text-7xl text-blue-500'/>
//     </div>
//     <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//         <SiBootstrap className='text-7xl text-purple-600'/>
//     </div>
//     <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//         <SiTailwindcss className='text-7xl text-cyan-400'/>
//     </div>
//     <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//         <SiLangchain className='text-7xl text-yellow-400'/>
//     </div>
//     <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//         <SiPytorch className='text-7xl text-orange-500'/>
//     </div>
//     <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//     <SiCss3 className='text-7xl text-blue-500'/>
// </div>
// <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//     <SiHtml5 className='text-7xl text-orange-600'/>
// </div>
// <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//     <SiPython className='text-7xl text-yellow-400'/>
// </div>
// <div className='rounded-2xl border-4 border-neutral-800 p-4'>
//     <SiCplusplus className='text-7xl text-blue-600'/>
// </div>


//     </div>
      
//     </div>
//   )
// }

// export default Technologies


import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiJavascript, SiDjango, SiMysql, SiBootstrap, SiTailwindcss, SiLangchain, SiPytorch, SiCss3, SiHtml5, SiPython, SiCplusplus } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const icons = [
    { component: SiMongodb, color: "text-green-500", duration: 2 },
    { component: SiExpress, color: "text-gray-400", duration: 2.2 },
    { component: RiReactjsLine, color: "text-cyan-400", duration: 2.4 },
    { component: FaNodeJs, color: "text-green-500", duration: 2.6 },
    { component: SiJavascript, color: "text-yellow-400", duration: 2.8 },
    { component: SiDjango, color: "text-green-600", duration: 3 },
    { component: SiMysql, color: "text-blue-500", duration: 3.2 },
    { component: SiBootstrap, color: "text-purple-600", duration: 3.4 },
    { component: SiTailwindcss, color: "text-cyan-400", duration: 3.6 },
    { component: SiLangchain, color: "text-yellow-400", duration: 3.8 },
    { component: SiPytorch, color: "text-orange-500", duration: 4 },
    { component: SiCss3, color: "text-blue-500", duration: 4.2 },
    { component: SiHtml5, color: "text-orange-600", duration: 4.4 },
    { component: SiPython, color: "text-yellow-400", duration: 4.6 },
    { component: SiCplusplus, color: "text-blue-600", duration: 4.8 },
  ];

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1}}
      className='my-20 text-center text-4xl'>Technologies
      </motion.h2>

      <motion.div 
       whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1}}
      className='flex flex-wrap justify-center items-center gap-4'>
        {icons.map(({ component: Icon, color, duration }, index) => (
          <motion.div key={index} variants={iconVariants(duration)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;

