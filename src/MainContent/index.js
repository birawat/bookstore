import React from 'react';
import Cartmodal from './Cartmodal';


export default function MainContent({setModal,modal,cartValue}) {
  console.log("manin",cartValue)
  return (
    <div>
      <Cartmodal setModal={setModal} modal={modal} cartValue={cartValue}/>
    </div>
  )
}

