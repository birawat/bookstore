import './Contact.css'
import React, { useEffect, useState } from 'react'

export default function Contact() {
    const initialValues = { firstname: "", lastname: "", emails: "" };
    const [formValue, setFormValue] = useState(initialValues);
    const [formerror, setFormerror] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };
    const handleSubmit = (e) => {
        setFormerror(validate(formValue));
        setIsSubmit(true)

    };
    useEffect(() => {
      
        if (Object.keys(formerror).length === 0 && isSubmit) {
     
        }
    }, [formerror])
    const validate = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstname) {
            error.firstname = "First name is required*";
        }
        if (!values.lastname) {
            error.lastname = "Last name is required*";
        }
        if (!values.emails) {
            error.emails = "email name is required*";
        } else if (!regex.test(values.emails)) {
            error.emails = "This is not Valid Email formate*";
        }
        return error;
    }
    return (
        <div className="container contact p-4">
            <div className="row">
                <div className="col-md-3 p-4 bg-warning">
                    <div className="contact-info ">
                        <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
                        <h2>Contact Us</h2>
                        <h4>We would love to hear from you !</h4>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="contact-form">
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="firstname">First Name:</label>
                            <div className="col-sm-10 mt-1">
                                <input type="text"
                                    className="form-control"
                                    id="firstname"
                                    placeholder="Enter First Name"
                                    name="firstname"
                                    onChange={handleChange} />
                            </div>
                            <p className='check'>{formerror.firstname}</p>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="lastname">Last Name:</label>
                            <div className="col-sm-10 mt-1">
                                <input type="text"
                                    className="form-control"
                                    id="lastname"
                                    placeholder="Enter Last Name"
                                    name="lastname"
                                    onChange={handleChange} />
                            </div>
                            <p className='check'>{formerror.lastname}</p>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="emails">Email:</label>
                            <div className="col-sm-10 mt-1">
                                <input type="email" className="form-control" id="emails" placeholder="Enter email" name="emails" onChange={handleChange} />
                            </div>
                            <p className='check'>{formerror.emails}</p>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="comment">Comment:</label>
                            <div className="col-sm-10 mt-1">
                                <textarea className="form-control" rows="5" id="comment"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10 mt-3">
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
