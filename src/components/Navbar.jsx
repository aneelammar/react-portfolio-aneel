// Logo image
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Social Media Icons */}
      <div className="m-8 flex items-center justify-center gap-6 text-2xl text-neutral-200">
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/kevinrush" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="transition-transform transform hover:scale-110 hover:text-blue-500" />
        </a>
        
        {/* GitHub Icon */}
        <a href="https://github.com/kevinrush" target="_blank" rel="noopener noreferrer">
          <FaGithub className="transition-transform transform hover:scale-110 hover:text-gray-500" />
        </a>

        {/* Instagram Icon */}
        <a href="https://instagram.com/kevinrush" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="transition-transform transform hover:scale-110 hover:text-pink-500" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
