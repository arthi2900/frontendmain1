import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { api } from "../../api";

export function Register()
{
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history=useHistory();
const registersubmit=async(e)=>{
    e.preventDefault();
    const newUser={
        username:username,password:password,email:email
    }
    try{
        const res = await fetch(`${api}/auth/register`,
        {method:"POST",
        body:JSON.stringify(newUser),
        headers:{"Content-Type":"application/json"
        },})
        .then(()=>history.push("/auth/login"));
    }
    catch(err){
        console.log("error");
    }
}
    return(
        <>
        <div>
        <button>
        <Link to="/auth/login">login</Link></button>
        <form onSubmit={registersubmit}>
        <input placeholder="username" onChange={(event)=>setUsername(event.target.value)}/>
        <input placeholder="email" onChange={(event)=>setEmail(event.target.value)}/>
        <input  placeholder="password" onChange={(event)=>setPassword(event.target.value)}/>
        <button type="submit">register</button>
        </form>
        </div>
        </>
    )
}