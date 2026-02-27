import { useState, useEffect } from "react";
import { linklist } from "../../assets/data/data";
import { NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"; // Import menu and close icons
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open or closed

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <>
      <header className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}>
        <div className="container flexSB">
          <div className="logo-box">
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <span className="firstName">{'<UzairNisar/>'}</span>
              {/* <img src="../images/common/mylogo.png" alt="logo" /> */}
            </NavLink>
          </div>

          <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
            <nav>
              <ul>
                {linklist.map((item) => (
                  <li key={item.id}>
                    <ScrollLink
                      to={item.link.substring(1)} // Remove leading '/' to match element IDs
                      smooth={true}
                      duration={500}
                    >
                      {item.text}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flexSB">
            <div className="header-button">
              <a href='https://www.linkedin.com/in/muhammad-uzair-nisar425/' target="_blank" rel="noopener noreferrer" className="btn tj-btn-primary">
                Hire me!
              </a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? <IoCloseOutline size={40} /> : <IoMenuOutline size={40} />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
