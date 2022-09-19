import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Wishlist from './Wishlist'

export default function MainHeader({setModal}) {
  return (
    <div>
      <Header setModal={setModal}/>
      <Navbar/>
      <Wishlist/>
    </div>
  )
}
