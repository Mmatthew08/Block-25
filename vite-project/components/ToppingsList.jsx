import Topping from "./Topping"
import{useState} from 'react'
function ToppingsList(){
    const [selectedTopping,setSelectedTopping]=useState('')

console.log (selectedTopping)
    return <ul>
       <Topping name={'Pepperoni'} selectedTopping={setSelectedTopping} selected={selectedTopping}/>
       <Topping name={'Olives'} selectedTopping={setSelectedTopping} selected={selectedTopping} />
       <Topping name={'Pineapple'} selectedTopping={setSelectedTopping} selected={selectedTopping} />
       <Topping name={'Bacon'} selectedTopping={setSelectedTopping} selected={selectedTopping} />
       <Topping name={'Ham'}  selectedTopping={setSelectedTopping} selected={selectedTopping}/>
       <Topping name={'Extra Cheese'} selectedTopping={setSelectedTopping} selected={selectedTopping} />
    </ul>
}
export default ToppingsList