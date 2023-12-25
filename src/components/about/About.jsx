import '../../assets/styles/about.css';


const About = () => (
  <div className="about-main">
    <span id="about-title">ABOUT</span>
    <span>Get to know more about me</span>
    <div className="about-content">
      <div id="about-presentation">
        <span>
          Hello
        </span>
        <p>
          My name is Iván Gonzalez, and I am a pasionate Full Stack Web Developer who uses technology 
          to build engaging websites and applications that empower businesses. Whether you&apos;re launching 
          a new brand, streamlining operations, or reaching new audiences, 
          I&apos;m passionate about crafting solutions that make a real difference.
        </p>
        <p>
          Let&apos;s collaborate on your next project! Drop me a line on my contact page, or 
          let&apos;s have a coffee chat to discuss your ideas.
        </p>
        <button id="contact-btn">Contact me</button>
      </div>
      <div id="about-skills">
        <span>Skills</span>  
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React & Redux</li>
        </ul> 
        <ul>
          <li>Bootstrap</li>
          <li>Jest</li>
          <li>Ruby on Rails</li>
        </ul>
        <ul>
          <li>PostgreSQL</li>
          <li>Git</li>
        </ul> 
      </div>
    </div>  
  </div>
);

export default About;