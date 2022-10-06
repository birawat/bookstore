import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Home.css'
import Slider from '../Slider'
import { HomeNavbar } from '../HomeNavbar'
const Home = () => {
    const [myData, setMyData] = useState([])
    async function fetchMyAPI() {
        console.log("fetchapi")
        const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Books")
        console.log(response.data.items)
        setMyData(response.data.items)
    }
    useEffect(() => {
        if (!myData) {
            fetchMyAPI()
        }
    }, [myData])
    return (
        <div >
            <Slider />
            <HomeNavbar />
            <div className="container-fluid flex-grow-1 ">
                <div className="row py-5">
                    <div className="col-lg-12  text-white text-center">
                        {
                            myData?.map((post, index) => {
                                return (
                                    <>
                                        <div key={index}>
                                            <div className="col-3 " class='col3'>
                                                <div className="card" >
                                                    <div style={{ marginTop: '10px' }}>
                                                        <img className="card-img-top" src={post.volumeInfo.imageLinks.thumbnail} alt="..." class='img' />
                                                    </div>
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
