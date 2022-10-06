import { useState, useEffect } from 'react'
import axios from 'axios'

export const AllApi = () => {debugger
    const [myData, setMyData] = useState([]);
    async function fetchMyAPI() {
        const res = await Promise.all([axios.get("http://localhost:5000/getAllBooks")
    ])
        setMyData(res)
    }
   
    useEffect(() => {
       fetchMyAPI();    
    },[])

    return myData;
}
