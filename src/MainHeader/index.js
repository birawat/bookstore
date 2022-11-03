import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

export default function MainHeader({text,setText,name,setName,setModal,cartValue,setCartValue}) {

  return (
    <div>
      <Header text={text} setText={setText} setModal={setModal} cartValue={cartValue}/>
      <Navbar name={name} setName={setName} cartValue={cartValue} setCartValue={setCartValue}/>
    </div>
  )
}
