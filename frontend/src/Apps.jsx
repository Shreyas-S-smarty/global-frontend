/*import ThemeProvider from "./ThemeProvider"
import Navbar from "./Navbar"
export default function App()
{
  return(
    <>
    <ThemeProvider>
     <Navbar></Navbar>
      
    </ThemeProvider>
    </>
  )
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";

export default function App()
{
  const [isAuth,setAuth]=useState(true)

    return(
    <>
    <button onClick={()=>setAuth(!isAuth)}>toggle</button>
    <BrowserRouter>
    <Routes>
      {
        isAuth?<Route path="/" element={<Home/>}/>
        :<Route path="/" element={<Signin/>}/>
      }
      <Route path="/" element={<Signin/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
  
    </Routes>
    </BrowserRouter>

    </>
  )
    
} */