import React, {useContext, useState} from 'react'
import { data } from './links';

export const navContext = React.createContext();
export const Maincontext = ({children}) => {

    //state for our link data

    const [links, setLinks] = useState(data);

    return (
        <div>
            <navContext.Provider value={{links}}>
                {children}
            </navContext.Provider>
        </div>
    )
}



//setup custom hook

export const useNavContext = ()=>{
    return useContext(navContext)
}

