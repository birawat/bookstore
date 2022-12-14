import React from 'react'
import { Link } from 'react-router-dom';
export default function Favorite() {
    
  return (
    <div>
      <div div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
            <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                <div className="wishlist_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png" alt="" /></div>
                <Link className="wishlist_content" to="/Wishlist">
                    <div className="wishlist_text"><a href="" >Wishlist</a></div>
                    <div className="wishlist_count">10</div>
                </Link>
            </div>
        </div>
    </div>
  )
}
