

const App = () => {

  // localStorage.clear()
  // localStorage.setItem('user','alriyan')
  // localStorage.removeItem('user')
  const name = localStorage.getItem('user')

  const user = {
    username:'Alriyan',
    age:18,
    city:'Delhi'
  }

  localStorage.setItem('detail',JSON.stringify(user))

  const details = JSON.parse(localStorage.getItem('detail'))
  
  console.log(details)
  
  return (
    <div>
      {name} <br />
    </div>
  )
}

export default App
