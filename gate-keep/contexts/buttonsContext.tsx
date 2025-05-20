import React, { useState, createContext } from 'react'
export const buttonsContext = createContext();

export const buttonsContextProvider = ({ Children }: any) => {
    const [activate, setActivate] = useState(false)

    return (
        <buttonsContext.Provider value={{activate, setActivate}}>
            {Children}
        </buttonsContext.Provider>
    )
}
