import { useDispatch, useSelector } from "react-redux";
import Cuisine from "./Cuisine";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems)
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return (
        <div className=" text-center">
            <h1 className=" text-center text-xl font-bold m-3 p-3">Cart</h1>
            <div> 
               <p> {cartItems.map((items)=>items.name )}</p> 
            </div>

            <button className="bg-black text-white m-2 p-2 text-center" 
            onClick={handleClearCart}
            >Clear Cart</button>
            {cartItems.length==0 && <p> Your cart is empty!!.. Please add items to your cart</p>}
        </div>

)
}
export default Cart;