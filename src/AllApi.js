import { useState, useEffect } from 'react'
import axios from 'axios'

export const AllApi = () => {
    const [myData, setMyData] = useState([]);
    const [category,setCategory] = useState([]);

    async function fetchMyAPI() {
        const res = await Promise.all([axios.get("http://localhost:5000/getAllBooks")
    ])
   
       // category.push(res[0].data[0].category)
      
        setMyData(res)
    }
   
    useEffect(() => {
       fetchMyAPI();    
    },[])

    return myData;
}
