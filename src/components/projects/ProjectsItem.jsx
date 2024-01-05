import PropTypes from 'prop-types';

const ProjectsItem = (
  {
    projectImage, projectName, tech1, tech2, tech3, backImg, projectLive, projectGithub,
  },
) => (
  <div className="project-item">
    <div id="backProjectItem" style={{ backgroundImage: `url(${backImg})` }}>
      <div id="itemProjectBtn">
        <a href={projectLive} target="_blank" rel="noreferrer">Live Demo</a>
        <a href={projectGithub} target="_blank" rel="noreferrer">Source Code</a>
      </div>
    </div>
    
    <div id="itemContent">
      <span>{projectName}</span>
      <div className="project-img" >
        <img
          src={projectImage}
          alt={projectName}
        />
      </div>
      <ul className="project-tech">
        <li>{tech1}</li>
        <li>{tech2}</li>
        <li>{tech3}</li>
      </ul>
    </div>
  </div>
);

ProjectsItem.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  backImg: PropTypes.string.isRequired,
  tech1: PropTypes.string.isRequired,
  tech2: PropTypes.string.isRequired,
  tech3: PropTypes.string.isRequired,
  projectLive: PropTypes.string.isRequired,
  projectGithub: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
};
export default ProjectsItem;