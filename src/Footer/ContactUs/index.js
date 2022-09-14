import './Contact.css'
import React from 'react'


const Contact = () => {
    return (
        <>
            <div class="contain">
                <div class="wrapper">
                    <div class="form">
                        <h4><b>Contact Us</b></h4>
                        <h2 class="form-headline">Please fill up the form below to send us a message. We will contact you very soon.</h2>
                        <form action="">
                            <p>
                                <input id="name" class="form-input" type="text" placeholder="Your Name*" />
                                <small class="name-error"></small>
                            </p>
                            <p>
                                <input id="email" class="form-input" type="email" placeholder="Your Email*" />
                                <small class="name-error"></small>
                            </p>
                            <p class="full-width">
                                <input id="company-name" class="form-input" type="text" placeholder="Company Name*" required />
                                <small></small>
                            </p>
                            <p class="full-width">
                                <textarea minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
                                <small></small>
                            </p>
                            <p class="full-width">
                                <input type="checkbox" id="checkbox" name="checkbox" /> Yes, I would like to receive communications by call / email .
                            </p>
                            <p class="full-width">
                                <input type="submit" class="submit-btn" value="Submit" />
                             
                            </p>
                        </form>
                    </div>

                    <div class="contacts contact-wrapper">

                        <ul>
                            <li>We've driven online revenues of over <span class="highlight-text-grey">$2
                                billion</span> for our clients. Ready to know
                                how we can help you?</li>
                            <span class="hightlight-contact-info">
                                <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> info@demo.com</li>
                                <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+91 11 1111 2900</span></li>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
