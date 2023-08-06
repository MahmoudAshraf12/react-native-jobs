import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endPoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {   
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        headers: {
            'X-RapidAPI-Key': '5b3de3a073msh21a23ddf0d92499p18be1cjsn2f6b7d2dc454',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query}
    };
    const fetchData = async() => {
        setIsLoading(true);
        try{
            const response = await axios.request(options);  
            setData(response.data.data);
            setIsLoading(false);
        } catch(error){
            setError(error);
            alert('There is an Error');
        }finally{
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    },[]);
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, error, refetch};
}

export default useFetch;