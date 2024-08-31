import { useState } from "react";
import { projects } from "../../assets/data/data";
import { GoArrowUpRight } from "react-icons/go";

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProjects = () => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  };

  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">My Recent Works</h2>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
          </div>

          <div className="portfolio-filter text-center">
            <div className="button-group filter-button-group">
              {["All", "UX/UI", "Websites"].map(category => (
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
          </div>

          <div className="portfolio-box">
            <div className="grid2">
              {filterProjects().map((project) => (
                <div className="portfolio-item branding" key={project.id}>
                  <div className="image-box">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <img src={project.cover} alt={project.title} />
                    </a>
                  </div>
                  <div className="content-box">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <h5 className="portfolio-title" >{project.title}</h5>
                    </a>
                    <p>{project.desc}</p>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <i>
                        <GoArrowUpRight size={30} />
                      </i>
                    </a>
                  </div>
                  <h5 className="portfolio-title">{project.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
