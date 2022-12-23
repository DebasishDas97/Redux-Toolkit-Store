import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "space-between"
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items: {items.length} </span>
      </div>
    </div>
  );
}
