import React from 'react'

export default function Seller() {
    
        return (
            <div className="d-flex justify-content-center mt-3">
            <div className="border w-25 ">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label" >Name</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Price</label>
                    <input type="Number" className="form-control" id="exampleFormControlInput1"placeholder="Price" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Books Image</label>
                    <input type="file" class="form-control" id="customFile" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col-lg">
                            <button type="submit" className="btn btn-primary mt-1 justify-content-center">Upload</button>
                        </div>
            </div>
        </div>
    )
}
