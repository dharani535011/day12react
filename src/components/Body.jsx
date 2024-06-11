
import { useDispatch, useSelector } from 'react-redux'
import {  changeitems, deleteitems } from '../slice/UserSlice'




const Body = () => {
   const items= useSelector((state)=>state.userinfo.users)
   const dispatch= useDispatch()
function handleremove(id){

dispatch(deleteitems(id))

}
function handlechange(e, id) {
    const num = Number(e.target.value);
    dispatch(changeitems({id,num}))
    
}


    return (
        <>
       <h1>Items In Your Cart {items.length?items.length:" is Empty"}</h1>
        <div>{items.map((val)=>(
    <div className='card' key={val.id}>
       <div className='img'><img src={val.thumbnail} alt="..." /></div>
       <div className='detials'><h1>{val.title}</h1><p>DiscountPercentage: {val.discountPercentage}</p><p>Rating: {val.rating}</p></div>
       <div className='last'>
       <div className='select'><select onChange={(e)=>handlechange(e,val.id)}><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select><span >${val.price}</span></div>   
       <div className='price'><h3 onClick={()=>handleremove(val.id)}>Remove</h3></div>    
    </div></div>))}
    </div></>
  )
}

export default Body