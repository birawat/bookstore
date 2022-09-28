import './Contact.css'
import React from 'react'

export default function Contact() {
    return (
        <div className="container contact p-4">           
            <div className="row">
                <div className="col-md-3 p-4 bg-warning">
                    <div className="contact-info ">
                        <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" className="mb-3"/>
                        <h2 className="mb-3">Contact Us</h2>
                        <h4>We would love to hear from you !</h4>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="contact-form">
                        <div className="form-group">
                            <label className="control-label col-sm-2 " for="fname">First Name:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control mt-3" id="fname" placeholder="Enter First Name" name="fname"/>
                            </div>                        
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2 mt-3" for="lname">Last Name:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control mt-3" id="lname" placeholder="Enter Last Name" name="lname"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2 mt-3" for="email">Email:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control mt-3" id="email" placeholder="Enter email" name="email"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2 mt-3" for="comment">Comment:</label>
                            <div className="col-sm-10">
                                <textarea className="form-control mt-3" rows="5" id="comment"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-default mt-3">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
