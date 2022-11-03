import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {

    const intialValues = { password: "", email: "" };
    const [formValues, setFormValues] = useState(intialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [sucessLogin, setSucessLogin] = useState(false);
    const [user, setUser] = useState("")

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })

    }
    const onLogedin = () => {
        // setFormValues(intialValues);
    }
    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)

        let list = JSON.parse(localStorage.getItem('lists'))

        // list.map((post)=>{
        //     formValues.email===post.email||post.username&&formValues.password===post.password?


        // })
        let check = list.filter((post)=>
        formValues.email===post.email||formValues.username===post.username&&formValues.password===post.password)
       
       setUser(check[0].username)
       
     
    }

       

    

    const validate = (values) => {
        const errros = {}
        const regax = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
        if (!values.password) {
            errros.password = "password is required*";
        } else if (values.password.length < 4) {
            errros.password = "Name must be more than 4 characters";
        }
        else if (values.password.length > 10) {
            errros.password = "Name cannot exceed more than 10 characters*";
        }
        if (!values.email) {
            errros.email = "Email is required*";
        }
        return errros;
    }

    return (

        <div className=' d-flex justify-content-center mt-35'>

            <div className="border w-25 mt-5 bg-light">
                <div className="form">
                    <h2 className='floatheading'>
                        <b>Login</b>
                        </h2>
                    <form action="" className='p-4'>
                        <div className="row g-2">
                            <div className="col-md">
                                <label className="form-label">Email:</label>
                                <div className='form'>
                                    <input id="email" className="form-control input-height" name='email' type="text"
                                        placeholder="Your Email*"
                                        onChange={(e) => onHandleChange(e)}
                                        value={formValues.email} />
                                </div></div></div>
                        <p style={{ color: "red" }}>{formErrors.email}</p>
                        <div className="row g-2">
                            <div className="col-md">
                                <label className="form-label">Password:</label>
                                <div className='form'>
                                    <input id="name" className="form-control input-height" name='password' type="password" placeholder=" Your Password*"
                                        value={formValues.password}
                                        onChange={(e) => onHandleChange(e)} />
                                </div></div></div>
                        <p style={{ color: "red" }}>{formErrors.password}</p>
                        <p className="full-width">
                            <input type="submit" data-toggle="modal" onClick={(e) => handleSubmit(e)} className=" trigger-btn btn btn-primary mt-3 float" value="Login" />
                        </p>
                        <p className="text-dark float-end" >New To BooksMania?
                            <Link className="text-dark mt-3" to="/Registration">Register Here</Link></p>
                        {sucessLogin &&
                            <div id="myModal" className="modal fade ">
                                <div className="modal-dialog modal-confirm " style={{ marginTop: "150px" }}>
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="icon-box">
                                                <i className="material-icons">&#xE876;</i>
                                            </div>
                                            <h4 className="modal-title w-100">Thanks!</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p className="text-center">Login Successfully</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-success btn-block" data-dismiss="modal" onClick={onLogedin()}>OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>}

                    </form>
                </div>

            </div>
        </div>
    )
}
