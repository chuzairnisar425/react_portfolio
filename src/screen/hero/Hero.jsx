import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { hero } from "../../assets/data/data";

export const Hero = () => {
    const socialIcons = [
      {
        id: 1,
        icon: <FaXTwitter size={17} />,
        url: 'https://twitter.com/ChUzair542',    

      },
    
      {
        id: 2,
        icon: <FaLinkedinIn size={20} />,
        url: 'https://www.linkedin.com/in/muhammad-uzair-nisar-629490248/',    

      },
      {
        id: 3,
        icon: <IoLogoGithub size={20} />,
        url: 'https://github.com/chuzairnisar425',    

      },
      {
        id: 4,
        icon: <FaInstagram size={20} />,
        url: 'https://www.instagram.com/uzair._.nisar/',    
      },
    ];

  return (
    <>
      <section className="hero-section">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle">
              HI
            </text>
          </svg>
        </div> 
        <div className="container">
          <div className="content flexSB">
            <div className="left w-half">
              <div className="hero-content-box">
                <span className="hero-sub-title">I am Muhammad Uzair Nisar  </span>
                <h1 className="hero-title">
                 Web Developer +<br />
                  UX Designer
                </h1>

                <div className="hero-image-box d-md-none text-center">
                  <img src="assets/img/hero/me.png" alt="" />
                </div>

                <p className="lead">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                <div className="button-box flexG">
                  <a href="Cv.pdf" className="btn tj-btn-secondary" download>
                    Download CV <FaDownload size={20}/>
                  </a>
                  <ul className="ul-reset social-icons">
    {socialIcons.map((icon) => (
      <li key={icon.id}>
        <a href={icon.url} target="_blank" rel="noopener noreferrer">
          {icon.icon}
        </a>
      </li>
    ))}
  </ul>
                </div>
              </div>
            </div>
            <div className="right w-half">
              <div className="hero-image-box text-center">
                <img src="../images/common/uzair.png" alt="logo" />
              </div>
            </div>
          </div>

          <div className="funfact-area grid4">
            {hero.map((item, index) => (
              <div className="funfact-item" key={index}>
                <div className="number">
                  <span>{item.text}</span>
                </div>
                <div className="text">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
