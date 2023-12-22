import '../../assets/styles/Headline.css';

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
      <img className="nav_left" />
      <div>
        <ul>
            <li>Team Collaboration</li>
            <li>Responsive Design</li>
        </ul>
      </div>
    </div> 
  </div>
);

export default Headline;