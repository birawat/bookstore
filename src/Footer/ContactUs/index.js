import './Contact.css'
import React from 'react'


const Contact = () => {
    return (
        <>
            <div className="contain">
                <div className="wrapper">
                    <div className="form">
                        <h4><b>Contact Us</b></h4>
                        <h2 className="form-headline">Please fill up the form below to send us a message. We will contact you very soon.</h2>
                        <form action="">
                            <p>
                                <input id="name" className="form-input" type="text" placeholder="Your Name*" />
                            </p>
                            <p>
                                <input id="email" className="form-input" type="email" placeholder="Your Email*" />
                            </p>
                            <p className="full-width">
                                <input id="company-name" className="form-input" type="text" placeholder="Company Name*" required />

                            </p>
                            <p className="full-width">
                                <textarea minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
                            </p>
                            <p className="full-width">
                                <input type="checkbox" id="checkbox" name="checkbox" /> Yes, I would like to receive communications by call / email .
                            </p>
                            <p className="full-width">
                                <input type="submit" className="submit-btn" value="Submit" />
                            </p>
                        </form>
                    </div>

                    <div className="contacts contact-wrapper">
                        <ul className='ul'>
                            <li>We've driven online revenues of over <span className="highlight-text-grey">$2
                                billion</span> for our clients. Ready to know
                                how we can help you?</li>
                            <span className="hightlight-contact-info">
                                <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i> info@demo.com</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+91 11 1111 2900</span></li>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
