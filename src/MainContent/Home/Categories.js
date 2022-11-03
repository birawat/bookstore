import { React, useState } from 'react'
import { AllApi } from '../../AllApi'

const Categories = ({text,setText, name, setName, cartValue, setCartValue }) => {
    
    
    //const [filterData, setFilterData] = useState([]);
    const [buttontext, setButtontext] = useState("Add Cart");
    
    const apiData = AllApi();
    
    const filterData = apiData[0]?.data.filter((newData) => {
        return newData.category == name || newData.name == text;
    })
   

    return (
        <div>
        {
            filterData?.map((post, index) => {
    return (
        <div className=" m-3 mainborder card ">
            <div className='divimage mt-2'>
                <img className="img card-img-top " src={post.imageLinks ? post.imageLinks : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="..."
                /></div>
            <div className="card-body">
                <p className="card-title title"><b>{post.name}</b></p>
                <p className="card-title title"><b>{post.description.length >= 20 ? post.description.substring(0, 20) + "..." : post.description}</b></p>
                <p className='p1'><b>{post.price}</b></p>
                <p className='p1'><b>{post.category}</b></p>
                <div className='div'><b><h5 className='price'>{post.isAvailable}</h5></b>
                    <button className="round-black-btn small-btn text-size-sm" id={index} onClick={(e) => {


                        setCartValue([...cartValue, { post }])

                        index === e.target.id ? setButtontext("Added to cart")
                            : setButtontext("Add cart")
                    }}>{buttontext}</button>

                    <button className="round-red-btn small-btn mt-2" >Add Wishlist</button>
                </div>
            </div>
        </div>
    )
})

}
</div>
   )
}

export default Categories
