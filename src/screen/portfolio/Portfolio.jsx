import { useState } from "react";
import { projects } from "../../assets/data/data";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { ShimmerThumbnail } from "react-shimmer-effects"; // 👈 shimmer

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

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loadedImages, setLoadedImages] = useState({}); // 👈 track per image

  const filterProjects = () => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  };

  return (
    <section className="portfolio-section">
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={fadeIn("up", 0.2)}
      >
        <div className="section-header text-center">
          <h2 className="section-title">My Recent Works</h2>
          <p>
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="portfolio-filter text-center"
          variants={fadeIn("up", 0.3)}
        >
          <div className="button-group filter-button-group">
            {["All", "UX/UI", "Websites"].map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
            <div className="active-bg"></div>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div className="portfolio-box" variants={fadeIn("up", 0.4)}>
          <div className="grid2">
            {filterProjects().map((project, index) => (
              <motion.div
                className="portfolio-item branding"
                key={project.id}
                variants={fadeIn("up", index * 0.2)}
              >
                <div className="image-box">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Shimmer until image loads */}
                    {!loadedImages[project.id] && (
                      <ShimmerThumbnail height={200} rounded /> // 👈 adjust size
                    )}
                    <img
                      src={project.cover}
                      alt={project.title}
                      style={{
                        display: loadedImages[project.id] ? "block" : "none",
                      }}
                      onLoad={() =>
                        setLoadedImages((prev) => ({
                          ...prev,
                          [project.id]: true,
                        }))
                      }
                    />
                  </a>
                </div>
                <div className="content-box">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <h5 className="portfolio-title">{project.title}</h5>
                  </a>
                  <p>{project.desc}</p>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>
                      <GoArrowUpRight size={30} />
                    </i>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
