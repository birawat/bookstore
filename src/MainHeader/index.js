import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

export default function MainHeader({setModal, cartValue}) {
  return (
    <div>
      <Header setModal={setModal} cartValue={cartValue}/>
      <Navbar/>
    </div>
  )
}
