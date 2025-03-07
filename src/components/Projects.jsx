// import React from 'react'
// import { PROJECTS } from '../constants'
// import {motion} from "framer-motion"

// const Projects = () => {
//   return (
//     <div className='border-b border-neutral-900 pb-4'>
//     <motion.h2 
//      whileInView={{opacity:1, y:0}}
//                     initial={{opacity:0, y:-100}}
//                     transition={{duration:0.5}}
//     className='my-20 text-center text-4xl'>
//         Projects
//     </motion.h2>
//     <div>
//         {PROJECTS.map((pro, i)=>(
//             <div key={i} className='mb-8 flex flex-wrap lg:justify-center'>
//               <motion.div 
//               whileInView={{opacity:1, x:0}}
//                     initial={{opacity:0, x:-100}}
//                     transition={{duration:1}}
//               className='w-full lg:w-1/4'>
//               <img src={pro.image} alt={pro.title} width={150} height={150} className='mb-6 rounded'></img>
//               </motion.div>
//               <motion.div 
//               whileInView={{opacity:1, x:0}}
//                     initial={{opacity:0, x:100}}
//                     transition={{duration:1}}
              
//               className='w-full max-w-xl lg:w-3/4'>
//                 <h6 className='mb-2 font-semibold'>{pro.title}</h6>
//                 <p className='mb-4 text-neutral-400'>{pro.description}</p>
//                 {pro.technologies.map((t, i)=>(
//                   <span key={i} className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{t}</span>
//                 ))}
//               </motion.div>
                
//             </div>
//         ))}
//     </div>
      
//     </div>
//   )
// }

// export default Projects


import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        Projects
      </motion.h2>
      
      <div>
        {PROJECTS.map((pro, i) => (
          <div key={i} className='mb-8 flex flex-wrap lg:justify-center'>
            
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'>
              <img src={pro.image} alt={pro.title} width={150} height={150} className='mb-6 rounded' />
            </motion.div>
            
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'>
              
              <h6 className='mb-2 font-semibold'>
                <a 
                  href={pro.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-500 hover:underline">
                  {pro.title}
                </a>
              </h6>
              
              <p className='mb-4 text-neutral-400'>{pro.description}</p>
              
              {pro.technologies.map((t, i) => (
                <span key={i} className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                  {t}
                </span>
              ))}
            </motion.div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

