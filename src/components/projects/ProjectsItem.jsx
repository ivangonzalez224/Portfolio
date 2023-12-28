import PropTypes from 'prop-types';
import '../../assets/styles/projects.css';

const ProjectsItem = (
  {
    projectImage, projectName, tech1, tech2, tech3, projectId,
  },
) => (
  <div className="project-item">
    <span>{projectName}</span>
    <div className="project-img" style={{ backgroundImage: `url(${projectImage})` }}> </div>
    <ul className="project-tech">
      <li>{tech1}</li>
      <li>{tech2}</li>
      <li>{tech3}</li>
    </ul>
  </div>
);

ProjectsItem.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  tech1: PropTypes.string.isRequired,
  tech2: PropTypes.string.isRequired,
  tech3: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
};
export default ProjectsItem;