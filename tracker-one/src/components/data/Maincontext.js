import React, {useContext, useState} from 'react'
import { data } from './links';
import { useFetchCustom } from './useFetchCustom';

export const navContext = React.createContext();
export const Maincontext = ({children}) => {

    //state for our link data

    const [links, setLinks] = useState(data);
    const{loading, error, apiData} = useFetchCustom();
    useFetchCustom("https://corona.lmao.ninja/v3/covid-19/all")

    return (
        <div>
            <navContext.Provider value={{links, loading, error}}>
                {children}
            </navContext.Provider>
        </div>
    )
}



//setup custom hook

export const useNavContext = ()=>{
    return useContext(navContext)
}

