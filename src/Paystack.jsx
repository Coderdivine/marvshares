import React from 'react';
  import { usePaystackPayment } from 'react-paystack';
  import './App.css';
 
  import { Axios } from './Contact';
  const AMOUNT = JSON.parse(sessionStorage.getItem("amount"));
  const DETAILS =sessionStorage.getItem("details")?JSON.parse(sessionStorage.getItem("details")):[];

  const config = {
      reference: (new Date()).getTime().toString(),
      email:"chimdi4332@gmail.com",
      amount:Number(AMOUNT)/100,
      publicKey:'pk_live_363aafee589248daecbc80031e7feac0b2139eeb',
  };
  //pk_test_610959a040dfbf220ad9efc0446746d88f745e0f
  const Post=async()=>{
 await Axios.post("/marvsharespost",DETAILS).then((reposnse)=>{
      alert("Thanks for investing in marvshares. Go to login to see your dashboard");
    });
  }
  const onSuccess = (reference) => {
    Post();
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config);
      return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }} className="btn"><h>Pay Now</h></button>
        </div>
      );
  };
  
  function Paystack() {
    
    return (
      <div>
        <PaystackHookExample />
      </div>
    );
  }
  
  export default Paystack;