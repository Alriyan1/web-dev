import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="border-b flex justify-between items-center py-6 px-10 bg-gray-900">
            <Link to='/' className="font-medium text-2xl">MediaSearch</Link>
            <div className="flex gap-5 items-center">
                <Link className="text-base font-medium active:scale-95 bg-gray-800 rounded px-4 py-2" to='/'>Search</Link>
                <Link className="text-base font-medium active:scale-95 bg-gray-800 rounded px-4 py-2" to='collection'>Collection</Link>
            </div>
        </div>
  )
}

export default Navbar
