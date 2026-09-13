import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import PortfolioDetails from "./pages/PortfolioDetails";
import reemImage from "../reem.png";

function App() {
    const portfolioRef = useRef(null);
     const location = useLocation();

useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

useEffect(() => {
  if (!portfolioRef.current) return;

  const elements = portfolioRef.current.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, [location.pathname]);
  return (
    <Routes>

      <Route
        path="/"
        element={
          <div className="portfolio" ref={portfolioRef}>

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Reem.</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

     {/* Hero Section */}
<section className="hero" id="home">

  <div className="hero-content">

    <p className="hello">Hello, I'm</p>

    <h1>
      Reem Ehab
    </h1>

    <h2>
      Front-End Developer
    </h2>

    <p className="hero-text">
      I build modern, responsive and interactive web experiences
      using React and JavaScript.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="btn primary-btn">
        View My Work
      </a>

      <a href="#contact" className="btn secondary-btn">
        Contact Me
      </a>
    </div>

  </div>

  <div className="hero-image">
    <div className="hero-image-circle">
     <img src={reemImage} alt="Reem Ehab" />
    </div>
  </div>

</section>

      {/* About Section */}
<section className="about" id="about">
  <div className="about-title reveal">
    <p>01 — About Me</p>
    <h2>Turning ideas into<br />digital experiences.</h2>
  </div>

  <div className="about-content reveal">
    <p>
      I'm a Computer Science student and Front-End Developer
      passionate about creating modern and responsive websites.
    </p>

    <p>
      I enjoy turning ideas and designs into clean, interactive
      web experiences using React and JavaScript.
    </p>

   <div className="about-info">

  <div>
    <span>Focus</span>
    <strong>Front-End Development</strong>
  </div>

  <div>
    <span>Specialization</span>
    <strong>React.js</strong>
  </div>

  <div>
    <span>Based in</span>
    <strong>Egypt</strong>
  </div>

</div>
  </div>
</section>


            {/* Services Section */}
      <section className="services" id="services">

       <div className="services-header reveal">
          <p>02 — Services</p>

          <h2>
            What I can<br />
            build for you.
          </h2>
        </div>

        <div className="services-cards">

         <div className="service-card reveal">
            <span>01</span>

            <h3>Landing Pages</h3>

            <p>
              Modern and responsive landing pages
              designed to present your idea clearly
              and attract your audience.
            </p>

            <div className="service-arrow">↗</div>
          </div>

         <div className="service-card reveal">
            <span>02</span>

            <h3>Website Development</h3>

            <p>
              Responsive websites built with clean
              and organized code, focused on usability
              and a smooth experience.
            </p>

            <div className="service-arrow">↗</div>
          </div>

         <div className="service-card reveal">
            <span>03</span>

            <h3>Figma to Code</h3>

            <p>
              Turning Figma designs into accurate,
              responsive and interactive websites
              using modern front-end technologies.
            </p>

            <div className="service-arrow">↗</div>
          </div>

        </div>

      </section>

            {/* Projects Section */}
      <section className="projects" id="projects">

        <div className="projects-header reveal">
          <p>03 — Selected Work</p>

          <h2>
            Some things<br />
            I've built.
          </h2>
        </div>

        <div className="projects-list">

          <div className="project-card reveal">
       <Link to="/project/shoply" className="project-image">
  <img
    src="/shoply.png"
    alt="Shoply E-Commerce Website"
  />

  <div className="project-overlay">
    <span>View Project ↗</span>
  </div>
</Link>
            <div className="project-info">
              <div>
                <p>01 / E-Commerce</p>
                <h3>Shoply</h3>
              </div>

             <Link to="/project/shoply" className="project-link">
  View Project ↗
</Link>
            </div>
          </div>


<div className="project-card reveal">

 <Link to="/project/portfolio" className="project-image">
    <img
      src="/portfolio.png"
      alt="Personal Portfolio"
    />

    <div className="project-overlay">
      <span>View Project ↗</span>
    </div>
  </Link>

  <div className="project-info">
    <div>
      <p>02 / Portfolio</p>
      <h3>Personal Portfolio</h3>
    </div>

<Link to="/project/portfolio" className="project-link">
  View Project ↗
</Link>
  </div>

</div>


 <div className="project-card reveal">

  <div className="project-image project-image-three coming-soon">

    <div className="coming-soon-content">
      <span className="coming-soon-number">03</span>

      <h3>COMING<br />SOON</h3>

      <p>
        A new project is currently in progress.
      </p>
    </div>

  </div>

  <div className="project-info">

    <div>
      <p>03 / Web Development</p>
      <h3>Coming Soon</h3>
    </div>

    <span className="project-link disabled-link">
      In Progress
    </span>

  </div>

</div>

        </div>

      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">

        <div className="contact-header reveal">
          <p>04 — Contact</p>

          <h2>
            Let's build<br />
            something together.
          </h2>
        </div>

        <div className="contact-content reveal">

          <p className="contact-text">
            Have a project in mind or an idea you want to bring to life?
            I'd love to hear about it.
          </p>

          <a
            href="mailto:your@email.com"
            className="contact-email"
          >
            reeme5913@gmail.com ↗
          </a>

          <div className="contact-links">

   <a
  href="https://www.linkedin.com/in/reem-ehab-777432363"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn ↗
</a>

   <span className="disabled-social">
        GitHub — Coming Soon
      </span>

          </div>

        </div>

      </section>

      {/* Footer */}
     <footer className="footer reveal">

        <div className="footer-top">

          <div className="footer-logo">
            Reem.
          </div>

          <p>
            Front-End Developer crafting modern
            and interactive web experiences.
          </p>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 Reem Ehab
          </span>

          <span>
            Built with React.js
          </span>

          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </footer>

              </div>
        }
      />
<Route
  path="/project/shoply"
  element={<ProjectDetails />}
/>

<Route
  path="/project/portfolio"
  element={<PortfolioDetails />}
/>

    </Routes>
  );
}

export default App;