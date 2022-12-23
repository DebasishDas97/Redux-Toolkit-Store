import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/prodcutsSlice";
import { STATUSES } from "../store/prodcutsSlice";

export default function Products() {
  const { data: products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>LOADING....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>There is an error </h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="products" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
