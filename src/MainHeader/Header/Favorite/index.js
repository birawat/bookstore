import React from 'react'
import { Link } from 'react-router-dom'

const Favorite = ({  wishlistValue}) => {

  let length = wishlistValue.length? wishlistValue.length :0;

  return (
    <div>
    <div className="cart">
    <Link to="/wishlist">
    <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end" >
    <div className="wishlist d-flex flex-row align-items-center justify-content-end">  
    <div className="wishlist_icon">
      <a href="/wishlist">
      <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png" alt=""/></a>
    <div className="cart_count" ><span>{length}</span></div>
      </div>
      <div className="cart_content">
        <div className="cart_text" style={{ margin: "-10px" }}>
          <a href="#">Wishlist</a>
        </div>
      </div>
      </div>
    </div>
    </Link>
  </div>
    </div>

  )
}
export default Favorite
