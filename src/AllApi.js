import { useState, useEffect } from 'react'
import axios from 'axios'

export const AllApi = () => {
    const [myData, setMyData] = useState([]);
    async function fetchMyAPI() {
        const res = await Promise.all([ axios.get("https://www.googleapis.com/books/v1/volumes?q=Books"),
        axios.get("https://www.googleapis.com/books/v1/volumes?q=BoxSets"),
        axios.get("https://www.googleapis.com/books/v1/volumes?q=NewArrivals"),
        axios.get("https://www.googleapis.com/books/v1/volumes?q=AwardWinners"),
        axios.get("https://www.googleapis.com/books/v1/volumes?q=BestSellers"),
        axios.get("https://www.googleapis.com/books/v1/volumes?q=FictionBooks"),
    ])
 
        setMyData(res)
    }
   
    useEffect(() => {
       fetchMyAPI();
   
    },[])

    return myData;
}
