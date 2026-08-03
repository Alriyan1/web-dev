import Card from "./components/card"
import Navbar from "./components/navbar"

const App = () => {


  return (
    <div>
      <Navbar/>
      <Card/>
      {Card()}
    </div>
  )
}

export default App
