import React,{useState,useEffect,useContext} from 'react'
import { create } from '../App';
import Paystack from "../Paystack"

function Gradea() {
const{setCovers,setBooleans}=useContext(create);
       const[name,setName]=useState("");
       const[lastname,setLastname]=useState("");
       const[gender,setGender]=useState("");
       const[email,setEmail]=useState("")
        const[phone,setPhone]=useState("");
       const[nin,setNin]=useState("");
       const[passport,setPassport]=useState("");
       const[accnumber,setAccnumber]=useState("")
        const[amount,setAmount]=useState("");
       const[password,setPassword]=useState("");
       const[comment,setComment]=useState("")
       const handleSubmit=(e)=>{
           e.preventDefault();
           const details={
             name:name,lastname:lastname,gender:gender,
             email:email,phone:phone,nin:nin,passport:passport,
             accnumber:accnumber,amount:amount,password:password,
             comment:comment
           };
           const amounts=amount;
           if(amount > 14999){
           sessionStorage.setItem("amount",amounts);
           sessionStorage.setItem("details",JSON.stringify(details));
           setBooleans(false);
           setCovers(<Paystack/>)};


           
       }
      
     
    return (
        <div>
          <br/>
          <br/> <header  className="heading">
                <span className="no-fill">Grade A</span>
            </header>
            <div>
 <div className="form-container">
     <div className="form-btn" >
    
     </div>
     <br/>
     <br/>
     <div className="block-4">
     <i><small>You Can pay a sum of money ranging from #15000 - ...
        
     </small></i>
     </div>
     
     <form onSubmit={(e)=>handleSubmit(e)} id="Regform">
    
           <input id="name"  type="text" placeholder="First name" name="name" value={name} onChange={(e)=>setName(e.target.value)}  required/>
           
          <input id="lastname"  type="text"  placeholder="Last name" name="lastname"  value={lastname} onChange={(e)=>setLastname(e.target.value)} required/>
                     <select value={gender} onChange={(e)=>{
                       const select=e.target.value;
                       setGender(select)
                       console.log(gender)}} id="gender">
                       <option></option>
             <option value="MALE">MALE</option>
             <option  value="FEMALE">FEMALE</option>
             </select>
             <input id="email"  type="email" placeholder="Email" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required/>

           <input id="phone"  type="number" placeholder="Phone number"  name="amount"  value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
           <input id="nin"  type="number" placeholder="NIN number"  name="nin"  value={nin} onChange={(e)=>setNin(e.target.value)}  required/>
           <input id="passport"  type="text" placeholder="Address"  name="passport"  value={passport} onChange={(e)=>setPassport(e.target.value)} required/>
           <input id="accnumber"  type="number" placeholder="Account number"  name="acc"  value={accnumber} onChange={(e)=>setAccnumber(e.target.value)} required/>
          <input id="amount"  type="number" placeholder="Amount"  name="amount"  value={amount} onChange={(e)=>setAmount(e.target.value)} required/>
          <input id="password"  type="password" placeholder="Password"  name="password"  value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          <br/><small>Leave this place as the default number</small>
            <br/>
           <textarea  row="6" id="comment"  placeholder="Give a comment " name="comment"  value={comment} onChange={(e)=>setComment(e.target.value)} ></textarea>

         <button type="submit" class="btn" >Send</button>
         <small>If your investment is up to a year withdrawal will be very active.</small>
         </form>
        
         </div>
         
       </div>
            
    
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
    
        </div>
       
    );
}
;
export default Gradea;
