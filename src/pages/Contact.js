import React from 'react';
function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <label>Name: <input type="text" /></label><br />
        <label>Email: <input type="email" /></label><br />
        <label>Message: <textarea /></label><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
