import React, {useState, useEffect} from 'react'

const useFetchCustom = (url) => {

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
                setIsLoading(false);
                setError(true)
                
            }

        })
        .then((data)=>{
            console.log(data)
         
            setApiData(data)
               
            setIsLoading(false)
            // console.log(data)

        })
        .catch((err)=>{console.log(err)
        setError(true)})

    }

useEffect(()=>{
 const fetchData= setInterval(() => {
     fetchFn();
 }, 5000);
 
 //clean up fn

 return ()=>{clearInterval(fetchData)}
}, [url])

return {
    apiData, error, loading
}
    
}

export default useFetchCustom;