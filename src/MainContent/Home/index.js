import React from 'react'

import './Home.css'
import Sliders from '../../Sliders'
import { HomeNavbar } from '../../HomeNavbar'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AllApi } from '../../AllApi'

const Home = () => {

  const apiData = AllApi();

console.log(apiData)


  //    const [myData, setMyData] = useState()
  // async function fetchMyAPI() {

  //  const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Books")

  //     setMyData(response.data.items)
  // }
  // useEffect(() => {

  //     if(!myData){
  //         fetchMyAPI()
  //     }
  // }, [myData])



  //slider 
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className='home'>
      <Sliders />
      <hr />
      <HomeNavbar />
      <hr />
      <h2> <span id="ctl00_phBody_NewArrival_lblHeaderTitle">Now Trending</span> </h2>
      <Slider {...settings}>
        {
          apiData[0]?.data.map((post) => {
            return (
              <div>
                <div className="col-3 col3 w-100 m-3 ">
                  <div className="card" >
                    <div className='divimage mt-2'>
                      <img className="img card-img-top " src={post.imageLinks ? post.imageLinks : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="..."
                      /></div>
                    <div className="card-body">
                    <p className='p1'><b>{post.name}</b></p>
                      <p className='p1'><b>{post.description}</b></p>
                      <p className='p1'><b>{post.category}</b></p>
                      <div className='div'><b><h5 className='price'>{post.isAvailable}</h5></b></div>
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
    </div>

  )
}

export default Home
