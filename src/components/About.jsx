import React from "react";
import "../styles/About.css";
// Import your image from the local folder
import MyImage from "../assets/BL.png";

function About() {
  React.useEffect(() => {
    // Disable scroll
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Re-enable scroll when leaving page
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="about-container">
      <header className="about-header">About BeyondLimits</header>

      <div className="about-content">
        <div className="text-section">
          <h2>My Personal Story:</h2>
          <p>
            My name is Kasparas Dimsa. I am the creator of BeyondLimits. This
            website was created to tackle a big problem, especially for me in
            the workout industry: demotivation. I have started going to the gym about a year ago and have felt the
            need to work out ever since. However, I have not always felt the
            “spark” and motivation inside me that would drive me to work out. I hope my website will become a solution to my problem and give me
            that bit of motivation that I am missing. Many times I feel like I
            am not organized enough to make it enjoyable, functional and
            effective at the same time. This is the reason I am creating this website - to help solve my problem of demotivation and boredom in working out which other
            people may also have. I hope BeyondLimits is a helpful tool for you and helps you build your own fitness habits.
          </p>
        </div>

        <div className="image-section">
          <img src={MyImage} alt="BeyondLimits" />
        </div>
      </div>

      <footer className="about-footer">
        <a href="/home"> Back to Main Page</a>
      </footer>
    </div>
  );
};

export default About;
