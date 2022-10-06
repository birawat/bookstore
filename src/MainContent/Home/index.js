import { React, useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'
import Sliders from '../../Sliders'
import { HomeNavbar } from '../../HomeNavbar'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AllApi } from '../../AllApi'

const Home = () => {
    const [myData, setMyData] = useState()
    const [book, setBook] = useState("books")
    async function fetchMyAPI() {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
        setMyData(response.data.items)
    }
    useEffect(() => {
        fetchMyAPI()
    }, [setBook])
    return (

        <div className='home'>
            <Sliders />
            <hr />
            <HomeNavbar />
            <hr />
            <h2> <span id="ctl00_phBody_NewArrival_lblHeaderTitle">Now Trending</span> </h2>
            <Slider {...settings}>
                {
                    apiData[0]?.data.items.map((post) => {

                        return (
                            <div>
                                <div className="col-3 col3 w-100 m-3 ">
                                    <div className="card" >
                                        <div className='divimage mt-2'>
                                            <img className="img card-img-top " src={post.volumeInfo.imageLinks ? post.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="..."
                                            /></div>
                                        <div className="card-body">
                                            <h5 className="card-title title"><b>{post.volumeInfo.title.length >= 20 ? post.volumeInfo.title.substring(0, 20) + "..." : post.volumeInfo.title}</b></h5>
                                            <p className='p1'><b>{post.volumeInfo.publishedDate}</b></p>
                                            <p className='p1'><b>{post.volumeInfo.printType}</b></p>
                                            <div className='div'><b><h5 className='price'>₹518</h5></b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <br />
            </Slider>
            <Sliders />
            <hr />
            <h2> <span id="ctl00_phBody_NewArrival_lblHeaderTitle">Box Sets</span> </h2>
            <Slider {...settings}>
                {
                    apiData[1]?.data.items.map((posts) => {

                        return (
                            <div>
                                <div className="col-3 col3 w-100 m-3 mh-100">
                                    <div className="card" >
                                        <div className='divimage mt-2'>
                                            <img className="card-img-top" src={posts.volumeInfo.imageLinks ? posts.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="..."
                                                class='img' />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title title"><b>{posts.volumeInfo.title.length >= 20 ? posts.volumeInfo.title.substring(0, 20) + "..." : posts.volumeInfo.title}</b></h5>
                                            <p className='p1'><b>{posts.volumeInfo.publishedDate}</b></p>
                                            <p className='p1'><b>{posts.volumeInfo.printType}</b></p>
                                            <div className='div'><b><h5 className='price'>₹518</h5></b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <hr />
            <h2> <span id="ctl00_phBody_NewArrival_lblHeaderTitle">New Arrivals</span> </h2>
            <Slider {...settings}>
                {
                    apiData[2]?.data.items.map((posts) => {

                        return (
                            <div>
                                <div className="col-3 col3 w-100 m-3 mh-100">
                                    <div className="card" >
                                        <div className='divimage mt-2'>
                                            <img className="card-img-top" src={posts.volumeInfo.imageLinks ? posts.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="..."
                                                class='img' /></div>
                                        <div className="card-body">
                                            <h5 className="card-title title"><b>{posts.volumeInfo.title.length >= 20 ? posts.volumeInfo.title.substring(0, 20) + "..." : posts.volumeInfo.title}</b></h5>
                                            <p className='p1'><b>{posts.volumeInfo.publishedDate}</b></p>
                                            <p className='p1'><b>{posts.volumeInfo.printType}</b></p>
                                            <div className='div'><b><h5 className='price'>₹518</h5></b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <hr />
            <h2> <span id="ctl00_phBody_NewArrival_lblHeaderTitle">Award Winners</span> </h2>
            <Slider {...settings}>
                {
                    apiData[3]?.data.items.map((posts) => {

                        return (
                            <div>
                                <div className="col-3 col3 w-100 m-3 mh-100">
                                    <div className="card" >
                                        <div className='divimage mt-2'>
                                            <img className="card-img-top" src={posts.volumeInfo.imageLinks ? posts.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="..."
                                                class='img' /></div>
                                        <div className="card-body">
                                            <h5 className="card-title title"><b>{posts.volumeInfo.title.length >= 20 ? posts.volumeInfo.title.substring(0, 20) + "..." : posts.volumeInfo.title}</b></h5>
                                            <p className='p1'><b>{posts.volumeInfo.publishedDate}</b></p>
                                            <p className='p1'><b>{posts.volumeInfo.printType}</b></p>
                                            <div className='div'><b><h5 className='price'>₹518</h5></b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <hr />
            <h2> <span id="ctl00_phBody_NewArrival_lblHeaderTitle">Best Sellers</span> </h2>
            <Slider {...settings}>
                {
                    apiData[4]?.data.items.map((posts) => {

                        return (
                            <div>
                                <div className="col-3 col3 w-100 m-3 mh-100">
                                    <div className="card" >
                                        <div className='divimage mt-2'>
                                            <img className="card-img-top" src={posts.volumeInfo.imageLinks ? posts.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="..."
                                                class='img' /></div>
                                        <div className="card-body">
                                            <h5 className="card-title title"><b>{posts.volumeInfo.title.length >= 20 ? posts.volumeInfo.title.substring(0, 20) + "..." : posts.volumeInfo.title}</b></h5>
                                            <p className='p1'><b>{posts.volumeInfo.publishedDate}</b></p>
                                            <p className='p1'><b>{posts.volumeInfo.printType}</b></p>
                                            <div className='div'><b><h5 className='price'>₹518</h5></b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <hr />
            <h2> <span id="ctl00_phBody_NewArrival_lblHeaderTitle">Fiction Books</span> </h2>
            <Slider {...settings}>
                {
                    apiData[5]?.data.items.map((posts) => {

                        return (
                            <div>
                                <div className="col-3 col3 w-100 m-3 mh-100">
                                    <div className="card" >
                                        <div className='divimage mt-2'>
                                            <img className="card-img-top" src={posts.volumeInfo.imageLinks ? posts.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="..."
                                                class='img' /></div>
                                        <div className="card-body">
                                            <h5 className="card-title title"><b>{posts.volumeInfo.title.length >= 20 ? posts.volumeInfo.title.substring(0, 20) + "..." : posts.volumeInfo.title}</b></h5>
                                            <p className='p1'><b>{posts.volumeInfo.publishedDate}</b></p>
                                            <p className='p1'><b>{posts.volumeInfo.printType}</b></p>
                                            <div className='div'><b><h5 className='price'>₹518</h5></b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>

        </div>

    )
}

export default Home