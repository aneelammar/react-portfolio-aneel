import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiLinux, SiFirebase, SiFlutter } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { MdMemory } from "react-icons/md";
import { motion } from "framer-motion";

// Define reusable animation variants for icons
const iconVariants = (duration) => ({
  initial: { y: -10 }, 
  animate: {
    y: [10, 0], 
    transition: {
      duration: duration / 3, 
      ease: "linear", 
      repeat: Infinity, 
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Animated heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1.5 }} 
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      {/* Container for technology icons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -100 }} 
        transition={{ duration: 1.5 }} 
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {/* Each technology section consists of a label and animated icon */}

        {/* Embedded Systems */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-neutral-400">Embedded Systems</p>
          <motion.div
            variants={iconVariants(2.5)} 
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <MdMemory className="text-7xl text-yellow-500" />
          </motion.div>
        </div>

        {/* Linux */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-neutral-400">Linux</p>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiLinux className="text-7xl text-gray-500" />
          </motion.div>
        </div>

        {/* Firebase */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-neutral-400">Firebase</p>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiFirebase className="text-7xl text-yellow-400" />
          </motion.div>
        </div>

        {/* Flutter */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-neutral-400">Flutter</p>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiFlutter className="text-7xl text-blue-500" />
          </motion.div>
        </div>

        {/* MySQL */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-neutral-400">MySQL</p>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiMysql className="text-7xl text-blue-400" />
          </motion.div>
        </div>

        {/* React */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-neutral-400">React</p>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-neutral-400">Next.js</p>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbBrandNextjs className="text-7xl" />
          </motion.div>
        </div>

        {/* MongoDB */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-neutral-400">MongoDB</p>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-neutral-400">Node.js</p>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
