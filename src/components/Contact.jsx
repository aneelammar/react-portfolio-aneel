// Import dependencies
import { CONTACT } from "../constants"; // Import contact information from constants
import { motion } from "framer-motion"; // Import motion library for animations

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Section Title with Smooth Fade and Slide Animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }} // Animate into view with opacity and slide effect
        initial={{ opacity: 0, y: -100 }} // Start with opacity 0 and move up
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation easing
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      {/* Contact Information Section */}
      <div className="text-center tracking-tighter">
        {/* Address with Slide-In Animation from the Left */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }} // Slide in from left when in view
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
          className="my-4 text-neutral-400"
        >
          {CONTACT.address}
        </motion.p>

        {/* Phone Number with Slide-In Animation from the Right */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }} // Slide in from right when in view
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
          className="my-4 text-neutral-400"
        >
          {CONTACT.phoneNo}
        </motion.p>

        {/* Email Link with Hover Effect */}
        <motion.a
          href={`mailto:${CONTACT.email}`} // Make the email a clickable mailto link
          whileHover={{ scale: 1.05 }} // Slightly scale up on hover for interaction
          transition={{ duration: 0.2 }} // Smooth hover transition
          className="my-4 inline-block border-b text-neutral-400 hover:text-purple-500"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
