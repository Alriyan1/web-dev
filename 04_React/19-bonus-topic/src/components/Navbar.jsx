
const Navbar = (props) => {
  return (
    <div>
        <p>{props.theme}</p>
      <button onClick={()=>{
        props.setTheme('Dark')
      }}>Change Theme</button>
    </div>
  )
}

export default Navbar
