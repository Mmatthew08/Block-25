import { useState } from "react";
function CountButton(props){
    console.log('props',props)
}
 let { name,number,favFlavor } = props
 console.log(favFlavor)
 const[count,setCount]= useState(0)

 console.log('Count;', count)
  
 return{
    <button onClick={()=>setCount(count+1)>
        count is {count}
        </button
    }
 }