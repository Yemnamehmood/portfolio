'use client'
import React from 'react';
import { FaNodeJs, FaReact, FaHtml5, FaCss3, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiGooglecloud } from 'react-icons/si';

export default function Home() {
  return (
    <div className="container">
          {/* Home Section */}
         <section id="home" className="home-section">
         <div className="home-content">
          <h1> Welcome To My Portfolio</h1>
         <h1>Yemna Mehmood</h1> 
         <p>Frontend Developer | React Enthusiast | Problem Solver</p>
      </div>
    </section>

      

      {/* About Section */}
        <section id="about" className="about-section">
        <div className="about-info">
        <h2>About Me</h2>
        <p>Hi, I&apos;m Yemna Mehmood, a passionate frontend developer with experience in building dynamic websites and applications. I love creating intuitive, beautiful user interfaces and solving complex problems.</p>
      </div>
       <div className="about-img">
      <img src="/WhatsApp Image 2024-10-27 at 3.12.26 AM.jpeg" alt="Your Photo" />
   </div>
  </section>



      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <p className="font-semibold"> Here&apos;s some projects that I have worked on.</p>
        <br/>
        <div className="projects-container">
          <div className="project-card">
            <h3>Project 1: My Portfolio</h3>
            <p>A personal portfolio built using React and Next.js.</p>
            <a href="https://yemnasportfolio.vercel.app/" target="_blank" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 2: Expense Tracker</h3>
            <p>A web application to manage expenses.</p>
            <a href="https://expense-tracker-project-one.vercel.app/" target="_blank" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 3: Notes App</h3>
            <p>A web application to manage your notes.</p>
            <a href="https://notes-app-by-yemna.vercel.app/" target="_blank" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 4: Currency Converter App</h3>
            <p>A web application to convert currency.</p>
            <a href="https://currency-converter-app-three-omega.vercel.app/" target="_blank" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 5: Birthday Wish with Music</h3>
            <p>A web application to wish your loved ones with music.</p>
            <a href="https://birthday-wish-with-music-player.vercel.app/" target="_blank" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 6: Recipe Search</h3>
            <p>A web application to get any recipe quickly.</p>
            <a href="https://recipe-search-app-byyemna.vercel.app/" target="_blank" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 7: Fusion Mart Website</h3>
            <p>A web application for an e-commerce website.</p>
            <a href="https://fusion-mart-by-yemna.vercel.app/" target="_blank" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 8: Teachers Day Website</h3>
            <p>A web application to wish my mentor.</p>
            <a href="https://teachers-day-tribute-to-sir-hamzah-auez.vercel.app/" target="_blank" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 9: Meme Generator</h3>
            <p>A web application to edit and download memes.</p>
            <a href="https://meme-generator-app-by-yemna.vercel.app/" target="_blank" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 10: Handmade Crafts Website</h3>
            <p>A web application to browse handmade crafts.</p>
            <a href="https://handmade-crafts-madeby-yemna.vercel.app/" target="_blank" className="project-link">View Project</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill">
            <FaNodeJs />
            <p>Node.js</p>
          </div>
          <div className="skill">
            <FaReact />
            <p>React.js</p>
          </div>
          <div className="skill">
            <SiNextdotjs />
            <p>Next.js</p>
          </div>
          <div className="skill">
            <SiTailwindcss />
            <p>Tailwind CSS</p>
          </div>
          <div className="skill">
            <FaCss3 />
            <p>CSS</p>
          </div>
          <div className="skill">
            <FaHtml5 />
            <p>HTML</p>
          </div>
          <div className="skill">
            <FaGitAlt />
            <p>Git</p>
          </div>
          <div className="skill">
            <SiGooglecloud />
            <p>Communication Skills</p>
          </div>
        </div>
      </section>

      {/* Download CV Section */}
      <section id="download-cv" className="download-cv-section">
        <a href="/Yemna_Mehmood_Portfolio (5).pdf" download className="download-cv-btn">
          Download My CV
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <ul>
          <li>Email: <a href="mailto:your.email@example.com">Yemnachohan50@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/Yemnamehmood" className="text-blue-500">GitHub Link</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/yemna-mehmood-75aa2422b/" className="text-blue-500">LinkedIn Profile</a></li>
        </ul>
      </section>
      <footer>
        <p>© 2024 Yemna Mehmood</p>
      </footer>
    </div>
  );
}
