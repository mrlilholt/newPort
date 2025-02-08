import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-intro">
        I’d love to hear from you! Fill out the form below or send a direct email to 
        <strong> addison.lilholt@gmail.com</strong>.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />

        {/* Name field */}
        <div className="form-group">
          <label htmlFor="name" className="contact-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-input"
            required
          />
        </div>

        {/* Email field */}
        <div className="form-group">
          <label htmlFor="email" className="contact-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-input"
            required
          />
        </div>

        {/* Message field */}
        <div className="form-group">
          <label htmlFor="message" className="contact-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="contact-textarea"
            rows="5"
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="contact-btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;
