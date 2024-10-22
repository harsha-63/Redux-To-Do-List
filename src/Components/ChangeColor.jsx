import { useDispatch, useSelector } from "react-redux"
import { changeColor } from "./Slice";
const ChangeColor = () => {

const {backgroundColor}=useSelector((state)=>state.color)
const dispatch=useDispatch();
console.log(backgroundColor,"color");

  return (
    <div style={{backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={()=>dispatch(changeColor(backgroundColor=='white'?"lightblue":"white"))}>Change</button>
        
    </div>
  )
}

export default ChangeColor