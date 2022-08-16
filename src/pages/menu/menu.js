import { useState } from "react"
import { Link } from "react-router-dom"
export function Menu(){
    const [token,setToken]=useState(localStorage.getItem("x-auth-token"))
    return(
        <div>
        {token ?(
<>
<Link to="/user/home">home</Link>

</>
        ):(
            <>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/register">Register</Link>
            </>
        ) }
        
            
         
        </div>
    )
}