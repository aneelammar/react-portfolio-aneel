import { ABOUT_TEXT, HERO_CONTENT } from "../constants"; 
import profilePic from "../assets/AneelProfile.png"; 
import { motion } from "framer-motion"; 

// Define reusable motion variants for text animations
const textVariants = {
  hidden: { x: -100, opacity: 0 }, 
  visible: (delay = 0) => ({
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, delay }, 
  }),
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 p-4 lg:mb-35">
      {/* Container for the hero section */}
      <div className="flex flex-wrap">
        {/* Left section: Text content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Animated heading */}
            <motion.h1
              variants={textVariants}
              initial="hidden" 
              animate="visible" 
              custom={0} 
              viewport={{ once: true }} 
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Aneel Amar
            </motion.h1>

            {/* Animated subheading */}
            <motion.span
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.5} 
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-900 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Junior Software Engineer
            </motion.span>

            {/* Animated description */}
            <motion.p
              variants={textVariants} 
              initial="hidden"
              animate="visible"
              custom={1} 
              viewport={{ once: true }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right section: Profile image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* Animated profile picture */}
            <motion.img
              initial={{ x: 100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 1.2 }} 
              className="rounded-2xl" 
              src={profilePic} 
              alt="Aneel Amar's profile picture" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
