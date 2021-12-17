import './App.css';
import React,{useState} from "react"
function App() {
  const [counter, setCounter] = useState(0);
  

const buyC=()=>{
  if(counter!=0){
    alert("🥰 Congratulations ")
  }else if(counter==0){
    alert("😭 please buy from me")
}
}


  return (
    <div className="App">
      <p  class="Cart"  > cart</p>   
       <p    class="CartEmoij"     >    &#128722; :   </p>    

           <p  class="emoji"   >&#128512;</p><br/>   
    <div  class="List"  >
        <p class="title"> list of products</p>
        </div>
      {counter.toString()}
      <button  class="purchases"   onClick={()=>{setCounter(counter+100)}}>  Computer price = 100   +</button><br/>
     <button    class="purchases"  onClick={()=>{setCounter(counter+1)}}> paper price =1  + </button><br/>
      <button   class="purchases"onClick={()=>{setCounter(counter+10)}}> pan price =10  + </button><br/>
      <button    id="Delete"  class="purchase"onClick={()=>{setCounter(0)}}> delete</button><br/>
   <div class="CartDiv"   >
            <p id="TotalStyle"    > Total={counter}     </p>
            <button   class="buy"    onClick={buyC}    > buy  </button>
      
   </div>


  
  <div>
</div>
    </div>
  
  )};
export default App;
