import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearCart } from "../utils/cartSlice";

const ShowCartItems = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  console.log(items);
  return (
    <div>
      <button
        onClick={() => {
          handleClearCart();
        }}
      >
        clear cart
      </button>
      {/* <CategoryItems item={items} /> */}
      hello
    </div>
  );
};

export default ShowCartItems;
