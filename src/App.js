import { useState } from "react";
import'./App.css'

function App() {
  const styledata = {
   bodystyle : [
            ["mark","./img/M.jpg","첫번째내용" ],
           ["j","./img/J.jpg","두번째내용"] ,
            ["k","./img/K2.jpg","세번째내용"],
            ["l","./img/L.jpg","네번째내용"]
          ] , ///// 하나의 오브젝트로 만들어주는게 빠르고 편하다
   
  }
  
const[bgimg, setbgimg] = useState(0)
  
document.body.style.backgroundImage = styledata.bodystyle[bgimg][1] 

    return (
   <div style={{textAlign : "center" , marginTop : "100px"}}>
       {
     styledata.bodystyle.map((a, v)=>{ //앞 자리 값 뒷자리 인덱스
       return(     
       <>   <button key={`btn ${v}`} onClick={()=>{setbgimg(v)}}>{a[0]}</button>
          {bgimg == v && <img src={a[1]} alt="" style={{height : "100vh" , with : "100%"}}/>}
         
          </>
        )
      

     })
    
     }

     </div>
      
    )
 }

export default App;
