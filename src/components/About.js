import React from "react";

const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-section">
          <p className="about-description">
            We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
            The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India.
          </p>
          <h2 className="about-heading">Where Do You <strong>Belong?</strong></h2>
          <div className="about-categories">
            <div className="category">
              <div className="category-icon technology"></div>
              <h3 className="category-title">Technology</h3>
              <button className="explore-btn">Explore</button>
            </div>
            <div className="category">
              <div className="category-icon business"></div>
              <h3 className="category-title">Business</h3>
              <button className="explore-btn">Explore</button>
            </div>
            <div className="category">
              <div className="category-icon cloud-kitchen"></div>
              <h3 className="category-title">Cloud Kitchen</h3>
              <button className="explore-btn">Explore</button>
            </div>
            <div className="category">
              <div className="category-icon customer-care"></div>
              <h3 className="category-title">Customer Care</h3>
              <button className="explore-btn">Explore</button>
            </div>
            <div className="category">
              <div className="category-icon campus"></div>
              <h3 className="category-title">Campus</h3>
              <button className="explore-btn">Explore</button>
            </div>
            <div className="category">
              <div className="category-icon corporate-support"></div>
              <h3 className="category-title">Corporate Support Functions</h3>
              <button className="explore-btn">Explore</button>
            </div>
          </div>
        </div>

        <div className="webinar-section">
          <h2 className="webinar-title"><span className="main">Food-Express </span>Gigabytes</h2>
          <h3 className="webinar-subtitle">#LetsTalkDeepTech | Webinar Series</h3>
          <p className="webinar-description">
            Missed the latest edition of Gigabytes - Food-Express tech webinar series? Want to know what's geeking inside Swiggy's hyperlocal tech world?
          </p>
          <button className="tune-in-btn">Tune In</button>
        </div>

        {/* Award Section */}
        <div className="awards-section">
          <h2>We Dream Big And Do Bigger</h2>
          <div className="awards-container">
            <div className="award">
              <img src="https://careers.swiggy.com/assets/img/certificate-1.png" alt="Amazon Mobility Award 2017" />
              <p>Established - 'Food And Hyperlocal'</p>
            </div>
            <div className="award">
              <img src="https://careers.swiggy.com/assets/img/certificate-2.png" alt="Food Hospitality World 2017" />
              <p>Business Excellence Honour (2017)</p>
            </div>
            <div className="award">
              <img src="https://careers.swiggy.com/assets/img/certificate-3.png" alt="LinkedIn Top Companies 2019" />
              <p>Top Companies - 2019</p>
            </div>
            <div className="award">
              <img src="https://careers.swiggy.com/assets/img/certificate-4.png" alt="Startup of the Year 2017" />
              <p>Startup of the Year 2017</p>
            </div>
            <div className="award">
              <img src="https://careers.swiggy.com/assets/img/certificate-5.png" alt="Great Place To Work 2020-2021" />
              <p>Great Place To Work Certified 2020-2021</p>
            </div>
            <div className="award">
              <img src="https://careers.swiggy.com/assets/img/Aegis-Graham-Bell-Awards.jpg" alt="Aegis Graham Bell Award" />
              <p>Innovation in Transport Tech 2021</p>
            </div>
            <div className="award">
              <img src="https://careers.swiggy.com/assets/img/CII-Award.jpg" alt="CII Award" />
              <p>Significant Achievement in HR Excellence 2021-22</p>
            </div>
            <div className="award">
              <img src="https://careers.swiggy.com/assets/img/Fairwork.jpg" alt="Fairwork India Ratings 2021" />
              <p>4th in Fairwork India Ratings 2021</p>
            </div>
            <div className="award">
              <img src="https://careers.swiggy.com/assets/img/Mint-Start-Up-Icon-Awards-2022.jpg" alt="Mint Startup Icon Award 2022" />
              <p>Best High Value Start-Up 2022</p>
            </div>
            <div className="award">
              <img src="https://careers.swiggy.com/assets/img/aim.jpg" alt="CIM Award 2022" />
              <p>#6 Best Firm in India for Data Scientists & Benefits & Wellbeing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;


