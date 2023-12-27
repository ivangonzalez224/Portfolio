import Headline from '../../head/Headline';
import About from '../../about/About';
import ProjectsList from '../../projects/ProjectsList';

const Home = () => (
    <div className="main_home">
      <Headline />
      <About />
      <ProjectsList />
    </div>
  );
  
  export default Home;