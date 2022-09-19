import React from 'react';
import Cartmodal from './Cartmodal';

export default function MainContent({setModal,modal}) {
  return (
    <div>
      <Cartmodal setModal={setModal} modal={modal}/>
    </div>
  )
}

