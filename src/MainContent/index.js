import React from 'react';

import Cartmodal from './Cartmodal';


export default function MainContent({setModal,wishlistModal,setWishlistModal,modal,cartValue,wishlistValue}) {

  return (
    <div>
      <Cartmodal setModal={setModal} modal={modal} cartValue={cartValue}/>
      
    </div>
  )
}

