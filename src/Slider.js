import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Sdata from './Sdata';
const Slider = () => {
 
    return (
        <div>

        <Carousel>
            {Sdata.map((val) => {
              
                return (
                    <Carousel.Item>
                    <img
                        className={val.className}
                        src={val.imgsrc}
                        alt={val.alt}
                        width={val.width}
                        height={val.height}
                    />
                    </Carousel.Item>
                )
            })}
        </Carousel>
        </div>    )
}

export default Slider
