import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4">
        <Link className="text-xl font-bold" to='/product/men'>Men</Link>
        <Link className="text-xl font-bold" to='/product/women'>Women</Link>
      </div>
      {/* <h1>P roduct</h1> */}
      <Outlet/>
    </div>
  )
}

export default Product
