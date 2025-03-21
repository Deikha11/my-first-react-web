function About() {
    return (
      <>
     
      <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://img.freepik.com/premium-photo/icon-illustration-software-developer_853677-72636.jpg"
            alt="About Us"
          />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are passionate about delivering top-notch hosting solutions for both Windows and Linux environments.
            Our mission is to provide reliable, secure, and scalable services that empower businesses and individuals
            to succeed in the digital world.
          </p>
          <p>
            With a team of experienced professionals, we ensure high performance, 24/7 support, and user-friendly
            management tools that make your hosting experience seamless and stress-free.
          </p>
          <button className="about-button">Learn More</button>
        </div>
      </div>
    </section>


    <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h3>About Us</h3>
                        <p>We provide the best hosting solutions for your business needs. Our services are reliable, secure, and scalable.</p>
                    </div>
                    <div className="footer-section links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h3>Contact Us</h3>
                        <p>Email: info@hostez.com</p>
                        <p>Phone: +123 456 7890</p>
                        <p>Address: 123 Hosting Street, Tech City</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} Hostez. All rights reserved.
                </div>
            </footer>
    </>
    );
  }
  
  export default About;