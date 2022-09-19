import React from 'react'
import { Link } from 'react-router-dom'
import Fdata from './Fdata'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="container-fluid flex-grow-1 ">
                <div className="row py-5">
                    <div className="col-lg-12  text-white text-center">
                    </div>
                </div>
            </div>
            <footer className="bg-white">
                <div className=" py-5 flex-container footer" style={{justifyContent: "space-around"}}>
                    {Fdata.map((val) => {
                     
                        return (
                            <div className="row py-3 flex-child " style={{ justifyContent: 'center' }}>
                                <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 flex-child" >
                                    <h6 className="text-uppercase font-weight-bold mb-4" style={{ color: 'red' }}>{val.heading}</h6>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-2">
                                        {val.urlArray.map((value)=>{return(
                                            <Link className="nav-link active" aria-current="page" to={value.url}>{value.name}</Link>
                                        )})}      
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="bg-light py-2 footer"  >
                    <div className="container text-center">
                        <p className="text-muted mb-0 py-2">&copy; Bootstrap All risghts reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer
