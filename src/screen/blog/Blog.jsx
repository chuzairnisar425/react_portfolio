import { blogs } from "../../assets/data/data";
import { CiCalendar } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";

export const Blog = () => {
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <div className="section-header text">
            <h2 className="section-title">My Achievements</h2>
            <p>
              Completed a successful internship, actively participated in
              Microsoft Learn Student Ambassadors (MLSA) programs, and currently
              employed at Appium Logics Solution
            </p>
          </div>
          <div className="grid4">
            {blogs.map((blog) => (
              <div className="blog-item" key={blog.id}>
                <div className="blog-thumb">
                  <a href={blog.link}>
                    <img src={blog.image} alt="" />
                  </a>
                  {/* <a href={blog.categoryLink} className="category" target="_blank">
                    {blog.category}
                  </a> */}
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="ul-reset">
                      <li>
                      
                   
                      </li>
                      <li>
                       
                       
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-title" style={{textAlign:'center'}}>
                    <a href={blog.link}  style={{fontSize:'15px'}}>{blog.title}</a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
