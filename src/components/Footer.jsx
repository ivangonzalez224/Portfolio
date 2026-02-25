import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import '../assets/styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Iván Gonzalez | Full Stack Engineer</p>
      <ul className="footer-social">
        <li><a className="footer-link" href="https://www.linkedin.com/in/iv%C3%A1n-gonzalez/" target="_blank" rel="noreferrer"><BsLinkedin /></a></li>
        <li><a className="footer-link" href="https://github.com/ivangonzalez224" target="_blank" rel="noopener noreferrer"><BsGithub /></a></li>
      </ul>
      <p id="footer-mail">
        <a href="mailto:ivan.gonzalezr224@gmail.com">
          <MdEmail />
          <span className="contact-text">&nbsp;&nbsp;Get in touch</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;