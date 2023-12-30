import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default Contact;