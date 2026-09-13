import { Link } from "react-router-dom";
import "../App.css";
import shoplyImage from "../../shoply.png";

function ProjectDetails() {
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

        <section className="project-hero">
          <p>01 / E-Commerce Website</p>

          <h1>Shoply</h1>

          <p className="project-description">
            A modern e-commerce website designed to provide
            a simple and enjoyable shopping experience.
          </p>
        </section>

        <section className="project-main-image">
            <img
          src={shoplyImage}
            alt="Shoply E-Commerce Website"
            />
        </section>
        

        

        <section className="project-overview">

          <div>
            <span>Role</span>
            <strong>Front-End Developer</strong>
          </div>

          <div>
            <span>Technologies</span>
            <strong>HTML / CSS / JavaScript</strong>
          </div>

          <div>
            <span>Type</span>
            <strong>E-Commerce</strong>
          </div>

        </section>

        <section className="project-story">

          <h2>About the project</h2>

          <p>
            Shoply is an e-commerce website created to practice
            front-end development and build a complete shopping
            experience from browsing products to checkout.
          </p>

        </section>

      </main>

    </div>
  );
}

export default ProjectDetails;