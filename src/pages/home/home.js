import { useEffect,useState} from "react";
import { axios } from "axios";
import { useHistory } from "react-router-dom";
import { api } from "../../api";

export function Home()
{  
  const history=useHistory();
  const[data,setData]=useState([]);
const [token,setToken]=useState(localStorage.getItem("x-auth-token"))
const logout=()=>{
  localStorage.removeItem("x-auth-token");
  setToken(null)
  history.push("/login")
} 
const datalist= async()=>{
  const res=await fetch(`${api}/user/home`,{
    method:"GET",
    headers:{
      "x-auth-token":token,
    }
  }).then((res)=>res.json())
  .then((a)=>{console.log(res.data)
  })
  .catch(err=>console.log("err",err))
};
useEffect(datalist,[]);

return(
        <>

        <div>
        <button onClick={logout}>logout</button>
        <h1>hi all </h1>
        </div>
        </>
    )
}
/*
const res=await fetch(`${api}/user/home`,{method:"GET",
        headers: {
            Authorization:`${localStorage.getItem("x-auth-token")}`,
          },
    })
        .then((data1)=>data1.json())
        .then((mvs)=>setData(res.mvs))
        .catch((err)=>
        console.log(err));
        */
       /*
          try {
              let res = await axios.get(`${api}/user/home`, {
                headers: {
                    "x-auth-token": `${localStorage.getItem("token")}`,
                },
              });
              setData(res.data);
            } catch (error) {
              console.log(error);
                        }
             <button onClick={logout}>logout</button>
                        */