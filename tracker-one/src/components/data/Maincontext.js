import React, {useContext, useState} from 'react'


export const navContext = React.createContext();
export const Maincontext = ({children}) => {
    return (
        <div>
            <navContext.Provider value={"In sync"}>
                {children}
            </navContext.Provider>
        </div>
    )
}



//setup custom hook

export const useNavContext = ()=>{
    return useContext(navContext)
}

