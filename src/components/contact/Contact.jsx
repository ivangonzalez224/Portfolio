import { useState } from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import '../../assets/styles/contact.css';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // 
    const response = await fetch(' ', {
      method: 'POST',
      body: JSON.stringify({
        fullName,
        email,
        message,
      }),
    });

    if (response.ok) {
      // Success
      alert('Your message has been sent!');
      setSubmitting(false);
      setFullName('');
      setEmail('');
      setMessage('');
    } else {
      // Error
      alert('There was an error sending your message. Please try again later.');
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-main">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-left">
            <span>I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat,
                    contact me directly or fill out the form and I will back to you soon.
            </span>
            <form onSubmit={handleSubmit}>
              <label htmlFor="fullName">Name</label>
              <input
                type="text"
                className="contact-input"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required      
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="contact-input"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required        
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="contact-input"
              name="message"
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required        
            />
            <button className="contact-submit-btn" type="submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        <div className="contact-right">
          <span id="contact-emailUp">EMAIL</span>
          <span>ivan.gonzalezr224@gmail.com</span>
          <div className="contact-social">
            <a className="social-link" href="https://www.linkedin.com/in/iv%C3%A1n-gonzalez/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a className="social-link" href="https://github.com/ivangonzalez224" target="_blank" rel="noreferrer"><BsGithub /></a>
          </div>
        </div>
      </div>
    </section>    
  );
};

export default Contact;