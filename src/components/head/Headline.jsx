import '../../assets/styles/Headline.css';
import { FaPlus } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";


const Headline = () => (
  <div className="head-main" id="home">
    <div id="head-presentation">
      <span>
        Hello, I am
      </span>
      <span id="head-name">Iván,</span>
      <span>
        a software developer crafting modern and aesthetically pleasing web sites.
      </span>
      <div className="head-social">
        <a className="head-link" href="https://www.linkedin.com/in/iv%C3%A1n-gonzalez/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a className="head-link" href="https://github.com/ivangonzalez224" target="_blank" rel="noreferrer"><BsGithub /></a>
      </div>
    </div>
    <div id="head-photo">
      <img className="head-cart" src=" " alt="cartoon photo" /> 
      <ul>
        <li><FaPlus className="head-plus"/>Team Collaboration</li>
        <li><FaPlus className="head-plus"/>Responsive Design</li>
      </ul> 
    </div> 
  </div>
);

export default Headline;