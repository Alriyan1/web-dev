import Card from "./components/card"

const App = () => {
  return (
    <div className="parent">
      <Card user='Alriyan' age={23} img='https://images.unsplash.com/photo-1783154955296-3afcd019da24?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Fardeen' age={27} img='https://images.unsplash.com/photo-1774816064876-10a893fc79e9?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

    </div>
  )
}

export default App
