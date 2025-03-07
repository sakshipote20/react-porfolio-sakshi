// import React from 'react'
// import aboutImg from "../assets/aboutMe1.png"
// import { ABOUT_TEXT } from '../constants'
// import {motion} from "framer-motion"

// const About = () => {
//   return (
//     <div className='border-b border-neutral-900 pb-4'>
//       <motion.h2 
//       whileInView={{opacity:1, y:0}}
//                     initial={{opacity:0, y:-100}}
//                     transition={{duration:0.5}}
      
//       className='my-20 text-center text-4xl'>About 
//       <span className='text-neutral-500'> Me
//       </span></motion.h2>

//       <div className='flex flex-wrap'>
//         <motion.div 
//         whileInView={{ opacity: 1, x: 0 }}
// initial={{ opacity: 0, x: -100 }}
// transition={{ duration: 0.5 }}

        
//         className='w-full lg:w-1/2 lg:p-8'>
//             <div className='flex items-center justify-center '>
//                 <img className='rounded-lg' src={aboutImg} alt='About Me'></img>
//             </div>
//         </motion.div>

//         <motion.div 
//            whileInView={{ opacity: 1, x: 0 }}
// initial={{ opacity: 0, x: 100 }}
// transition={{ duration: 0.5 }}
//         className='w-full lg:w-1/2'>
//                 <div className='flex justify-center lg:justify-start'>
//                     <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
//                 </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default About

import React from 'react';
import aboutImg from "../assets/aboutMe1.png";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";
import { EDUCATION } from '../constants';


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        About <span className='text-neutral-500'>Me</span>
      </motion.h2>

      <div className='flex flex-wrap'>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 lg:p-8'
        >
          <div className='flex items-center justify-center'>
            <img className='rounded-lg' src={aboutImg} alt='About Me' />
          </div>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'
        >
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>

          {/* Education Section */}
          <div className='mt-6'>
            <h3 className='text-xl font-semibold text-neutral-300 mb-4'>Education</h3>
            <div className='space-y-4'>
              {EDUCATION.map((edu, index) => (
                <div key={index} className='border-l-4 border-purple-600 pl-4'>
                  <h4 className='text-lg font-medium text-white'>{edu.program}</h4>
                  <p className='text-neutral-400'>{edu.institution}</p>
                  <p className='text-sm text-neutral-500'>CGPA: <span className='text-white font-semibold'>{edu.cgpa}</span> | Year: {edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

