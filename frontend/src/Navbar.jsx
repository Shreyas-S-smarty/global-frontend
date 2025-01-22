import { useContext } from "react";
import  themeContext  from "./themeContext";
export default function Navbar()
{
    const{bgState,setbgState}=userContext(themeContext)
    function handleClick(){
        setbgState(!bgState)

    }
   
    return(
        <>
    <button onclick={handleClick}>toggle</button>
        </>
    )
}