import { motion } from "framer-motion";
import { service } from "../../assets/data/data";
import { GoArrowUpRight } from "react-icons/go";

export const Service = () => {
  return (
    <motion.section className="services-section" id="services-section" initial="hidden" animate="visible">
      <div className="container">
        {/* Header Animation */}
        <motion.div className="section-header text-center"
          initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        >
          <h2 className="section-title wow fadeInUp">My Quality Services</h2>
          <p className=" wow fadeInUp" data-wow-delay=".4s">
            I put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </p>
        </motion.div>

        <motion.div className="services-widget position-relative">
          {service.map((item, index) => (
            <motion.div
              className="service-item flexSB"
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="left-box">
                <span className="number">0{item.id}</span>
                <h3 className="service-title">{item.title}</h3>
              </div>
              <div className="right-box">
                <p>{item.text}</p>
              </div>
              <motion.i whileHover={{ rotate: 15, scale: 1.2 }} transition={{ duration: 0.2 }}>
                <GoArrowUpRight size={25} />
              </motion.i>
              <button className="service-link modal-popup"></button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
