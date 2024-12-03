import { ABOUT_TEXT, HERO_CONTENT } from "../constants"; // Importing text content
import profilePic from "../assets/AneelProfile.png"; // Importing profile picture asset
import { motion } from "framer-motion"; // Importing framer-motion for animations

// Define reusable motion variants for text animations
const textVariants = {
  hidden: { x: -100, opacity: 0 }, // Initial state: hidden with offset to the left
  visible: (delay = 0) => ({
    x: 0, // Target state: aligned at origin
    opacity: 1, // Fully visible
    transition: { duration: 0.5, delay }, // Animation duration and delay
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
              variants={textVariants} // Apply text animation
              initial="hidden" // Initial state of animation
              animate="visible" // Target state of animation
              custom={0} // No delay for the heading
              viewport={{ once: true }} // Animation only triggers once on scroll
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Aneel Amar
            </motion.h1>

            {/* Animated subheading */}
            <motion.span
              variants={textVariants} // Apply text animation
              initial="hidden"
              animate="visible"
              custom={0.5} // Delay of 0.5 seconds
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-900 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Junior Software Engineer
            </motion.span>

            {/* Animated description */}
            <motion.p
              variants={textVariants} // Apply text animation
              initial="hidden"
              animate="visible"
              custom={1} // Delay of 1 second
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
              initial={{ x: 100, opacity: 0 }} // Starts offset to the right and hidden
              animate={{ x: 0, opacity: 1 }} // Moves to origin and becomes visible
              transition={{ duration: 1, delay: 1.2 }} // Animation duration and delay
              className="rounded-2xl" // Tailwind class for rounded corners
              src={profilePic} // Profile image source
              alt="Aneel Amar's profile picture" // Alternative text for accessibility
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
