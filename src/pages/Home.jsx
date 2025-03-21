import React from 'react';
import Navigation from '../components/Navigation';
import "../styles.css"; 

function Home() {
  return (
<>


<section className="hero-section">
  <div className="hero-content">
    <h1>Create Reseller Hosting for Windows and Linux</h1>
    <div className="storage">
      <p>120 GB SSD Storage</p>
      <p>Free SSL Installation</p>
    </div>
    <button className="get-started-btn">Get Started</button>
  </div>
  <div className="hero-images">
    <img
      src="https://html.ditsolution.net/hostez/assets/images/inner-page/breadcumb_shape2.png"
      alt="Shape 2"
    />
    <img
      src="https://html.ditsolution.net/hostez/assets/images/inner-page/breadcumb_shape1.png"
      alt="Shape 1"
    />
  </div>
</section>





            <section className="features-section">
                <div className="feature">
                    <i className="fas fa-shield-alt"></i>
                    <h3>High Security Guarantee</h3>
                    
                </div>
                <div className="feature">
                    <i className="fas fa-bolt"></i>
                    <h3>Lighting Fast Storage</h3>
                    
                </div>
                <div className="feature">
                    <i className="fas fa-bolt"></i>
                   <h3>Lorem ipsum dolor sit.</h3>
                    
                </div>
                <div className="feature">
                    <i className="fas fa-bolt"></i>
                  
                    <h3>24/7 Dedicated Supports</h3>
                </div>
            </section>

            <section className="get-started-section">
                <div className="get-started-image">
                    <img src="https://html.ditsolution.net/hostez/assets/images/inner-page/about_thumb3.png" alt="Hosting" />
                </div>
                <div className="get-started-content">
                    <h2>Get Started Fast & Easily with Best Hosting</h2>
                    <p>Collaboratively formulate principle-centered users and revolutionary human capital. Progressively evolve domain and hosting pontificate cooperative e-business whereas revolutionary.</p>
                    <ul>
                        <li><i className="fas fa-check"></i> Increased Performance</li>
                        <li><i className="fas fa-check"></i> 100% Up time Guarantee</li>
                        <li><i className="fas fa-check"></i> Reseller Control Panels</li>
                        <li><i className="fas fa-check"></i> Unlimited Bandwidth</li>
                    </ul>
                    <button className="get-started-now-btn">Get Started Now</button>
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
};



export default Home;
