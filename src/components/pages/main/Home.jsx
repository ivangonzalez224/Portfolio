import { useRef } from 'react';
import Headline from '../../head/Headline';
import About from '../../about/About';
import ProjectsList from '../../projects/ProjectsList';
import Contact from '../../contact/Contact';
import NavBar from '../../navbar';
import '../../../assets/styles/NavBar.css';

const Home = () => {
  const headRef =  useRef();
  const aboutRef =  useRef();
  const projectsRef =  useRef();
  const contactRef =  useRef();
  const sections = [headRef, aboutRef, projectsRef, contactRef];

  return (
    <div className="main_home">
      <NavBar sections={sections} />
      <section ref={headRef} id="homer">  
        <Headline />
      </section>
      <section ref={aboutRef} id="aboutr">
        <About />
      </section>
      <section ref={projectsRef} id="projectsr">
        <ProjectsList />
      </section>
      <section ref={contactRef} id="contactr">
        <Contact/>
      </section>
    </div>
  )
};

export default Home;