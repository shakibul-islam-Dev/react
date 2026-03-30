import './App.css'
import Counter from './counte.jsx'
import Batsman  from './Batsman.jsx'

function App(){




  function handleClick(){
    alert("He click ME")
  }
  function handleClick2(){
    alert("He click ME 2")
  }
  return(
    <div>
      <Batsman></Batsman>
      <Counter></Counter>
   <button onClick={handleClick}>Click Me</button>
   <button onClick={handleClick2}>Click Me2</button>
    </div>
  )

}
export default App



