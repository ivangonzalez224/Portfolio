import '../../assets/styles/Headline.css';
import { FaPlus } from "react-icons/fa";


const Headline = () => (
  <div className="head-main">
    <div id="head-presentation">
      <span>
        Hello, I am
      </span>
      <span id="head-name">Iván,</span>
      <span>
        a software developer crafting modern and aesthetically pleasing web sites.
      </span>
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