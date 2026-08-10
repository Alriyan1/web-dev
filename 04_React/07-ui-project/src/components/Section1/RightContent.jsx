import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div className="p-6 h-full flex flex-nowrap overflow-x-auto gap-8 w-2/3">
      {props.users.map(function(elem, idx){

        return  <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
