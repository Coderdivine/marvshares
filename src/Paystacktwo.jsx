import React from 'react';
  import { usePaystackPayment } from 'react-paystack';
  import './App.css';
  import { Axios } from './Contact';
  const AMOUNT = sessionStorage.getItem("amount");
  const ID =sessionStorage.getItem("id");
  const NAME =sessionStorage.getItem("nameid");

  const config = {
      reference: (new Date()).getTime().toString(),
      email:"chimdi4332@gmail.com",
      amount:Number(AMOUNT)/1000,
      publicKey:'pk_live_363aafee589248daecbc80031e7feac0b2139eeb',
  };
  //pk_live_363aafee589248daecbc80031e7feac0b2139eeb
  const Post=async()=>{
      const DETAILS ={id:ID,name:NAME,amount:AMOUNT};
   await Axios.put("/marvsharesupdatepost/",DETAILS).then((reposnse)=>{
      alert("Youv'e successfully updated your current investment.");
    });
  }
  const onSuccess = (reference) => {
    Post();
  };

  const onClose = () => {
   alert("There's more to come your way in marvshares")
  }

  const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config);
      return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Pay Now</button>
        </div>
      );
  };
  
  function Paystacktwo() {
    
    return (
      <div>
        <PaystackHookExample />
      </div>
    );
  }
  
  export default Paystacktwo;