/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Link } from 'react-router-dom'

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
                <div className=" py-5 flex-container footer" >
                    <div className="row py-3 flex-child " style={{ justifyContent: 'space-evenly' }}>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 flex-child" >
                            <h6 className="text-uppercase font-weight-bold mb-4" style={{ color: 'blue' }}>Company</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/contact">ContactUs</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/career">Career</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 flex-child">
                            <h6 className="text-uppercase font-weight-bold mb-4" style={{ color: 'blue' }}>Policies</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/privacy">Privacy Policies</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/terms">Terms Of Use</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/secure">Secure Shopping</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/copyrightPolicy">Copyright policy</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 flex-child">
                            <h6 className="text-uppercase font-weight-bold mb-4" style={{ color: 'blue' }}>Help</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/payment">Payment</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/shipping">Shipping</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/returns">Returns</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/faq">FAQ</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 flex-child">
                            <h6 className="text-uppercase font-weight-bold mb-4" style={{ color: 'blue' }}>Misc</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/affiliate">Affiliate</Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="nav-link active" aria-current="page" to="/sitemap">Sitemap</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
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