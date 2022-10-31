import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Registration.css'

const Registration = ({values,setValues,formValues,setFormValues,intialValues}) => {
 
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
  

    let name, value;


    const onHandleChange = (e) => {
        //const { name, value } = e.target;
        name = e.target.name;
        value = e.target.value;
        setFormValues({ ...formValues, [name]: value })
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmit(true)
       
        setFormErrors(validate(formValues))
         values.push(formValues)
       // setValues([...values, formValues]);
       
        localStorage.setItem('lists', JSON.stringify(values))
       
        setFormValues(intialValues);


    }

    useEffect(() => {

        if (Object.keys(formErrors.length === 0 && isSubmit)) {
         
        }
    }, [formErrors])

    const validate = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            error.username = "Username is required";
        } else if (values.username.length < 4) {
            error.username = "Name must be more than 4 characters";
        }
        else if (values.username.length > 10) {
            error.username = "Name cannot exceed more than 10 characters";
        }
        if (!values.email) {
            error.email = "Email is required";
        } else if (!regex.test(values.email)) {
            error.email = "This is not Valid Email formate*";
        }
        if (!values.password) {
            error.password = "Password. is required";
        } else if (values.password.length < 5) {
            error.password = "Password must be more than 5 characters";
        }
        if (!values.mobile) {
            error.mobile = "Mobile No. is required";
        } else if (values.mobile.length > 10) {
            error.mobile = "Mobile must be more than 10 characters";
        }
        setIsSubmit(true)
        return error;

    }
    return (
        <div className=' d-flex justify-content-center mt-30'>
            <div className="border w-50">
                <div className="form bg-light">
                    <h2 className='floatheading'><b>Registration</b></h2>

                    <form action="" onSubmit className='p-4'>
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
                        <p>{formErrors.username}</p>
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
                        <p>{formErrors.email}</p>

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
                        <p>{formErrors.password}</p>
                        <div className="row g-2">
                            <div className="col-md">
                                <label className="form-label">Mobile No.:</label>
                                <div className='form'>
                                    <input id="mobile " name="mobile" className="form-control  input-height" type="Number"
                                        placeholder="Mobile No*"
                                        onChange={onHandleChange}
                                        value={formValues.mobile} />
                                </div>
                            </div>
                        </div>
                        <p>{formErrors.mobile}</p>
                        <p className="full-width">

                            <a className="btn btn-primary trigger-btn" data-toggle="modal" onClick={handleSubmit} href={formErrors.length === 0 && "#myModal"}
                            >Register</a>
                            <div className="text-center">
                            </div>
                            <div id="myModal" className="modal fade">
                                <div className="modal-dialog modal-confirm">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="icon-box">
                                                <i className="material-icons">&#xE876;</i>
                                            </div>
                                            <h4 className="modal-title w-100">Thank You!</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p className="text-center">Your Registration has been Successfully. Now You can Login.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </p>
                        <p className="text-dark text-center" >Already Register?
                            <Link className="text-dark mt-3" to="/login">Login Here</Link>
                        </p>

                    </form>
                </div>


            </div>
        </div>
    )
}
export default Registration;
