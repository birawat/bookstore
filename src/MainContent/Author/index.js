import React from 'react'
import AuthorData from './AuthorData'

export default function Author() {
    return (
        <div className="atrImg float-start row p-4">
            {AuthorData.map((data) => {
                return (
                    <div className='col-6'>
                        <div className='float-start '>
                            <a href="#">
                                <img src={data.img} className="rounded-circle" alt="Arundhati Roy" style={{ width: "100px", height: "100px" }} onerror="handleAuthorInvalidImages(this)" />
                            </a>
                        </div>
                        <div>
                            <h3 className='d-flex'>
                                <a href="#" style={{ marginLeft: "30px" }} >{data.name}</a>
                            </h3>
                        </div>
                        <div className='d-flex '>
                            <p style={{ marginLeft: "30px" }}>{data.Dis}</p>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    );
}
