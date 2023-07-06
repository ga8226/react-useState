import { useState } from "react";
import'./App.css'

function App() {
  const styledata = {
   bodystyle : [
            ["red","빨강","첫번째내용" ],
           ["green","초록","두번째내용"] ,
            ["blue","파랑","세번째내용"],
            ["pink","핑크","네번째내용"]
          ] , ///// 하나의 오브젝트로 만들어주는게 빠르고 편하다
   
  }
  
const[bgcolor, setbgcolor] = useState(0)
  
document.body.style.backgroundColor = styledata.bodystyle[bgcolor][0] 

    return (
   <div style={{textAlign : "center" , marginTop : "100px"}}>
       {
     styledata.bodystyle.map((a, v)=>{ //앞 자리 값 뒷자리 인덱스
       return(     
       <>   <button key={`btn ${v}`} onClick={()=>{setbgcolor(v)}}> {a[1]}</button>
          {bgcolor == v && <div>{`${a[2]}`}</div>}
         
          </>
        )
      

     })
    
     }

     </div>
      
    )
 }

export default App;
