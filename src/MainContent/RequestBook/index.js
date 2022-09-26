import React from 'react'
import './RequestBook.css'

export default function RequestBook() {
    return (
        <div className=' d-flex justify-content-center mt-30'>            
            <div className="border w-75">
            <h4 className='floatheading'>RequestBook</h4>
                <form className='p-4'>
                    <h6>Please fill up the form below to Request a Book. We will inform you as soon as the book is available.</h6>
                    <br/>
                    <div className="row g-2">
                        <div className="col-md">
                            <label className="form-label">ISBN1:</label>
                            <div className="form">
                                <input type="text" className="form-control input-height" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="col-md">
                            <label for="exampleInputEmail1" className="form-label">Book Title:</label>
                            <div className='form'>
                                <input type="text" className="form-control input-height" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row g-2">
                        <div className="col-md">
                            <label for="exampleInputEmail1" className="form-label">Author:</label>
                            <div className="form">
                                <input type="text" className="form-control input-height" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-md">
                            <label for="exampleInputEmail1" className="form-label">Quantity:</label>
                            <div className="form">
                                <input type="text" className="form-control input-height " id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row g-2" >
                        <div className="col-md">
                            <label for="exampleInputEmail1" className="form-label">Email Id::</label>
                            <div className="form">
                                <input type="text" className="form-control input-height float-start " style={{ width: "74%" }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <button type="submit" className="btn btn-danger " style={{ height: "35px", width: "24%", marginLeft: "6px" }}>Verify Email</button>

                            </div>
                        </div>
                        <div className="col-md">
                            <label for="exampleInputEmail1" className="form-label">Phone/Mobile:</label>
                            <div className="form">
                                <input type="text" className="form-control input-height" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="col-lg">
                            <button type="submit" className="btn btn-primary mt-3 float-end">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
