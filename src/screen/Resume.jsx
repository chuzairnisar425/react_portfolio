import { educationData, experienceData } from "../assets/data/data";
import { CiMedal } from "react-icons/ci";
import { PiGraduationCap } from "react-icons/pi";
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

export const Resume = () => {
  return (
    <>
      <section className="resume-section">
        <motion.div className="container flexSB" initial="hidden" animate="visible" variants={fadeIn("up", 0.2)}>
          <motion.div className="w-half" variants={fadeIn("left", 0.3)}>
            <div className="section-header">
              <h2 className="section-title">
                <PiGraduationCap size={40} /> My Experience
              </h2>
            </div>
<div className="resume-widget">
  {experienceData.map((item, index) => (
    <motion.div
      className="resume-item"
      key={item.id}
      variants={fadeIn("up", index * 0.2)}
    >
      <div className="resume-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="resume-title">{item.institute}</h3>
        <div className="time">{item.time}</div>
      </div>
      <div className="institute">{item.title}</div>
      <div className="institute" style={{ textAlign: "justify" }}>
        {item.desc}
      </div>
    </motion.div>
  ))}
</div>

          </motion.div>

          <motion.div className="w-half" variants={fadeIn("right", 0.3)}>
            <div className="section-header">
              <h2 className="section-title flexE">
                <CiMedal size={40} />
                My Education
              </h2>
            </div>
            <div className="resume-widget">
              {educationData.map((item, index) => (
                <motion.div className="resume-item" key={item.id} variants={fadeIn("up", index * 0.2)}>
                  <div className="time">{item.time}</div>
                  <h3 className="resume-title">{item.title}</h3>
                  <div className="institute">{item.institute}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
