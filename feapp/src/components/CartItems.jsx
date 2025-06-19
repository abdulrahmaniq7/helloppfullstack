import { useSelector, useDispatch } from "react-redux";
import {removeCart} from  "../store/CartsSlice";
const CartItems = ()=>{
	const dispatch = useDispatch();
	const removeItem = (item)=>{
	   dispatch(removeCart(item));
	};
	const data = useSelector((state)=>state.cart);
	return (<div>{data.items && data.items.map((item, i)=>{
		return <div key={i} onClick={()=>removeItem(item.name)} style={{color:"#eee"}}>{item.name}</div>
	})}</div>);
};
export default CartItems;
