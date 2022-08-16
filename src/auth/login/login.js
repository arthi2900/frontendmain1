import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { api } from "../../api";

export function Login()
{
    const[username,setUsername]=useState("");
     const[password,setPassword]=useState("");
     const history=useHistory();
     const[token,setToken]=useState("")
    const loginsubmit=async(e)=>{
        e.preventDefault();
        try {
            const res =await fetch(`${api}/auth/login`,{method:"GET",
           body:JSON.stringify({username,password}),
            headers:{"Content-Type":"application/json"}
              })
          .then((res)=>res.json())
          .then(tok => {
            if (tok.message === "successful login") {
               const usernamemain=username;
              localStorage.setItem("x-auth-token",tok.token ,usernamemain)
                      setToken(tok.token,usernamemain)
                       console.log(usernamemain);
              history.push("/user/home")
            }})
        }
        catch(err){
console.log("error")
        }
    }
    return(
        <>
        <div>
       <button> <Link to="/auth/register">register</Link></button>
        <form onSubmit={loginsubmit}>
        <input placeholder="username" type="text" onChange={(event)=>setUsername(event.target.value)}/>
        <input  placeholder="password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
           <button type="submit">login </button>
        </form>
        </div>
        </>
    )
}