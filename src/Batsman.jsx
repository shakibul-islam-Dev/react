import { useState } from "react";

function Batsman(){
    const [runs,setRuns] = useState(0)
    const [balls,setBalls] = useState(0)

    const handleSingle = ()=>{
        const updateRuns = runs + 1;
        setRuns(updateRuns)
                setBalls(balls +1 )
    }
    const handleCouple = ()=>{
        const updateRuns = runs + 2;
        setRuns(updateRuns)
                setBalls(balls +1 )

    }
    const handleThree = ()=>{
        const updateRuns = runs + 3;
        setRuns(updateRuns)
         
             setBalls(balls +1 )
    }
    const handleFour = ()=>{
        const updateRuns = runs + 4;
        setRuns(updateRuns)
        
              setBalls(balls +1 )
    }
    const handleSix = ()=>{
        const updateRuns = runs + 6;
        setRuns(updateRuns)
        
              setBalls(balls +1 )
    }
    const handleDot = ()=>{
        const updateRuns = runs + 0;
        setRuns(updateRuns)
         
                setBalls(balls +1 )
    }
    return(
        <>
          
    

            
        
        <h3>Player:Bangla Batsman</h3>
        <h1>Score:{runs}</h1>
        <p>Ball count:{balls}</p>
        <button onClick={handleDot}>Dot</button>
        <button onClick={handleSingle}>Singles</button>
        <button onClick={handleCouple} >couple</button>
        <button onClick={handleThree}>Three</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>



        </>
    )
}
export default Batsman