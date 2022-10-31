import React from 'react'


export default function CartIcon({ setModal, cartValue}) {
  let length = cartValue.length? cartValue.length :0;

  return (
    <div>
      <div className="cart">
        <div className="cart_container d-flex flex-row align-items-center justify-content-end" onClick={() => setModal(true)}>
          <div className="cart_icon">
          <a href="#"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png" alt=""/></a>
            <div className="cart_count"><span>{length}</span></div>
          </div>
          <div className="cart_content">
            <div className="cart_text" style={{ margin: "-10px" }}>
              <a href="#">Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
