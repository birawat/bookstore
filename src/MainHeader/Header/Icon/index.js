import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../Image/icon.jpg';

export default function Icon() {
  return (
            <div>
                <Link to="/">
								<div className="logo_container">
									<div className="logo ">
                    <img src={logo} style={{width:"100px", height:"80px ", marginTop:"20px" }}/>
                    </div>
								</div>
                </Link>
          </div>
  )
}
