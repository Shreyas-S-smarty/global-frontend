import { useState } from 'react'
import axios from 'axios'
export default function App() {
    onst [user,setUser]=useState("")
    const [password,setPassword]=useState("")
    async function handleClick(){
        const details={
            username:user,
            password:password

        }
         const response= await axios.post("http://localhost:3000/login",{details})
         
         setDetails(response.data) 
         console.log(response.data)
     }




    return (
        <>


            <form onSubmit={handleClick}>
                <input type="text" value={user}  onChange={(e) => { setUser(e.target.value) }} placeholder='enter username' />
                <input type="text" value={password}  onChange={(e) => { setPassword(e.target.value) }} placeholder='enter password' />
                <input type="submit" value="submit" />
            </form>


        </>
    )
}

