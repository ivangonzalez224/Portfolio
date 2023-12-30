import Headline from '../../head/Headline';
import About from '../../about/About';
import ProjectsList from '../../projects/ProjectsList';
import Contact from '../../contact/Contact';

const Home = () => (
    <div className="main_home">
      <Headline />
      <About />
      <ProjectsList />
      <Contact />
    </div>
  );
  
  export default Home;