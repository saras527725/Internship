import React, { useState } from 'react';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Handle form submission (e.g., send data to server)
      alert('Form submitted!');
      
      // Reset the form fields after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
<div className="contact">
  <h1>Contact Us</h1>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your full name"
        required
      />
      {formErrors.name && <p className="error">{formErrors.name}</p>}
    </div>
    <div>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
      {formErrors.email && <p className="error">{formErrors.email}</p>}
    </div>
    <div>
      <label htmlFor="message">Message: </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
        required
      />
      {formErrors.message && <p className="error">{formErrors.message}</p>}
    </div>
    <div>
      <button type="submit">Send</button>
    </div>
  </form>
</div>
  );
}

export default Contact;
