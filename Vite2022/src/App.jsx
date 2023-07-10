import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reft from './Companents/Reft';


function App() {
  const [count, setCount] = useState(0)
  const test2 = "props run";
  const ilkref = useRef(0);
  const func2 = (num) => {

  }
  useEffect(()=>{
    setCount(2)
  },[])
  const arr = [
    {name:'erey1', id:0},
    {name:'erey2', id:1},
    {name:'erey3', id:2},
  ]
  const clickfun = () => {
    setCount(count + 1)
  }
  const ikinciref = () => {
    ilkref.current
  }
  console.log("reftest", ilkref.current)
  return (
    <>
      <div>
      {count}
        <Reft test={test2}/>
        <button onClick={clickfun}>Tıkla</button>
        {
          arr.map((ar, i) => (
            <div key={i}>{ar.name}</div>
            
          ))
        }
        <input onClick={ikinciref} ref={ilkref} placeholder='runn'></input>
      </div>

    </>
  )
}

export default App
