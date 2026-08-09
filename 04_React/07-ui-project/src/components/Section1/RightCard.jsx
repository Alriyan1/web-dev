
const RightCard = () => {
  return (
    <div className="h-full w-80 overflow-hidden relative rounded-3xl">
      <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <div className="absolute top-0 left-0 h-full w-full bg-amber-300 p-5">
        <h1>1</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, incidunt.</p>
            <div>
                <button>Satisfied</button>
                <button><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard
