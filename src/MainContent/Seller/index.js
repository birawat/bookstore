
import axios from 'axios';
import { React, useState } from 'react'

export default function Seller() {
    const intialValues = { name: "", imageLinks: "", price: "", description: "", category: "" };
    const [formValues, setFormValues] = useState(intialValues)
    const [values, setValues] = useState([])
    let base64;
    //  let value,name ;
    const onFileChange = async (event) => {
        const file = event.target.files[0];
        base64 = await convertBase64(file)
       
        formValues.imageLinks = base64;
    }
    const onHandleChange = (e) => {
        
    
        const { value, name } = e.target

        //name = e.target.name;
        setFormValues({ ...formValues, [name]: value })
       
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const fetchValues = async () => {
        
   
        const { name, imageLinks, price, description, category } = formValues
       
        const res = await fetch("http://localhost:5000/createNewBook", {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                { name, imageLinks, price, description, category }
            )
        })
        const resp = await res.json()
        alert("save successfully")
        setFormValues(intialValues);
    }

    return (
        <div className="d-flex justify-content-center mt-3">

            <div className="border w-50 p-3 rounded bg-light">
                <h4 className='floatheading float-start rounded'>Sellers</h4>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label" >Name</label>
                    <input type="email" className="form-control" id="bname" placeholder="Enter the Book Name"
                        name='name'
                        value={formValues.name}
                        onChange={onHandleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Price</label>
                    <input type="Number" className="form-control" id="price" placeholder="Enter the Book Price"
                        name='price'
                        value={formValues.price}
                        onChange={onHandleChange} />
                </div>
                <div className="mb-3">
                    <label id='category' className="form-label"
                    >Category </label><br />
                    <select style={{ width: "-webkit-fill-available", height: "40px", color: "black" }}
                        name='category'
                        value={formValues.category}
                        onChange={onHandleChange}>
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
                    <input type="file" className="form-control" id="images"
                        name='images'

                        src={formValues.imageLinks}
                        onChange={onFileChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control"
                        id="description" rows="3" placeholder="Message"
                        name='description'
                        value={formValues.description}
                        onChange={onHandleChange}></textarea>
                </div>
                <div className="col-lg text-center">
                    <button type="submit" className="btn btn-primary mt-1 justify-content-center" onClick={fetchValues}>Upload</button>
                </div>
            </div>
        </div>
    )
}
