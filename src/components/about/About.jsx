import '../../assets/styles/about.css';


const About = () => (
  <div className="about-main" id="about">
    <span id="about-title">ABOUT</span>
    <span id="about-subtitle">Engineering solutions with a Product Mindset</span>
    <div className="about-content">
      <div id="about-presentation">
        <span>Professional Profile</span>
        <p>
          I am a <strong>Senior Full Stack Engineer</strong> and <strong>Product Developer</strong> with a track record of building scalable mobile and web applications. My approach goes beyond writing code; I focus on architecting solutions that drive business growth and optimize user experiences through cutting-edge technology, including <strong>AI implementation</strong> and robust backend systems.
        </p>
        <p>
          With experience leading technical projects and mentoring developers, I specialize in transforming complex requirements into high-performance products. Whether it's a mobile ecosystem for a specialized market or a high-traffic web platform, I ensure every line of code adds real value.
        </p>
      </div>
      <div id="about-skills">
        <span>Core Tech Stack</span>  
        <ul>
          <li><strong>Frontend:</strong> React.js, TypeScript, TailwindCSS, Bootstrap</li>
          <li><strong>Mobile:</strong> React Native (Bare Workflow, AI Vision)</li>
          <li><strong>Backend:</strong> Ruby on Rails, Python (FastAPI), PHP</li>
          <li><strong>Database & Dev:</strong> PostgreSQL, MySQL, Git, Docker, Jest</li>
        </ul> 
      </div>
    </div>  
  </div>
);

export default About;