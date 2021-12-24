import React, { useState ,useContext,useEffect} from 'react'
import Login from './Login';
import Gradea from './pages/gradea';

import {create} from "./App";
import {Axios} from "./Contact";
function LandingPage() {
   
    const{setCovers,setBooleans}=useContext(create)
    const handlegradea=()=>{
        setBooleans(false);
        setCovers(<Gradea/>)
    };
 
    const handlelogin=()=>{
        
       setBooleans(false);
       setCovers(<Login/>);
       
    }
    const[header,setHeader]=useState([]);
    const GetHeader=async()=>{
        await Axios.get("/des").then((response)=>{
            setHeader(response.data);
        });
    }
    useEffect(() => {
     GetHeader();
    }, [])
    return (
        <div>
           <div>
            <h1> </h1>
            <header class="header">
                <div class="content">
                    <h1 class="heading">
                        <span class="small">Hello world  </span>
                        welcome to<br/><br/>
                        <span class="no-fill">marv shares.</span>
                    </h1>
                    <small>Trusted for the electronic development in Nigeria Africa</small>
                            <br/>
                    <a href="#" class="btn" onClick={handlelogin}>Login</a>
                </div>
            </header><br/>
            <div class="block-3">
                <h1>{header && header.map(el=><div>
                    <h1>{el.words}</h1>
                     
                    <br/><br/>
                     <span class="btn"><a href={el.btns}>Read more...</a></span>
                </div>)}
                   
                </h1>
            </div>
            <div class="block-2">
                <h1>INVEST</h1>
               
                <hr id="indi"/><br/>
                <div class="block">
                    <span class="btn" onClick={()=>handlegradea()}>INVEST NOW</span><br/>
                   
                </div> </div>
            
            
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
        <ul> <li><a href="">YouTube</a></li>
        <li><a href="https://www.instagram.com/_chimdi.xo_/">Instagram</a></li>
        <li><a href="https://web.facebook.com/divine.ezechukwu/">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        </ul>
        </div>
        
        </div>
        <hr/>
        <p class="copyright">&copy; Copyright 2021-MARV SHARES.</p>
        </div>
         </div></div>
        </div>
    )
}

export default LandingPage;
