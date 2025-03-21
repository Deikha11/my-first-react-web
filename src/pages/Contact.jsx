function Contact() {
  return (
      <>
          {/* Contact Section */}
          <section className="contact-section">
              <div className="contact-container">
                  <div className="contact-info">
                      <h1>Contact Us</h1>
                      <p>Have any questions? Feel free to reach out to us.</p>
                      <div className="info-box">
                          <p><strong>Email:</strong> infohostez@gmail.com</p>
                          <p><strong>Phone:</strong> +123 456 789</p>
                          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
                      </div>
                  </div>

                  <div className="contact-form">
                      <h2>Send a Message</h2>
                      <form action="#" method="POST">
                          <input type="text" name="name" placeholder="Your Name" required />
                          <input type="email" name="email" placeholder="Your Email" required />
                          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                          <button type="submit">Send Message</button>
                      </form>
                  </div>
              </div>
          </section>

          {/* Location Section */}
          <section className="location-section">
              <h2>Our Location</h2>
              <div className="map-container">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31897.83075689061!2d45.3246976!3d2.064384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sso!4v1742556856283!5m2!1sen!2sso" 
                      width="100%" height="300" allowFullScreen loading="lazy"
                      title="Google Maps Location">
                  </iframe>
              </div>
          </section>
      </>
  );
}

export default Contact;
