import {React,useState, useEffect} from 'react'
import axios from 'axios'

import './Home.css'
import Slider from '../../Slider'
const Home = () => {
    const [myData, setMyData] = useState()
    const [book, setBook] = useState("newArrivals")
    async function fetchMyAPI() {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
        setMyData(response.data.items)
    }
    useEffect(() => {
         fetchMyAPI()        
    }, [setBook])
    return (
        <div >
        <Slider/>
        <div className="container-fluid flex-grow-1 ">
        <div className="row py-5">
          <div className="col-lg-12  text-white text-center">
          
            {
                myData?.map((post, index) => {
              
                    return (
                        <>
                        <div key={index}>
                        <div  className="col-3 " class='col3'>
                        <div className="card" >
                        <div style={{ marginTop: '10px'}}>
                            <img className="card-img-top" src={post.volumeInfo.imageLinks.thumbnail} alt="books"
                                class='img'/></div>
                                <div className="card-body">
                                    <h5 className="card-title" class='title'>{post.volumeInfo.title}</h5>
                                    
                                </div>
                            </div>
                            </div>
                            </div>
                            </>
                            )
                })
            }

            </div>
          </div>
          </div>
        </div>

    )
}

export default Home
