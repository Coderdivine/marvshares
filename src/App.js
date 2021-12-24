import React,{useState,useContext,createContext} from 'react'
import './App.css';
import LandingPage from './LandingPage';
import User from './User';

export const create = createContext(null);
function App() {
  const[msg,setMsg]=useState("");
  const[covers,setCovers]=useState(null);
  const[booleans,setBooleans]=useState(true);
  const[amounted,setAmounted]=useState(0)
  return (
    <div>
    <create.Provider value={{covers,setCovers,setBooleans,booleans,amounted,setAmounted,msg,setMsg}}>
    {booleans?<div> 
    <LandingPage/>
    </div>:<div>
    {covers}</div>}

       </create.Provider>
     
    </div>
  );
}

export default App;
