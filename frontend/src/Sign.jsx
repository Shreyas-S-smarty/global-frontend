import{Outlet,Link} from "react-router-dom"
import { useNavigate } from "react-router";
export default function Signin()
{
   
    return(

        <>
       
        <h1>This is Signin</h1>
        <input type="text"/>
        <button>Signin</button>
        
     
    
       <Link to="./Signup"><button>Signup</button></Link>
      

      <Outlet/>
        </>
    
    )
}




function SomeComponent() {
  let navigate = useNavigate()
  return <button onClick={() => {
    navigate("/Signup")
  }}></button>

}