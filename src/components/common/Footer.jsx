import { linklist } from "../../assets/data/data";
import { Link as ScrollLink } from "react-scroll";

export const Footer = () => {
  return (
    <>
      <footer className="tj-footer-area">
        <div className="container text-center">
          <div className="logo-box">
            <a href="/">
              <img src="../images/common/mylogo.png" alt="logo" />
            </a>
          </div>
          <div className="footer-menu">
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
          <div className="copy-text">
            <p>
              &copy; 2024 All rights reserved by 
              <a href="https://www.linkedin.com/in/muhammad-uzair-nisar-629490248/" target="_blank">
                uzairDev
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
