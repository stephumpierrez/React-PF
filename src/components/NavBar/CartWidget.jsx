import { LuShoppingCart } from "react-icons/lu";
import "./cartwidget.css" 

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <LuShoppingCart size={30} />
            <p className="number"> 2 </p>
        </div>
    );
};

export default CartWidget;