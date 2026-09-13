import { Link } from "react-router-dom";
import "../App.css";
import portfolioImage from "../../portfolio.png";

function PortfolioDetails() {
  return (
    <div className="project-details">

      <header className="project-details-nav">
        <Link to="/" className="details-logo">
          Reem.
        </Link>

        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>
      </header>

      <main>

        {/* Project Hero */}
        <section className="project-hero">
          <p>02 / Portfolio Website</p>

          <h1>Personal Portfolio</h1>

          <p className="project-description">
            A modern personal portfolio designed to showcase
            my skills, services and selected work as a Front-End Developer.
          </p>
        </section>

        {/* Project Image */}
        <section className="project-main-image">
          <img
  src={portfolioImage}
  alt="Personal Portfolio"
/>
        </section>

        {/* Features */}
        <section className="project-features">

          <div className="features-heading">
            <p>What I built</p>

            <h2>
              A portfolio that<br />
              feels like me.
            </h2>
          </div>

          <div className="features-list">

            <div className="feature-item">
              <span>01</span>

              <div>
                <h3>Personal Introduction</h3>

                <p>
                  A clear introduction that presents my background,
                  role and focus as a Front-End Developer.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span>02</span>

              <div>
                <h3>Services</h3>

                <p>
                  A dedicated section showcasing the front-end
                  services I can provide for different projects.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span>03</span>

              <div>
                <h3>Selected Projects</h3>

                <p>
                  A project section designed to highlight my work
                  and give visitors a closer look at each project.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span>04</span>

              <div>
                <h3>Responsive Experience</h3>

                <p>
                  The portfolio is designed to provide a smooth
                  experience across different screen sizes.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* Project Overview */}
        <section className="project-overview">

          <div>
            <span>Role</span>
            <strong>Front-End Developer</strong>
          </div>

          <div>
            <span>Technologies</span>
            <strong>React / JavaScript / CSS</strong>
          </div>

          <div>
            <span>Type</span>
            <strong>Personal Portfolio</strong>
          </div>

        </section>

        {/* Project Story */}
        <section className="project-story">

          <h2>About the project</h2>

          <p>
            This portfolio was created to present my skills,
            services and projects in a simple and modern way.
            The goal was to create a website that feels personal,
            interactive and easy to navigate while showcasing my
            front-end development abilities.
          </p>

        </section>

      </main>

    </div>
  );
}

export default PortfolioDetails;