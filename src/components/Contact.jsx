import { CONTACT } from "../constants"; 
import { motion } from "framer-motion"; 

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Section Title with Smooth Fade and Slide Animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5, ease: "easeOut" }} 
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      {/* Contact Information Section */}
      <div className="text-center tracking-tighter">
        {/* Address with Slide-In Animation from the Left */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 1, ease: "easeInOut" }} 
          className="my-4 text-neutral-400"
        >
          {CONTACT.address}
        </motion.p>

        {/* Phone Number with Slide-In Animation from the Right */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: 100 }} 
          transition={{ duration: 1, ease: "easeInOut" }} 
          className="my-4 text-neutral-400"
        >
          {CONTACT.phoneNo}
        </motion.p>

        {/* Email Link with Hover Effect */}
        <motion.a
          href={`mailto:${CONTACT.email}`} 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.2 }} 
          className="my-4 inline-block border-b text-neutral-400 hover:text-purple-500"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
