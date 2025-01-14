import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./icecreamSlice"
import { useState } from "react"

const Icecream = () => {
  const [value, setValue] = useState(1)
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of icecreams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order icecream</button>
      <input 
        type='number'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock icecreams</button>
    </div>
  )
}

export default Icecream