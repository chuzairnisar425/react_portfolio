import { skillsData } from "../assets/data/data";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  };
};

export const Skill = () => {
  return (
    <>
      <section className="skills-section">
        <motion.div className="container" initial="hidden" animate="visible" variants={fadeIn("up", 0.2)}>
          <div className="section-header text-center">
            <h2 className="section-title">My Skills</h2>
            <p>
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and your customers.
            </p>
          </div>

          <motion.div className="skills-widget grid6" variants={fadeIn("up", 0.3)}>
            {skillsData.map((skill, index) => (
              <motion.div className="skill-item" key={skill.id} variants={fadeIn("up", index * 0.2)}>
                <div className="icon-box">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
