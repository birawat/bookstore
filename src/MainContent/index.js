import React from 'react';
import Cartmodal from './Cartmodal';


export default function MainContent({setModal,modal,cartValue}) {

  return (
    <div>
      <Cartmodal setModal={setModal} modal={modal} cartValue={cartValue}/>
    </div>
  )
}

