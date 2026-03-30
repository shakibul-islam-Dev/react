import { useState } from "react"

function Counter(){
    const [count, setCount]= useState(0);
    const handleEventinc =()=>{
        const newCount = count +1
        setCount(newCount)
    }
    const handleEventdec =()=>{
        const newCount =count - 1
        setCount (newCount)
    }
    const counteStyle = {
        backgroundColor:'',
        border:'10px solid white',
        fontSize:'20px',
    }
    return(
        <div style={counteStyle}>
            <h3>Count:{count}</h3>
            <button onClick={handleEventinc}>Add</button>
            <button onClick={handleEventdec}>minus</button>
        </div>
    )
}
export default Counter