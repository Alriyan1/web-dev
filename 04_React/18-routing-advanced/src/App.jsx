import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import {Routes,Route} from 'react-router-dom'
import NotFound from "./pages/NotFound"
import MenCollecton from "./pages/MenCollecton"
import WomenCollection from "./pages/WomenCollection"
import Cources from "./pages/Cources"
import CourceDetails from "./pages/CourceDetails"
import Navbar2 from "./components/Navbar2"

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/cources" element={<Cources/>}/>
        <Route path="/cources/:id" element={<CourceDetails/>} />
        <Route path="/product" element={<Product/>}>
          <Route path="men" element={<MenCollecton/>} />
          <Route path="women" element={<WomenCollection/>} />
        </Route>  
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
