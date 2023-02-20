
import './App.css';

// import User from "./User";
import {useState} from 'react';
import Functioncom from "./Functioncom";
import Classcom from './Classcom';
import "./App.css";

function App() {
  // const handleClick=()=>{
  //   setinc(show+1);
  // }
  // const handleReset=()=>{
  //   setinc(0);
  // }
  // const[show,setinc]=useState();
  const [showdiv,setShow]=useState(false)
  const [showclass,setClass]=useState(false)
  return (
      <div>
      <h1 className='heading'>Styling using Functional and Class Component</h1>
      <div className='flexcontainer'>
      <button onClick={()=>setClass(!showclass)}>To see styling in functional component</button>
      <button onClick={()=>setShow(!showdiv)}>To see styling in class component</button>
      </div>
      <span>{showclass?<Functioncom/>:" "}</span>
        <span>{showdiv?<Classcom/>:" "}</span>
      </div>               
  );
}




export default App;
