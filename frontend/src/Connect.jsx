import { useState } from 'react'
export default function App() {
    const [user, setUser] = useState("");

    function handleSubmit(e) {

        e.preventDefault();
        console.log(user);



    }




    return (
        <>


            <form onSubmit={handleSubmit}>
                <input type="text" value={user} id="un1" onChange={(e) => { setUser(e.target.value) }} placeholder='enter username' />
                <input type="submit" value="submit" />
            </form>


        </>
    )
}

