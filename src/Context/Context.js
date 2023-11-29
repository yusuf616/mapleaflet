import { createContext,useContext, useState } from "react";

const Context=createContext();

export const ContextProvider=({
    children
})=>{
    const [element,setElement]=useState({});

    const values={
        element:element,
        setElement:setElement
    }

    return(<Context.Provider value={values}>
        {children}
    </Context.Provider>)
}


export const useMyContext=()=>useContext(Context);