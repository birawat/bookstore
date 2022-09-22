import React from 'react'
import { Link } from 'react-router-dom'

export default function Icon() {
  return (
    <div>
                <Link to="/">
								<div className="logo_container">
									<div className="logo"><a href="#" style={{margin:"-16px"}}>Books Mania</a></div>
								</div>
                </Link>
    </div>
  )
}
