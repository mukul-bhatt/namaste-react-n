import {useDispatch, useSelector} from "react-redux";
import NestedMenu from "./NestedMenu";
import { clearCart } from "../utils/cartSlice"


const Cart = () => {

    const items = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
          <button className="button-85" onClick={()=>handleClearCart()}>Clear Cart</button>

          {items.map((item, index)=><NestedMenu data={item} key={index}/>)}

          {items.length === 0 && <h1>Your cart is empty. Please add some items to your cart</h1>}
        </div>
        
    )
}

export default Cart;

