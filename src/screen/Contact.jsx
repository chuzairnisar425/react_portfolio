import { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const Contact = () => {
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
  const [contactInfo, setContactInfo] = useState({
    phone: "+923036911226",
    email: "uzair.nisar425@gmail.com",
    address: "Faisalabad, Pakistan",
  });

  useEffect(() => {
    // Simulate fetching data
    const fetchContactInfo = async () => {
      // Simulated data
      const dummyData = {
        phone: "+923036911226",
        email: "uzair.nisar425@gmail.com",
        address: "Faisalabad, Pakistan",
      };

      // Simulate delay for fetching
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set the fetched data
      setContactInfo(dummyData);
    };

    fetchContactInfo();
  }, []);

  return (
    <>
      <section className="contact-section" id="contact-section">
        <div className="container flexSB">
          <div className="contact-form-box w-half">
            <div className="section-header">
              <h2 className="section-title">Let’s work together!</h2>
              <p>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
            </div>
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

          <div className="contact-info-list  w-half">
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
          </div>
        </div>
      </section>
    </>
  );
};
