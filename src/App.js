import { useState } from "react";
import'./App.css'

function App() {
  const bgcolor = ['red','green','blue']
 const [colovar , setcolor] = useState(0)
  return (
   <>
   <button  //리액트 데이터 넣어주는 {} 하이픈 있으면 안되고 붙어있어야 해서 안 쓴다
   onClick={()=>{
    setcolor((colovar + 1) % bgcolor.length)
    
   }}>
    {document.body.classList = bgcolor[colovar]}</button>
   </>
  );
}

export default App;
