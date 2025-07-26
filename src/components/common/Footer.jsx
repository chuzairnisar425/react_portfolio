import { HiHeart } from "react-icons/hi";
import { linklist } from "../../assets/data/data";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="tj-footer-area">
        <div className="container text-center">
          <div className="logo-box" style={{ marginBottom: '15px' }}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <span className="firstName">._Uzair</span><span className="lastName">Nisar_.</span>
              {/* <img src="../images/common/mylogo.png" alt="logo" /> */}
            </NavLink>
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
          <div className="copy-text" >
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              &copy; 2025 Made with  <HiHeart style={{ color: 'red', marginLeft: '3px', marginRight: '3px ' }} />  by
              <a href="https://www.linkedin.com/in/muhammad-uzair-nisar-629490248/" target="_blank" style={{ marginLeft: '5px' }}>
                <span style={{ color: 'white' }}>  UzairNisar</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
