import React from 'react'
const Favorite = () => {
    const handelAccount =()=>{
        
    }
    return (
        <>
        <div div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
            <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                <div className="wishlist_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png" alt="" /></div>
                <div className="wishlist_content">
                    <div className="wishlist_text"><a href="#" onClick={handelAccount}>Wishlist</a></div>
                    <div className="wishlist_count">10</div>
                </div>
            </div>
        </div>
        </>

    )
}
export default Favorite
