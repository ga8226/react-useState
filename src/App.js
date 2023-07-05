import { useState } from "react";

function App() {
const [count,setCount] =useState(0)
let count2= 0;
const timer = setInterval(()=>{})




  return (
   <>
   <button onClick={()=>{setCount(count + 1)}}>{count}</button>
   <button onClick={()=>{count2++ }}>{count2}</button>
   </>
  );
}

export default App;
