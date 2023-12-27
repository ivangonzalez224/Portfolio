import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectsItem from './ProjectsItem';
import { getProjects } from '../../redux/projects/ProjectsSlice';
//import '../../assets/styles/projects.css';

const ProjectsList = () => {
  const dispatch = useDispatch();
  const { projectItems } = useSelector((store) => store.projects);
  useEffect(() => {
    if (projectItems.length === 0) {
      dispatch(getProjects());
    }
  });

  return (
    <div className="projects-main" id="projects">
      <h2>Latest Projects</h2>
      <div className="projects-filter">   
        <button type="button" >All</button>
        <button type="button" >React</button>
        <button type="button" >Ruby on Rails</button>
      </div>
      <div className="projects-list">
      {projectItems.map((project) => (
          <ProjectsItem
            key={project.id}
            projectId={project.id}
            projectName={project.name}
            projectImage={project.image}
            tech1={project.tech1}
            tech2={project.tech2}
            tech3={project.tech3}
          />
        ))}
      </div>
    </div>
  )
};

export default ProjectsList;