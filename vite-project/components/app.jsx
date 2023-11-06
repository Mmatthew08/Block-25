import { useState } from "react";
import './app.css'

import Header from './components.Header'
import CountButton from './ components/CountButton'

function app(){
    const [count,setCount]=useState(0)
    console.log('Count:',count)
}
return(
    <>
    <Header/>
    <h1>{count}</h1>
    <CountButton number={count} setCountFn={setCount} incerement={1}/>
    
    </>
)


