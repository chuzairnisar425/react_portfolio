import { linklist } from "../../assets/data/data";

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
                {linklist.map((link) => (
                  <li key={link.id}>
                    <a href={link.link}>{link.text}</a>
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
