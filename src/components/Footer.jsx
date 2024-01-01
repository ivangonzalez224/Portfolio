import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Iván Gonzalez</p>
      <ul className="social-links">
        <a className="social-link" href="https://www.linkedin.com/in/iv%C3%A1n-gonzalez/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a className="social-link" href="https://github.com/ivangonzalez224" target="_blank" rel="noreferrer"><BsGithub /></a>
      </ul>
      <p id="footer-mail"><a href="mailto:ivan.gonzalezr224@gmail.com"><MdEmail /> Contact</a></p>
    </footer>
  );
};

export default Footer;