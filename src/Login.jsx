import React, { useState,useEffect } from 'react'
import { Axios } from './Contact';
import User from './User';

function Login() {
    const[login,setLogin]=useState(false);
    const[details,setDetails]=useState(null);
    const[name,setName]=useState("");
    const[pass,setPass]=useState("");
    const[msg,setMsg]=useState("");
    useEffect(() => {
       if(sessionStorage.getItem("name") && sessionStorage.getItem("password")){
        setLogin(true);
        setMsg("Logged in")
       }
    }, [])
    const GETS=async()=>{
        await Axios.get("/marvsharesget").then((response)=>{
            setDetails(response.data);
            
        });
    };
    useEffect(()=>{
        GETS()
    },[]);
    const handlelogin = async(e)=>{
        e.preventDefault();
        console.log(msg)
      if(name.length > 4 ){
          details && details.find((x)=>{
                if(x.name == name && x.password == pass){
                    sessionStorage.setItem("name",name);
                    sessionStorage.setItem("password",pass);
                    setLogin(true);
                    setMsg("Logged in")
                }
            }) 
            
            
        }else{
            setMsg("Wrong Username and Password");
            setLogin(false);
        }
        

    }
    
    return (
        <div>
              {login ?
              <div>
                  <User/>
               </div>
      :<div>  <br/>
      <header  className="heading">
                <span className="no-fill">Login</span>
            </header>
          <div className="form-container">
           
              <div style={{color:"blue"}}>
                  {msg}
              </div>
             <form  onSubmit={(e)=>handlelogin(e)}>
               <input placeholder="Username" value={name}  onChange={(e)=>setName(e.target.value)}/><br/>
               <input placeholder="Password" value={pass}  onChange={(e)=>setPass(e.target.value)}/>  
               <button value="click" className="btn">Login</button>
                 </form></div>       
      <div class="footer">
          <div class="container">
          <div class="row">
          <div class="footer-col-2">
           <p>Powered by Alpha02</p>
           <br/>
           <h1>Supports<br/>
          Didatech02 MARV Ads45 Afil02
          </h1>
          </div>
          <div class="footer-col-3">
          <h3>Related Site</h3>
          <ul>
          <li><a href="https://Coderdivine.github.io/divere/" >Divere Food</a></li>
          </ul>
          </div>
          <div class="footer-col-4">
          <h3>Follow Us</h3>
          <ul> <li><a href="#">YouTube</a></li>
          <li><a href="https://www.instagram.com/_chimdi.xo_/">Instagram</a></li>
          <li><a href="https://web.facebook.com/divine.ezechukwu/">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          </ul>
          </div>
          
          </div>
          <hr/>
          <p class="copyright">&copy; Copyright 2021-MARV SHARES.</p>
          </div>
           </div>
            </div>}
        </div>
    )
}

export default Login;
