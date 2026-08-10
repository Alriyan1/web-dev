
const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h1 className="bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">{props.id + 1}</h1>
        <div>
            <p className="text-lg leading-normal text-white mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, incidunt.</p>
            <div className="flex justify-between">
                <button className="bg-blue-500 text-white font-medium px-7 py-2 rounded-full">{props.tag}</button>
                <button className="bg-blue-500 text-white font-medium px-3 py-2 rounded-full"><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
