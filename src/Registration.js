import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Registration = () => {
    const intialValues = { username: "", email: "", mobile: "", password: "" };
    const [formValues, setFormValues] = useState(intialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    // const [values, setValues] = useState([])
     const onHandleChange = (e) => {
        const { name, value } = e.target;    
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
        // setValues([...values, formValues]);
        // localStorage.setItem('lists', JSON.stringify(values))
        // setFormValues(intialValues);
        // console.log("successfully registration")
    }
    useEffect(() => {
            console.log(formErrors)
        if (Object.keys(formErrors.length === 0 && isSubmit)) {
            console.log(formValues);
        }
    }, [formErrors])
    const validate = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            error.username = "Username is required*";
        } else if (values.username.length < 4) {
            error.username = "Name must be more than 4 characters";
        }
        else if (values.username.length > 10) {
            error.username = "Name cannot exceed more than 10 characters";
        }
        if (!values.email) {
            error.email = "Email is required*";
        } else if (!regex.test(values.emails)) {
            error.emails = "This is not Valid Email formate*";}
            if (!values.password) {
                error.password = "Password. is required*";
            }
            if (!values.mobile) {
                error.mobile = "Mobile No. is required*";
            }else if (values.mobile.length < 10) {
                error.mobile = "Name must be more than 10 characters";
            }
            return error;
        }
        return (
            <div className=' d-flex justify-content-center mt-30'>
                <div className="border w-50">
                    <div className="form bg-light">
                        <h2 className='floatheading'><b>Registration</b></h2>
                        <form action="" onSubmit={handleSubmit} className='p-4'>
                            <div className="row g-2">
                                <div className="col-md">
                                    <label className="form-label">UserName:</label>
                                    <div className='form'>
                                        <input id="name" className="form-control input-height" name='username' type="text" placeholder="Your Name*"
                                            value={formValues.username}
                                            onChange={onHandleChange} />
                                    </div>
                                </div>
                            </div>
                            <p style={{color:"red"}}>{formErrors.username}</p>
                            <div className="row g-2">
                                <div className="col-md">
                                    <label className="form-label">Email:</label>
                                    <div className='form'>
                                        <input id="email" className="form-control input-height" name='email' type="email"
                                            placeholder="Your Email*"
                                            onChange={onHandleChange}
                                            value={formValues.email} />
                                    </div>
                                </div>
                            </div>
                            <p style={{color:"red"}}>{formErrors.email}</p>

                            <div className="row g-2">
                                <div className="col-md">
                                    <label className="form-label">Password:</label>
                                    <div className='form'>
                                        <input id="password " name="password" className="form-control  input-height" type="password"
                                            placeholder="Password*"
                                            onChange={onHandleChange}
                                            value={formValues.password} />
                                    </div>
                                </div>
                            </div>
                            <p style={{color:"red"}}>{formErrors.password}</p>
                            <div className="row g-2">
                                <div className="col-md">
                                    <label className="form-label">Mobile No.:</label>
                                    <div className='form'>
                                        <input id="mobile " name="mobile" className="form-control  input-height" type="text"
                                            placeholder="Mobile No*"
                                            onChange={onHandleChange}
                                            value={formValues.mobile} />
                                    </div>
                                </div>
                            </div>
                            <p style={{color:"red"}}>{formErrors.mobile}</p>


                            <p className="full-width">
                                <input type="submit" className="btn btn-primary mt-3 float" value="Register" />
                            </p>
                            <p className="text-dark text-center" >Already Register?
                                <Link className="text-dark mt-3" to="/login">Login Here</Link></p>

                        </form>
                    </div>


                </div>
            </div>
        )
    }
    export default Registration
