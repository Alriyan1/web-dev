import { useState } from "react"

const App = () => {

  const [num,setNum] = useState(10)
  const [username,setUsername] = useState('Alriyan')
  const [arr,setArr] = useState([1,2,3,4])

  const change = ()=>{
    setNum(num+1)
    if (username==='Alriyan'){
      setUsername('Fardeen')
    }else{
      setUsername('Alriyan')
    }
    const newArr = [...arr]
    newArr.push(5)
    setArr(newArr)
    
    console.log(arr)
  }
  
  
  return (
    <div>
      <h1>value of num is {num} <br /> Name of owner is {username} </h1>
      <button onClick={change}>click</button>

    </div>
  )
}

export default App
