import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { hero } from "../../assets/data/data";
import Typewriter from "typewriter-effect";
import { ShimmerCircularImage } from "react-shimmer-effects";
import { useState } from "react";
// Animation Variants
const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  };
};

export const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

  const socialIcons = [
    { id: 1, icon: <FaXTwitter size={17} />, url: "https://twitter.com/ChUzair542" },
    { id: 2, icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/in/muhammad-uzair-nisar425/" },
    { id: 3, icon: <IoLogoGithub size={20} />, url: "https://github.com/chuzairnisar425" },
    { id: 4, icon: <FaInstagram size={20} />, url: "https://www.instagram.com/uzair._.nisar/" },
  ];

  return (
    <>
      <section className="hero-section">


        <div className="container">
          <div className="content flexSB">
            {/* Left Section */}
            <motion.div
              className="left w-half"
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              animate="visible"
            >
              <div className="hero-content-box">
                <span className="hero-sub-title">I am Muhammad Uzair Nisar</span>
                <h1 className="hero-title">
                  <Typewriter
                    options={{
                      strings: ["ReactJs Developer", "Software Engineer", "Frontend Developer"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 75,
                    }}
                  />
                </h1>

                <motion.p
                  className="lead"
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="visible"
                >
                  I break down complex user experience problems to create integrity-focused
                  solutions that connect billions of people.
                </motion.p>

                {/* Buttons & Social Icons */}
                <motion.div
                  className="button-box flexG"
                  style={{ display: "flex", placeItems: "center" }}
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  animate="visible"
                >
                  <a href="UzairCV.pdf" className="btn tj-btn-secondary" download>
                    My CV <FaDownload size={10} />
                  </a>

                  <ul className="ul-reset social-icons">
                    {socialIcons.map((icon) => (
                      <motion.li key={icon.id} whileHover={{ scale: 1.1 }}>
                        <a href={icon.url} target="_blank" rel="noopener noreferrer">
                          {icon.icon}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Section (Image with shimmer) */}
          <motion.div className="right w-half" variants={fadeIn("right", 0.3)} initial="hidden" animate="visible" >
            <div className="hero-image-box text-center">
              {!imageLoaded && <ShimmerCircularImage size={250} />}
              <img
                src="../images/common/uzair.jpg"
                alt="logo"
                style={{ display: imageLoaded  }}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </motion.div>
          </div>

          {/* Funfact Area */}
          <motion.div
            className="funfact-area grid4"
            style={{ textAlign: "center" }}
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="visible"
          >
            {hero.map((item, index) => (
              <div className="funfact-item" key={index}>
                <div className="number">
                  <span>{item.text}</span>
                </div>
                <div className="text">{item.title}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
