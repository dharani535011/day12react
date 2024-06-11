
import { useSelector } from 'react-redux'
const Total = () => {
    const items=useSelector((state)=>state.userinfo.users)
    
  return (
    <div className="total"><h3>Total:
        </h3><h4>${items.reduce((acc,curr)=>acc+curr.price,0)}</h4></div>
  )
}

export default Total