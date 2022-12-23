import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(remove(id));
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => {
          return (
            <div key={product.title} className="cartCard">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h6>{product.price}</h6>
              <button onClick={() => handleRemove(product.id)} className="btn">
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
