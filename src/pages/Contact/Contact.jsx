import React from 'react';
import './Contact.css'; // Importing the CSS file

const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i className="fa-solid fa-paper-plane"></i> ramaiahpadala888@gmail.com</p>
                        <p><i className="fa-solid fa-phone"></i> 8897889127</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/davidramaiahp/"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/davidramaiahp/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/davidramaiahp"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <a href="images/David_CV.pdf" download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
