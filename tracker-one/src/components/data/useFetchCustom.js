import React, {useState, useEffect} from 'react'

export const useFetchCustom = (url) => {

    const[ apiData, setApiData] = useState([]);
    const [error, setError] = useState(false)
    const [loading, setIsLoading ]= useState(true);

    //fetch fn 

    const fetchFn=()=>{
        fetch(url)
        .then((resp)=>{
            if(resp.status>200 || resp.status<299){

                return resp.json();
            }
            else{
                setError(true)
                setIsLoading(false);
            }

        })
        .then((data)=>{
            setApiData(data)
            setIsLoading(false)

        })
        .catch((err)=>{console.log(err)
        setError(true)})

    }

useEffect(()=>{
    fetchFn();
}, [apiData])

return {
    apiData, error, loading
}
    
}


