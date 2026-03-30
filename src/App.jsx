import './App.css'
import Counter from './counte.jsx'
import Batsman  from './Batsman.jsx'
// import User from './user.jsx'
import { Suspense } from 'react'
// import User2 from './user.jsx'
import Friend from './friendend.jsx'
// const featachUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const loadData = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();

}
function App(){
  const  promises = loadData()
 



  function handleClick(){
    alert("He click ME")
  }
  function handleClick2(){
    alert("He click ME 2")
  }
  return(
    <div>
     {/* <Suspense fallback={<h1>Data is loading....</h1>}>
       <User featachUsers = {featachUsers}></User>
     </Suspense> */}
     <Suspense fallback={<h1>The Data is Loading...</h1>}>
      <Friend promises={promises}></Friend>
     </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
   <button onClick={handleClick}>Click Me</button>
   <button onClick={handleClick2}>Click Me2</button>
    </div>
  )

}
export default App



