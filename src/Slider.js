import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <Carousel>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg"
                    alt="First slide"
                    width='600px'
                    height='400px'
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg"
                    alt="Second slide"
                    width='600px'
                    height='400px'
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg"
                    alt="Third slide"
                    width='600px'
                    height='400px'
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/124384.jpg"
                    alt="Fourth slide"
                    width='600px'
                    height='400px'
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg"
                    alt="Fifth slide"
                    width='600px'
                    height='400px'
                />
            </Carousel.Item>

        </Carousel>
    )
}

export default Slider
