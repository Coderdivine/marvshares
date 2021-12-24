import React, { useContext, useEffect, useState } from 'react'
import { Axios } from './Contact';
import {create} from "./App"
import Paystacktwo from './Paystacktwo';

function User() {
  const{setBooleans,setCovers,msg,setMsg}=useContext(create);
    const[data,setData]=useState([]);
    const[returns,setReturns]=useState([])
    const[updatevalue,setUpdatevalue]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[nin,setNin]=useState("");
    const[account,setAccount]=useState("");
    const getData=async()=>{
     await Axios.get("/marvsharesget").then((response)=>{
            setData(response.data);
        })
    }
    const getReturns=async()=>{
      await Axios.get("/marvsharesgetR").then((response)=>{
            setReturns(response.data);
        })
    }
    useEffect(() => {
        getData()
        
    }, []);
    useEffect(()=>{
        getReturns();
    },[]);
    const total =data && data.reduce((a,v)=> a = a + Number(v.amount),0);
    const returnT = returns && returns.reduce((a,v)=> a =a+Number(v.amount),0);
    const[withdraw,setWithdraw]=useState(true);
    const[update,setUpdate]=useState(true);
    const handleupdate=()=>{
        setUpdate(false);
    }
    const handlewithdraw=()=>{
        setWithdraw(false);
    }
    const handleRupdate=(id,name,amount)=>{
     if(updatevalue !== ""){
         const Tvalue = Number(updatevalue) + Number(amount);
         console.log(Tvalue)
         sessionStorage.setItem("amount",Tvalue);
         sessionStorage.setItem("id",id);
         sessionStorage.setItem("nameid",name);
        
        setBooleans(false);
        setCovers(<Paystacktwo/>)
     }
       
    }
    const handleWupdate=async()=>{
        const data= {email:email,phone:phone,nin:nin,account:account};
       if(email && phone){
          await Axios.post("/marvsharespostW",data).then((response)=>{
              console.log(response.data);
              setMsg("Message sent")
          })
      }
    }
    const LOCAL_NAME = sessionStorage.getItem("name");
    const LOCAL_PASSWORD = sessionStorage.getItem("password");
    

  return (
      <div>
        <div class="block-4">
                        <h>{msg}</h>
                        <header  class="heading">
                            <span class="no-fill">USER.</span>
                        </header>
                   { LOCAL_NAME && LOCAL_PASSWORD ?data && data.filter(x=> x.name == LOCAL_NAME && LOCAL_PASSWORD == x.password).map(x=><div>
                            <div key={x.id}>
                             <div class="block-6">
                            <div class="heading">
                                <span class="no-fill">
                                    
                                    <p>Latest</p>
                                    <small style={{fontSize:"21px"}}>Amount Invested:{x.amount}</small>
                                    <small style={{fontSize:"21px"}}>Total amount Invested: {total}</small>
                                    {x.amount > returnT ?<div>
                                        <small style={{fontSize:"21px",color:"red"}}>Return: - {(x.amount/total)*returnT}</small>
                                    </div>:<div>
                                    <small style={{fontSize:"21px",color:"blue"}}>Return: - {(x.amount/total)*returnT}</small></div>}
                                </span>
                            </div>
                            <br/>
                            {!update?<div>
                                <div class="update">
                              <input placeholder="amount  to add" value={updatevalue} onChange={(e)=>setUpdatevalue(e.target.value)}/> 
                               <span class="btn" onClick={()=>handleRupdate(x.id,x.name,x.amount)}>Update Now</span>
                               </div>
                            </div>:<div>  <button value="click" class="btn" onClick={()=>handleupdate()}>Update Now</button></div>}
                            {!withdraw?<div>
                                <div class="update">
                                <input placeholder="your email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <br/>
                                <input placeholder="your phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/>
                                <input placeholder="Enter your nin number" value={nin} onChange={(e)=>setNin(e.target.value)}/><br/>
                                <input placeholder="Enter your nin number" value={account} onChange={(e)=>setAccount(e.target.value)}/><br/>

                                <button class="btn" onClick={handleWupdate}>Proceed</button>
                            </div></div>:<div><button value="click" class="btn" onClick={()=>handlewithdraw()}>Withdraw</button></div>}
                                   </div>                        
                           <div class="policy">
                           <header>Terms and policy</header>
                           <p>Hello am shaw from Alpha02. Today i'll guide you on how to use marv shares(Long term investment).<br/>
                        Marv shares use their investors money to supply goods and services in other to get a good return.To invest in marvshares you can click on any 
                        grade to invest.Once you invest you will be given a personal 
                        dashboard.On this dashboard your able to see your return
                        (By default when a user invest is rate of return start
                         at a very low value).User can update by clicking
                          the "update" button.Investor is likely to recieve good income annualy,so
                           it is adviced that investors should check their returns every month.To withdraw user can click on the withdrawal
                           button.This button is only accessible when return rate is higher than
                            the actual investment.Note that customer can only withdraw once.i.e everything.
                          This are the basic things customer or investors need to know about marvshares.
                         <br/> <p4>customer care number: 08165728539</p4><br/>
                          <p2>Email: chimdi4332@gmail.com</p2>
                                    </p>
                        </div>   
                         </div> 
    </div>):[]}
                        
</div></div>
        
  );
            
                        };
   


export default User;
