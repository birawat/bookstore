
import React from 'react'

export default function Seller() {

const getName = (event) =>{
  let  name = event.target.value;
    console.log(name)
}
const getPrice = (event) =>{
    let  price = event.target.value;
      console.log(price)
  }
  const getCategory = (event) =>{
    let  category = event.target.value;
      console.log(category)
  }

  const getImage = (event) =>{
    let  image = event.target.url;
      console.log(image)
  }

    
const fetchValues = () =>{

}

        return (
            <div className="d-flex justify-content-center mt-3">
                
            <div className="border w-50 p-3 rounded bg-light">
            <h4 className='floatheading float-start rounded bg-light'>Sellers</h4>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label" >Name</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Book Name" 
                    onChange={getName}/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Price</label>
                    <input type="Number" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Book Price" 
                    onChange={getPrice}/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label" onChange={getCategory}>Category </label><br/>
                    <select style={{width:"-webkit-fill-available",height: "40px", color:"black"}}>
                        <option>Select Category</option>
                        <option>New Arrivals</option>
                        <option>Box Sets</option>
                        <option>Best Sellers</option>
                        <option>Fiction Books</option>
                        <option>Award Winners</option>                        
                    </select>
                    
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Books Image</label>
                    <input type="file" class="form-control" id="customFile" onChange={getImage}/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                </div>
                <div className="col-lg text-center">
                            <button type="submit" className="btn btn-primary mt-1 justify-content-center" onClick={fetchValues}>Upload</button>
                        </div>
            </div>
        </div>
    )
}
