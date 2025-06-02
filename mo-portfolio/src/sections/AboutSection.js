import React from "react";
import { motion } from "framer-motion";
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-text">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="section-title"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
            Hey there! Thanks for stopping by my portfolio—happy to 
            have you here! My name’s Mohammed, and I’m a Computer Science
            student at San Jose State University. I’m originally from Egypt, 
            but California has become my second home. I love taking ideas and 
            bringing them to life with code—whether it’s building something 
            interactive or adding a creative twist to make a project stand out. 
            When I’m not glued to my laptop, you’ll probably catch me bouldering 
            at the climbing gym or dreaming up my next big adventure.
            I’ve worked with Java, Python, and React, and I’m all about taking on 
            challenges that push me to combine function with design. My projects 
            are a true reflection of who I am—curious, creative, and always striving 
            to build something meaningful (and fun!).
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              How I Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I like to keep things simple but effective.
              My approach is all about breaking down problems into manageable pieces,
              staying consistent, and constantly learning. Whether it's a team project
              or a solo deep dive into code, I try to bring positivity and structure to the table.
              And yes, there's usually some coffee involved. ☕
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              What I've Learned
            </motion.h1>
            <motion.ul
              className="learnings-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <li>Collaboration is everything. Great ideas come from working together
                and supporting each other.</li>
              <li>Trial and error isn't failure—it's how the best solutions are built.</li>
              <li>Balancing creativity and logic makes projects not just functional, but memorable.</li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;