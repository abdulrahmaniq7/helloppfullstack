import { useDispatch, useSelector } from "react-redux";
import { clearSelectedProduct } from "../store/SelectedProductSlice";
const SelectedPkg = ()=>{
   const dispatch = useDispatch();
   const selectedProd = useSelector((state)=>state.selectedProduct);
   return (<div>
	   {selectedProd &&
                        <div>
                                <h3>Selected Product</h3>
                                <p>{selectedProd?.title}</p>
                                <button onClick={() => dispatch(clearSelectedProduct())}>Clear</button>
                        </div>	}
	   </div>
   )
};
export default SelectedPkg;
