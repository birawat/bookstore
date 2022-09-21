import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

export default function MainHeader({setModal}) {
  return (
    <div>
      <Header setModal={setModal}/>
      <Navbar/>
    </div>
  )
}
