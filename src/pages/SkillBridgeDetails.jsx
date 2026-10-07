import { Link } from "react-router-dom";
import "../App.css";
import skillbridgeImage from "../../skillbridge.png";

function SkillBridgeDetails() {
  return (
    <div className="project-details">

      {/* Navigation */}
      <header className="project-details-nav">
        <Link to="/" className="details-logo">
          Reem.
        </Link>

        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>
      </header>


      <main>

        {/* Hero */}
        <section className="project-hero">

          <p>03 / Career Guidance Platform</p>

          <h1>SkillBridge</h1>

          <p className="project-description">
            A career guidance platform that helps students identify their
            skill gaps and follow a personalized learning roadmap toward
            their target career.
          </p>

        </section>


        {/* Project Image */}
        <section className="project-main-image">

          <img
            src={skillbridgeImage}
            alt="SkillBridge Career Guidance Platform"
          />

        </section>


        {/* Project Overview */}
        <section className="project-overview">

          <div>
            <span>Role</span>
            <strong>Front-End Developer</strong>
          </div>

          <div>
            <span>Technologies</span>
            <strong>React.js / JavaScript / CSS3</strong>
          </div>

          <div>
            <span>Type</span>
            <strong>Career Guidance Platform</strong>
          </div>

        </section>


        {/* About Project */}
        <section className="project-story">

          <h2>About the project</h2>

          <p>
            SkillBridge is a career guidance platform designed to help
            students understand where they currently stand in their
            career journey and what they need to learn next.
          </p>

          <p>
            The platform guides users through career selection, skill
            assessment, skill gap analysis, personalized learning
            roadmaps, learning resources, and real-world projects.
          </p>

        </section>


        {/* Features */}
        <section className="project-features">

          <div className="features-heading">

            <p>Key Features</p>

            <h2>
              Built to guide<br />
              your learning journey.
            </h2>

          </div>


          <div className="features-list">

            <div className="feature-item">

              <span>01</span>

              <div>
                <h3>Career Tracks</h3>

                <p>
                  Explore 10 different career paths and choose the
                  direction that matches your goals.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <span>02</span>

              <div>
                <h3>Skills Assessment</h3>

                <p>
                  Evaluate your current skills and identify your
                  strengths and areas that need improvement.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <span>03</span>

              <div>
                <h3>Skill Gap Analysis</h3>

                <p>
                  Compare your current skills with the requirements
                  of your selected career path.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <span>04</span>

              <div>
                <h3>Personalized Roadmap</h3>

                <p>
                  Follow a structured learning roadmap based on your
                  current level and career goal.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <span>05</span>

              <div>
                <h3>Projects & Progress</h3>

                <p>
                  Unlock real-world projects and track your progress
                  as you continue learning.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <span>06</span>

              <div>
                <h3>XP & Level System</h3>

                <p>
                  Earn XP through your learning journey and track your
                  development through a simple level system.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <span>07</span>

              <div>
                <h3>Dashboard & Profile</h3>

                <p>
                  View your learning progress, completed steps,
                  projects, and career development in one place.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <span>08</span>

              <div>
                <h3>Independent Track Progress</h3>

                <p>
                  Each career track keeps its own progress, allowing
                  users to explore different paths independently.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* Tech Stack */}
        <section className="project-story">

          <h2>Tech Stack</h2>

          <p>
            React.js · JavaScript · React Router · Vite · HTML5 · CSS3 ·
            LocalStorage
          </p>

        </section>


        {/* Links */}
        <section className="project-overview">

          <div>
            <span>Live Demo</span>

            <a
              href="https://skillbridge-blond-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit Website ↗
            </a>
          </div>


          <div>
            <span>Source Code</span>

            <a
              href="https://github.com/reeme5913-maker/SkillBridge"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub ↗
            </a>
          </div>

        </section>


        {/* Back */}
        <section className="project-story">

          <Link to="/" className="back-link">
            ← Back to Portfolio
          </Link>

        </section>

      </main>

    </div>
  );
}

export default SkillBridgeDetails;