import React from 'react';
import Cartmodal from './Cartmodal';
import Home from './Home';

export default function MainContent({setModal,modal}) {
  return (
    <div>
      <Cartmodal setModal={setModal} modal={modal}/>
     
     
    </div>
  )
}

