import { useParams } from "react-router-dom"

const CourceDetails = () => {

    const params = useParams()
  return (
    <div>
      <h1>{params.id} Cource Detail</h1>
    </div>
  )
}

export default CourceDetails
