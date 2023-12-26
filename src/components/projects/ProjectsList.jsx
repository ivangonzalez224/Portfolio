import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectItem from './ProjectItem';
import { getProjects } from '../../redux/projects/ProjectsSlice';
import '../../assets/styles/projects.css';


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
        <button type="button" onClick="filterProjects('all')">All</button>
        <button type="button" onClick="filterProjects('react')">React</button>
        <button type="button" onClick="filterProjects('ruby-on-rails')">Ruby on Rails</button>
      </div>
      <div className="projects-list">
      {projectItems.map((project) => (
          <ProjectItem
            key={project.id}
            projectId={project.id}
            projectName={project.name}
            projectImage={project.image}
          />
        ))}
      </div>
    </div>
  )
};

export default ProjectsList;