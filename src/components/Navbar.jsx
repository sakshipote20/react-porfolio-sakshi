// import logo from "../assets/sakshiPoteLogo.png";
// import {FaLinkedin} from "react-icons/fa";
// import {FaGithub} from "react-icons/fa";
// import {FaInstagram} from "react-icons/fa";
// import {FaSquareXTwitter} from "react-icons/fa6";

// const Navbar = () => {
//   return <nav className=' mb-20 flex items-center justify-between py-8'>
//     <div className='flex flex-shrink-0 items-center'>
    
   
//     </div>
//     <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <FaLinkedin/>
//         <FaGithub/>
//         <FaInstagram/>
//         <FaSquareXTwitter/>
//     </div>
//   </nav>;
// }

// export default Navbar


import logo from "../assets/sakshiPoteLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa"; // Replaced Twitter with Gmail

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-8">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sakshi-pote-b5112a291" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sakshipote20" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/saakpriv" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:sakshipote20@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

