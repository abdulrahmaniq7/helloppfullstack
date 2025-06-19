import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "@tanstack/react-query";
import {setSelectedProduct, clearSelectedProduct} from "../store/SelectedProductSlice";
import {fetchPost} from "../apis/api";
import SelectedPkg from "../components/SelectedPkg";
import {addToCart, removeCart } from "../store/CartsSlice";
import CartItems from "../components/CartItems";
const RedxQury = ()=>{
  const dispatch = useDispatch();
  const cartProduct = useSelector((state)=>state.cart);
	const { data, isLoading, error } = useQuery({
 	queryKey: ["prodlist"],
	queryFn: fetchPost
  });
 
  const selectedItemHandler = (item)=>{
	dispatch(setSelectedProduct(item));
  	dispatch(addToCart(item.title));
  	  console.log(cartProduct);
  }


  if(isLoading) return <div>Loading Please wait...</div>
  if(error) return <div>Error: somethign went wrong!</div>
  return (
	<div>
	  {
		data.map((item, i)=>{
			return <div style={{ cursor: 'pointer' }} key={i} onClick={()=>{ selectedItemHandler(item);  } }>{item.title}</div>
		})
	  }
	  {
		<SelectedPkg />
	  }
	  <CartItems />
	</div>
  );
};
export default RedxQury;
