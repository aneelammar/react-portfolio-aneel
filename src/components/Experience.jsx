// Import dependencies
import { EXPERIENCES } from "../constants"; // Import experiences data
import { motion } from "framer-motion"; // Import motion library for animations

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Section Heading with Smooth Drop Animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible when in view
        initial={{ opacity: 0, y: -100 }} // Start hidden and above the viewport
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      {/* Experience List */}
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center gap-4"
          >
            {/* Year Column */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Slide in from left
              initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth easing
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </motion.div>

            {/* Details Column */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Slide in from right
              initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth easing
              className="w-full max-w-xl lg:w-3/4"
            >
              {/* Role and Company */}
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>

              {/* Job Description */}
              <p className="mb-4 text-neutral-400">{experience.description}</p>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{ scale: 1.1 }} // Slight scale-up on hover
                    transition={{ duration: 0.2, ease: "easeInOut" }} // Smooth hover animation
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 shadow-md"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
