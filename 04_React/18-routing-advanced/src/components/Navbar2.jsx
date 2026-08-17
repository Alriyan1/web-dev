import { useNavigate } from "react-router-dom"

const Navbar2 = () => {
    let navigate = useNavigate()
  return (
    <div className="py-3 px-5 bg-cyan-700">
        <button onClick={()=>{
            navigate('/')
        }} className="font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">
            Return to Home page
        </button>
        <button onClick={()=>{
            navigate(-1)
        }} className="font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">
            Back
        </button>
      
    </div>
  )
}

export default Navbar2
