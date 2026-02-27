import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const Contact = () => {
  const socialIcons = [
    { id: 1, icon: <FaXTwitter size={17} />, url: 'https://twitter.com/ChUzair542' },
    { id: 2, icon: <FaLinkedinIn size={20} />, url: 'https://www.linkedin.com/in/muhammad-uzair-nisar425/' },
    { id: 3, icon: <IoLogoGithub size={20} />, url: 'https://github.com/chuzairnisar425' },
    { id: 4, icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/uzair._.nisar/' },
  ];

  const [contactInfo, setContactInfo] = useState({
    phone: "+923036911226",
    email: "uzair.nisar425@gmail.com",
    address: "Faisalabad, Pakistan",
  });

  useEffect(() => {
    const fetchContactInfo = async () => {
      const dummyData = {
        phone: "+923036911226",
        email: "uzair.nisar425@gmail.com",
        address: "Faisalabad, Pakistan",
      };
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setContactInfo(dummyData);
    };
    fetchContactInfo();
  }, []);

  return (
    <motion.section
      className="contact-section"
      id="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container flexSB">
        <motion.div
          className="contact-form-box w-half"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <h2 className="section-title">Let’s work together!</h2>
            <p>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
          </div>
          <motion.ul
            className="ul-reset social-icons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {socialIcons.map((icon) => (
              <motion.li key={icon.id} whileHover={{ scale: 1.1 }}>
                <a href={icon.url} target="_blank" rel="noopener noreferrer">
                  {icon.icon}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="contact-info-list w-half"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ul className="ul-reset">
            <li>
              <div className="icon-box">
                <IoCallOutline size={20} />
              </div>
              <div className="text-box">
                <p>Phone</p>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <TfiEmail />
              </div>
              <div className="text-box">
                <p>Email</p>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <CiLocationOn size={20} />
              </div>
              <div className="text-box">
                <p>Address</p>
                <a href="#">{contactInfo.address}</a>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};
