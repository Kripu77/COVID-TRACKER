import React, {useContext, useState, useEffect} from 'react'
import { data } from './links';
import useFetchCustom  from './useFetchCustom';

export const navContext = React.createContext();
const url = "https://corona.lmao.ninja/v3/covid-19/all";
export const Maincontext = ({children}) => {

    //state for our link data

    const [links, setLinks] = useState([]);
    const{loading, error, apiData} = useFetchCustom(url);
    const [show, setShow] = useState(false);
    
useEffect(()=>{
    setLinks(data)
},[])

//fn to toggle the dynamic side bar

const toggleSideBar=()=>{
    setShow(!show)
}
    return (
        <div>
            <navContext.Provider value={{links, loading, error, apiData, toggleSideBar, show}}>
                {children}
            </navContext.Provider>
        </div>
    )
}



//setup custom hook

export const useNavContext = ()=>{
    return useContext(navContext)
}

