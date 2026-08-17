import { useContext } from "react"
import Nav2 from "./Nav2"
import {ThemeDataContext} from '../context/ThemeContext'

const Navbar = () => {
    
    // console.log(props.children[0])
    
    const [theme] = useContext(ThemeDataContext)
    // console.log(data)
  return (
    <div className={theme}>
      <h2>Allians</h2>
      <Nav2/>
    </div>
  )
}

export default Navbar
