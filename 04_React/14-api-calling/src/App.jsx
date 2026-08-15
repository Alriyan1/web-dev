import { useState } from "react"
import axios from 'axios'

const App = () => {

  const [dataa,setData] = useState([])

  const getData=async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    const res = await axios.get('https://picsum.photos/v2/list')

    setData(res.data)


  }
  return (
    <div>
      <button onClick={()=>{
        getData()
      }}>Get Data</button>
      <div> 
        {dataa.map((elem,idx)=>{
          return <h3 key={idx}>{idx+1} Hello {elem.author} </h3>
        })}
      </div>
    </div>
  )
}

export default App
