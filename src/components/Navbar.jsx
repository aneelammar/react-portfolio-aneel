// Logo image
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
  
      {/* Social Media Icons */}
      <div className="m-8 flex items-center justify-center gap-6 text-2xl text-neutral-200">
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/aneel-amar-929415232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="transition-transform transform hover:scale-110 hover:text-blue-500" />
        </a>
        
        {/* GitHub Icon */}
        <a href="https://github.com/aneelammar" target="_blank" rel="noopener noreferrer">
          <FaGithub className="transition-transform transform hover:scale-110 hover:text-gray-500" />
        </a>

        {/* Instagram Icon */}
        {/* <a href="https://www.instagram.com/aneelamar/profilecard/?igsh=MTMzdnJldXJmeGVpaQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="transition-transform transform hover:scale-110 hover:text-pink-500" />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
