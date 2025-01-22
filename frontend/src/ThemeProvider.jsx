import { useEffect,useState } from "react";
import {themeContext} from"./themeContext";
export default function ThemeProvider({children})
{ 
    const[bgState,setbgState]=useState(false);
    useEffect(()=>
    {
        document.body.style.backgroundColor=bgState?"black":"white"
        document.body.style.color=bgState?"white":"black"
    },[bgState])
    return(
        <>
        <themeContext.Provider value={{bgState,setbgState}}>
            {children}
            </themeContext.Provider>
        </>

    )
}